import {useState, useEffect } from "react"
import { retrieveMedication } from "../api/medicationAPI";
import { MedicationData } from "../interfaces/MedicationData";
import './dashbord.css'
const Api =() => {
    const [medications, setMedications] = useState<MedicationData[]>([]) //IDK if this is supposed to be an empty array, I am referring to the cass repo starter code.

    useEffect(() => {
        fetchMedications()
    }, [])
    const fetchMedications = async () => {
        const data = await retrieveMedication()
        setMedications(data)
    }
    return (
        <section className="api-form">
        {medications.length > 0 ? (
            medications.map((medication) => (
                <div key={medication.id}>
                    <h2>{medication.brand_name}</h2>
                    <p>Generic Name: {medication.generic_name}</p>
                    <p>Delivery Method: {medication.route}</p>
                    <p>Dosage Form: {medication.dosage_form}</p>
                    <p>Strength: {medication.strength}</p>
                </div>
            ))
        ) : (
            <p>No medications found.</p>
        )}
    </section>
    )
}
export default Api;