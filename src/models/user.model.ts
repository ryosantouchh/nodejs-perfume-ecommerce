import sequelize from '@database/init'
import { DataTypes } from 'sequelize'
import { v4 as uuid4 } from 'uuid'

const UserModel = sequelize.define(
  'User',
  {
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
  },
  {
    getterMethods: {
      username() {
        return this.getDataValue('username')
      },
      password() {
        return this.getDataValue('password')
      },
      email() {
        return this.getDataValue('email')
      },
      phoneNumber() {
        return this.getDataValue('phone_number')
      },
      address() {
        return this.getDataValue('address')
      },
      subDistrict() {
        return this.getDataValue('sub_district')
      },
      district() {
        return this.getDataValue('district')
      },
      country() {
        return this.getDataValue('country')
      },
      postalCode() {
        return this.getDataValue('postal_code')
      },
    },
    setterMethods: {
      username(value) {
        this.setDataValue('username', value)
      },
      password(value) {
        this.setDataValue('password', value)
      },
      email(value) {
        this.setDataValue('email', value)
      },
      phoneNumber(value) {
        this.setDataValue('phone_number', value)
      },
      address(value) {
        this.setDataValue('address', value)
      },
      subDistrict(value) {
        this.setDataValue('sub_district', value)
      },
      district(value) {
        this.setDataValue('district', value)
      },
      country(value) {
        this.setDataValue('country', value)
      },
      postalCode(value) {
        this.setDataValue('postal_code', value)
      },
    },
  }
)

export default UserModel
