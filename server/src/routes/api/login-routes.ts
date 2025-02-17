import express from 'express';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Patient } from '../../models/index.js';

const router = express.Router();

router.post ('/login' , async (_req: Request, _res: Response) =>{

});

// Login route handler
export const login = async (req: Request, res: Response) => {
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
};

// Attach login route to router
// router.post('/login', login);

// Correct export
export { router as loginRouter };
