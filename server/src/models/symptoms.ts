import { DataTypes, Sequelize, Model, ForeignKey } from 'sequelize';
import { Patient } from './patient.js';

interface SymptomsAttributes {
    id: number;
    Description: string;
    StartDate: Date;
}

class Symptoms extends Model<SymptomsAttributes> implements SymptomsAttributes {
    public id!: number;
    public Description!: string;
    public StartDate!: Date;
    declare patientId: ForeignKey<Patient ['id']>
}

export function SymptomsFactory(sequelize: Sequelize): typeof Symptoms {
    Symptoms.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            Description: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'user feedback',
            },
            StartDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: 'Symptoms',
            sequelize,
            timestamps: true,
        });
        
    return Symptoms;
}