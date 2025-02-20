import express from 'express';
import type { Request, Response } from 'express';
import { Medication } from '../../models/index.js';

const router = express.Router();
//Using the user medication input, I want this information to be retrieved from the API
router.get('/', async (_req:Request, res:Response) => {
  try {
    res.json([])
  } catch (error : any) {
    res.status(500).json({ error: error.message })
  }
})


// GET /feedback - Get all feedback
router.post('/', async (req:Request, res:Response) => {
  try {
    console.log(req.body)
    const { medicationName } = req.body //UNLESS YOU'RE PUTTING IT AFTER THE QUESTION MARK, IT IS BEST TO USE .BODY AND NOT .QUERY
    if (!medicationName) {
      res.status(400).json({ error: "Please provide valide medication name" })
    }
    const apiUrl = `https://api.fda.gov/drug/ndc.json?search=brand_name:${medicationName}&limit=1`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`OpenFDA API Error: ${response.statusText}`)
      
    }
    const data = await response.json()

    if (!data.results || data.results.length === 0) {
      res.status(404).json({ error: 'No data found for this medication.' })
    }

    const medicationInfo = data.results[0]
console.log(medicationInfo);

   
    const result = {
      // name: medicationInfo.brand_name || 'N/A',
      officialName: medicationInfo.generic_name || 'N/A',
      strength: medicationInfo.active_ingredients[0].strength || 'N/A', //THERE IS A STRENGTH CATEGORY IN THE RETRIEVED DATA BUT IN INSOMNIA IT SAYS N/A.
      dosageForm: medicationInfo.dosage_form || 'N/A',
      // delivery: medicationInfo.route || 'N/A'
      delivery: 'N/A' 
    }
    const medication = await Medication.create (
      result
    )
    res.json(medication)
  }
  catch (error: any) {
    res.status(500).json({ error: error.message })
  }

})

 export { router as medicationRouter }