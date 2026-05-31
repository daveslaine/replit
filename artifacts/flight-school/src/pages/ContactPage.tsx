import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone, MessageSquare, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useSubmitContact } from "@workspace/api-client-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  trainingGoal: z.enum([
    "private-pilot", 
    "instrument-rating", 
    "commercial-pilot", 
    "cfi-cfii", 
    "airline-pathway", 
    "aircraft-rental", 
    "not-sure"
  ], {
    required_error: "Please select a training goal",
  }),
  questions: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactPage() {
  const submitContact = useSubmitContact();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      questions: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    submitContact.mutate({ data });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Contact Accelerated Flight School | Van Nuys Airport KVNY | 323-332-0585</title>
        <meta name="description" content="Contact Accelerated Flight School at Van Nuys Airport. Call or text 323-332-0585 for questions about flight training, pricing, or to get started. We'll explain everything." />
      </Helmet>

      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Have Questions? Let's Talk Aviation.</h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            We are happy to answer questions even if you are completely new to aviation and do not know where to start.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Reach Out Directly</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full border border-slate-200 shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg mb-1">Phone Number</h3>
                      <p className="text-3xl font-bold text-primary mb-3">323-332-0585</p>
                      <div className="flex gap-3">
                        <a href="tel:323-332-0585">
                          <Button variant="secondary" className="gap-2">
                            <Phone className="w-4 h-4" /> Call
                          </Button>
                        </a>
                        <a href="sms:323-332-0585">
                          <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                            <MessageSquare className="w-4 h-4" /> Text
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-6 border-t border-slate-200">
                    <div className="bg-white p-3 rounded-full border border-slate-200 shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg mb-1">Location</h3>
                      <p className="text-slate-600">7900 Balboa Blvd H7<br />Van Nuys, CA 91406<br />Van Nuys Airport (KVNY)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  title="Accelerated Flight School location at Van Nuys Airport"
                  src="https://www.google.com/maps?q=7900+Balboa+Blvd,+Van+Nuys,+CA+91406&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              {submitContact.isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                  <p className="text-slate-600">We've received your inquiry and will be in touch shortly to help you get started.</p>
                  <Button variant="outline" onClick={() => submitContact.reset()} className="mt-4">
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
                  <p className="text-slate-600 mb-6">Tell us your goal, budget, schedule, and experience level. We'll help explain the best starting point.</p>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="(818) 555-0123" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="trainingGoal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Training Goal</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a goal..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="private-pilot">Private Pilot</SelectItem>
                                <SelectItem value="instrument-rating">Instrument Rating</SelectItem>
                                <SelectItem value="commercial-pilot">Commercial Pilot</SelectItem>
                                <SelectItem value="cfi-cfii">CFI / CFII</SelectItem>
                                <SelectItem value="airline-pathway">Airline Pathway</SelectItem>
                                <SelectItem value="aircraft-rental">Aircraft Rental</SelectItem>
                                <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="questions"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Questions (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any specific questions about pricing, schedule, or training?" 
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {submitContact.isError && (
                        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                          Something went wrong sending your message. Please call or text us at{" "}
                          <a href="tel:323-332-0585" className="font-bold underline">323-332-0585</a> and we'll help you right away.
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full h-12 text-lg font-bold" 
                        disabled={submitContact.isPending}
                      >
                        {submitContact.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}