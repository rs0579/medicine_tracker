import express from 'express';
import type { Request, Response} from 'express';
import { Patient } from '../../models/index.js';
import bcrypt from 'bcryptjs';

const router = express.Router();


// GET /signup/ - log user in
router.post('/signup', async (req: Request, res: Response) => {
    const {email, name, password} = req.body;

    if(!email || !name || !password) {
        res.status(400).json({
            "Error": "Invalid patient data provided"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await Patient.create({
        name,
        email,
        password: hashedPassword,
    })

    res.status(200).json({
        message: 'user created'
    })
});

router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      // Check if patient exists
      const patient = await Patient.findOne( { where: { email } } );
      if (!patient) {
        return res.status(400).json({ message: 'Invalid email or password' }); // Avoid leaking user existence
      }
  
      // Check if the password matches
      const isMatch = await bcrypt.compare(password, patient.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // You can implement a JWT token or session here
      // For now, let's assume success
      return res.status(200).json({ message: 'Login successful', patient });
  
    } catch (err) {
      console.error(`Login Error:`); // Log the actual error for debugging
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
export { router as patientRouter };
