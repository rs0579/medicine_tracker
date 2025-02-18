// import { tipRouter } from './tip-routes.js';
// import { feedbackRouter } from './medication-routes.js';
import { medicationRouter } from './medication-routes.js';
import { patientRouter } from './patient-routes.js';
import express from 'express';
const router = express.Router();

// 
 router.use('/medication', medicationRouter);

router.use('/patient', patientRouter)


export default router;
