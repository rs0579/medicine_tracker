import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// This Tip model is responsible for managing the database interaction for the 'tips' table in PostgreSQL
interface PatientAttribute {
    name: string;
    email: string;
    password: string;
    id: number;
}

// Optional is a TypeScript utility type that makes some properties optional.
// TipCreationAttributes extends Optional to make the 'id' field optional when creating a new Tip entry.
interface PatientCreationAttributes extends Optional<PatientAttribute, 'id'> { }

// The Tip class extends Sequelize's Model class and implements TipAttributes to enforce the structure of tip records.
export class Patient extends Model<PatientAttribute, PatientCreationAttributes> implements PatientAttribute {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// The TipFactory function initializes the Tip model with its attributes and configurations.
// This function will be used in the Express.js application to set up the Tip table in the PostgreSQL database.
export function PatientFactory(sequelize: Sequelize): typeof Patient {
    Patient.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,  // Generate UUID automatically
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,     // Username field cannot be null.
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,      // Topic can be null, defaults to 'UX'.
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,     // Tip content cannot be null.
            },
        },
        {
            tableName: 'patient',       // Name of the table in PostgreSQL.
            sequelize,               // The Sequelize instance that connects to PostgreSQL.
        }
    );

    return Patient;  // Returns the initialized model to be used in the application.
}
