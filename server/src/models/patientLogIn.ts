import { DataTypes, Sequelize, Model } from 'sequelize';

interface UserAttribute {
    username: string;
    password: string;

}


export class User extends Model<UserAttribute> implements UserAttribute {
    
    public username!: string;
    public password!: string;
}

export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false, 
            },

        },
        {
            tableName: 'user',       
            sequelize,              
        }
    );

    return User;
}
