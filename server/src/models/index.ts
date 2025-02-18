import { Sequelize } from 'sequelize';
import sequelize from '../config/connection.js';

import { PatientFactory } from './patient.js';
import { UserFactory } from './patientLogIn.js';
import { SymptomsFactory } from './symptoms.js';  // Import the Symptoms model factory function
import { MedicationFactory } from './medication.js';           // Import the medications model factory function



const Patient = PatientFactory(sequelize);
const User = UserFactory(sequelize);



    function UserFactory(_sequelize: Sequelize) {
        throw new Error('Function not implemented.');
    }



// Initialize the Medications model using the factory function and the Sequelize instance.
const Medication = MedicationFactory(sequelize);
// Initialize the Symptoms model using the factory function and the Sequelize instance.
const Symptoms = SymptomsFactory(sequelize);

// Export the Sequelize instance and the initialized models for use in other parts of the application.
export { Symptoms, Medication, Patient, User };

