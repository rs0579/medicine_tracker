import express from 'express';
import type { Request, Response} from 'express';
import { Patient } from '../../models/index.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// GET /login/ - log user in
router.post('/login', async (_req: Request, _res: Response) => {

});

// POST /user - Create new user
router.post('/', async (req: Request, res: Response) => {
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


export { router as patientRouter };
