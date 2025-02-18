import { medicationRouter } from './medication-routes.js';
import { patientRouter } from './patient-routes.js';
import {loginRouter} from './login-routes.js';
import express from 'express';
const router = express.Router();


router.use('/meds', medicationRouter);

router.use('/patient', patientRouter)
router.use('/patientLogin', loginRouter)

export default router;
