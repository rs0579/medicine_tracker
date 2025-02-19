import express from 'express';
import type { Request, Response } from 'express';

const router = express.Router();
//Using the user medication input, I want this information to be retrieved from the API

// GET /feedback - Get all feedback
router.post('/', async (req:Request, res:Response) => {
  try {
    const { name } = req.body //UNLESS YOU'RE PUTTING IT AFTER THE QUESTION MARK, IT IS BEST TO USE .BODY AND NOT .QUERY
    if (!name) {
      return res.status(400).json({ error: "Please provide valide medication name" })
    }
    const apiUrl = `https://api.fda.gov/drug/ndc.json?search=brand_name:${name}&limit=1`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`OpenFDA API Error: ${response.statusText}`)
      return
    }
    const data = await response.json()

    if (!data.results || data.results.length === 0) {
      return res.status(404).json({ error: 'No data found for this medication.' })
    }

    const medicationInfo = data.results[0]

    const result = {
      name: medicationInfo.brand_name || 'N/A',
      generic_name: medicationInfo.generic_name || 'N/A',
      strength: medicationInfo.active_ingredients[0].strength || 'N/A', //THERE IS A STRENGTH CATEGORY IN THE RETRIEVED DATA BUT IN INSOMNIA IT SAYS N/A.
      dosage_form: medicationInfo.dosage_form || 'N/A',
      route: medicationInfo.route || 'N/A'
    }
    return res.json(result)
  }
  catch (error: any) {
    return res.status(500).json({ error: error.message })
  }

})

 export { router as medicationRouter }



























// router.get('/', async (_req: Request, res: Response) => {
//   try {
//     const meds = await Medication.findAll();
//     res.status(200).json(meds);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// //USING THE USER ID, WE WANT TO FETCH THE APPROPRIATE MEDICATION DATA FROM THE API. 

// // GET /feedback/:id - Get feedback by ID
// router.get('/:id', async (req: Request, res: Response) => {
//   try {
//     const med = await Medication.findByPk(req.params.id);
//     if (med) {
//       res.status(200).json(med);
//     } else {
//       res.status(404).json({ error: 'Feedback not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // POST /feedback - Create new feedback
// router.post('/', async (req: Request, res: Response) => {
//   try {
//     const newMedications = await Medication.create(req.body);
//     res.status(201).json(newMedications);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



