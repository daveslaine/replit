import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import storageRouter from "./storage";
import authRouter from "./admin/auth";
import adminInstructorsRouter from "./admin/instructors";
import adminAircraftRouter from "./admin/aircraft";
import publicInstructorsRouter from "./public/instructors";
import publicAircraftRouter from "./public/aircraft";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(storageRouter);
router.use(authRouter);
router.use(adminInstructorsRouter);
router.use(adminAircraftRouter);
router.use(publicInstructorsRouter);
router.use(publicAircraftRouter);

export default router;
