import { DataTypes, Sequelize, Model, ForeignKey } from 'sequelize';
import { Patient } from './Patient';

interface SymptomsAttributes {
    id: number;
    UserId: number;
    Description: string;
    StartDate: Date;
}

class Symptoms extends Model<SymptomsAttributes> implements SymptomsAttributes {
    public id!: number;
    public UserId!: ForeignKey<Patient ['id']>
    public Description!: string;
    public StartDate!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function SymptomsFactory(sequelize: Sequelize): typeof Symptoms {
    Symptoms.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            UserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: Patient, 
                    key: 'id',     
                  },
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