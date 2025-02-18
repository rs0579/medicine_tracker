import express from 'express';
import type { Request, Response} from 'express';
import { Medication } from '../../models/index.js';

const router = express.Router();

// GET /feedback - Get all feedback
router.get('/', async (_req: Request, res: Response) => {
  try {
    const meds = await Medication.findAll();
    res.status(200).json(meds);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /feedback/:id - Get feedback by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const med = await Medication.findByPk(req.params.id);
    if (med) {
      res.status(200).json(med);
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /feedback - Create new feedback
router.post('/', async (req: Request, res: Response) => {
  try {
    const newMedications = await Medication.create(req.body);
    res.status(201).json(newMedications);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export { router as medicationRouter };
