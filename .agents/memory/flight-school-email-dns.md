---
name: Flight school contact email & domain DNS
description: How contact-form email delivery works, the Zoho inbox DNS dependency, and why page meta isn't in view-source for this SPA.
---

# Contact form email delivery

The flight-school contact form sends inquiries by email (no DB storage) via **Zoho SMTP**
(`smtppro.zoho.com`) authenticated as `fly@acceleratedflightschool.net`, delivered to that
same address. Config is env-driven: `SMTP_HOST/SMTP_PORT/SMTP_USER/CONTACT_TO_EMAIL` (shared
env vars) + `SMTP_PASSWORD` (secret). Implementation in `artifacts/api-server/src/lib/mailer.ts`.

**Why email, not DB:** user explicitly chose "email me instantly" over admin-panel storage.

# DNS dependency for receiving mail (NOT derivable from code)

Sending from the form works regardless of MX because sender+recipient are the same Zoho
account. But for the `fly@` mailbox to receive mail from the **outside world** (e.g. prospect
replies), GoDaddy DNS must have **Zoho MX + SPF**, which **conflict with the pre-existing
Mailgun MX/SPF** that were on the domain. Replacing them is required:
- Delete Mailgun: MX `mxa.mailgun.org`/`mxb.mailgun.org` (pri 60) and TXT SPF `include:mailgun.org`.
- Add Zoho: MX `mx.zoho.com` (10), `mx2.zoho.com` (20), `mx3.zoho.com` (50); TXT SPF `v=spf1 include:zohomail.com ~all`; plus Zoho's domain-verification TXT/DKIM from their setup wizard.
- Keep the `replit-verify` TXT and the apex A record `34.111.179.208`.

# Domain pointing (acceleratedflightschool.net)

GoDaddy is authoritative (ns15/ns16.domaincontrol.com). Apex A → `34.111.179.208` (Replit).
When the site "won't load" after a DNS change, check the **authoritative** answer directly
(query ns15/ns16 via node `dns.Resolver().setServers()`) vs the cached public answer — the
classic cause is the old record still cached at its original TTL; lowering TTL only speeds
*future* changes. `dig` is not installed; use node dns or Google DoH (`dns.google/resolve`).

# Why page titles aren't in "View Page Source"

This is a client-side-rendered SPA (React + Vite, no SSR). View-source shows the raw initial
HTML (generic default title from `index.html`). Per-page titles/meta are set by
`react-helmet-async` in JS after load — visible in the tab and live DOM, not in view-source.
Google renders JS so it generally still sees them; non-JS crawlers/social bots won't. A fix
would require SSR or build-time prerendering (a larger change, not yet done).
