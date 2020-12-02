//Model
import Sequelize from 'sequelize'
import connection from '../database/connection'

const User = connection.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})



export default User;