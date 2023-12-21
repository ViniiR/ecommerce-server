
const Users = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "não pode ser null"
                },
                notEmpty: {
                    msg: "nome obrigatório"
                }
            },
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "email pode ser null"
                },
                notEmpty: {
                    msg: "email obrigatório"
                },
                isEmail: {
                    msg: "email invalido"
                }
            },
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "senha pode ser null"
                },
                notEmpty: {
                    msg: "senha obrigatório"
                },
                len: {
                    args: [8,255],
                    msg: "sua senha precisa ter no minimo 8 caracteres"
                }
            }
        },
    });
    return Users;
}

module.exports = Users;