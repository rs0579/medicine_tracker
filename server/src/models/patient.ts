import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface PatientAttribute {
    name: string;
    email: string;
    password: string;
    id: number;
}

interface PatientCreationAttributes extends Optional<PatientAttribute, 'id'> { }


export class Patient extends Model<PatientAttribute, PatientCreationAttributes> implements PatientAttribute {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


export function PatientFactory(sequelize: Sequelize): typeof Patient {
    Patient.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4, 
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,  
            },
        },
        {
            tableName: 'patient',
            sequelize,
        }
    );

    return Patient;
}
