import sequelize from '../config/connection.js';
import { SymptomsFactory } from './symptoms.js';  // Import the Symptoms model factory function
import { MedicationFactory } from './medication.js';           // Import the medications model factory function

// Initialize the Medications model using the factory function and the Sequelize instance.
const Medication = MedicationFactory(sequelize);
// Initialize the Symptoms model using the factory function and the Sequelize instance.
const Symptoms = SymptomsFactory(sequelize);

// Export the Sequelize instance and the initialized models for use in other parts of the application.
export { Symptoms, Medication };
