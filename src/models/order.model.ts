import sequelize from '@database/init'
import { DataTypes } from 'sequelize'
import { v4 as uuid4 } from 'uuid'

const OrderStatusEnum = ['paid', 'pending', 'shipped', 'refunded']

const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.UUID,
    defaultValue: () => uuid4(),
    allowNull: false,
  },
  order_status: {
    type: DataTypes.ENUM(...OrderStatusEnum),
    allowNull: false,
  },
  order_item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shipping_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shipping_sub_district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shipping_district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shipping_country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shipping_postal_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shipping_phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Order
