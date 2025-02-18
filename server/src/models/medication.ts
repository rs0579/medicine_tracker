import { DataTypes, Sequelize, Model, ForeignKey } from 'sequelize';
import { Patient } from './patient';

// This Medications model is responsible for managing the database interaction for the 'medication' table in PostgreSQL
interface MedicineAttributes {
    id: number;
    strength: number;
    dosageForm: string;
    delivery: string;
    officialName: string;
}
export class Medication extends Model<MedicineAttributes> implements MedicineAttributes {
    declare id: number;
    declare strength: number;
    declare dosageForm: string;
    declare delivery: string;
    declare officialName: string;
    declare patientId: ForeignKey<Patient ['id']>
    //THIS IS HOW WE WILL DO THE FOREIGN KEY: Lesson 14.17.
}
export function MedicationFactory(sequelize: Sequelize): typeof Medication {
    Medication.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  // Automatically incrementing ID for each tip entry.
                primaryKey: true,     // Primary key for the Tip table.
            },
            strength: {
                type: DataTypes.INTEGER,
                allowNull: false,     // Username field cannot be null.
            },
            dosageForm: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            delivery: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            officialName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'medication'

        }
    );

    return Medication;  // Returns the initialized model to be used in the application.
}
