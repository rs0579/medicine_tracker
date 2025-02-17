import { Sequelize } from 'sequelize';
import sequelize from '../config/connection.js';
import { PatientFactory } from './patient.js';
import { UserFactory } from './patientLogIn.js';

// Initialize the Feedback model using the factory function and the Sequelize instance.
// const Feedback = FeedbackFactory(sequelize);
const Patient = PatientFactory(sequelize);
const User = UserFactory(sequelize);

// Export the Sequelize instance and the initialized models for use in other parts of the application.
// Export the Sequelize instance and the initialized models for use in other parts of the application.
export { Patient, User };
    function UserFactory(_sequelize: Sequelize) {
        throw new Error('Function not implemented.');
    }

