import express from 'express';
import { medicationRouter } from './medication-routes.js';
import { patientRouter } from './patient-routes.js';

const router = express.Router();


router.use('/medication', medicationRouter);
router.use('/patient', patientRouter)



export default router;
