import {useState, useEffect } from "react"
import { retrieveMedication } from "../api/medicationAPI";
import { PatientData } from "../interfaces/patientdata";
import PatientEntryForm from "../components/PatientEntryForm";


const Home = () => {
const [medications, setMedications] = useState<PatientData[]>([]) //IDK if this is supposed to be an empty array, I am referring to the cass repo starter code.

useEffect(() => {
    fetchMedications()
}, [])
const fetchMedications = async () => {
    const data = await retrieveMedication()
    setMedications(data)
}
    return (
        <>
        <h1>Welcome to MedTracker</h1>
        <p>Your Personalized Medication Companion. Our team of four is dedicated to making medication management effortless and informed. With MedTracker, you can log in, create a personalized list of your medications, and instantly access vital details—scientific name, delivery method, dosage form and strength, side effects, and more—powered by the FDA API. Plus, track your symptoms to stay on top of your health. Let MedTracker help you take control of your well-being with ease and confidence.</p>
        
        <PatientEntryForm />
        </>
        
    );
};

export default Home;
