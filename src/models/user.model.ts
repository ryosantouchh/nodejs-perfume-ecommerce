import sequelize from '@database/init'
import { DataTypes } from 'sequelize'
import { v4 as uuid4 } from 'uuid'

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: () => uuid4(),
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sub_district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default User
