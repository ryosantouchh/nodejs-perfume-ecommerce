import sequelize from '@database/init'
import { DataTypes } from 'sequelize'
import { v4 as uuid4 } from 'uuid'

const OrderStatusEnum = ['paid', 'pending', 'shipped', 'refunded']

const OrderModel = sequelize.define(
  'Order',
  {
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
    tracking_number: {
      type: DataTypes.STRING,
    },
  },
  {
    getterMethods: {
      orderStatus() {
        return this.getDataValue('order_status')
      },
      orderItem() {
        return this.getDataValue('order_item')
      },
      shippingAddress() {
        return this.getDataValue('shipping_address')
      },
      shippingSubDistrict() {
        return this.getDataValue('shipping_sub_district')
      },
      shippingDistrict() {
        return this.getDataValue('shipping_district')
      },
      shippingCountry() {
        return this.getDataValue('shipping_country')
      },
      shippingPostalCode() {
        return this.getDataValue('shipping_postal_code')
      },
      shippingPhoneNumber() {
        return this.getDataValue('shipping_phone_number')
      },
      trackingNumber() {
        return this.getDataValue('tracking_number')
      },
    },
    setterMethods: {
      orderStatus(value) {
        this.setDataValue('order_status', value)
      },
      orderItem(value) {
        this.setDataValue('order_item', value)
      },
      shippingAddress(value) {
        this.setDataValue('shipping_address', value)
      },
      shippingSubDistrict(value) {
        this.setDataValue('shipping_sub_district', value)
      },
      shippingDistrict(value) {
        this.setDataValue('shipping_district', value)
      },
      shippingCountry(value) {
        this.setDataValue('shipping_country', value)
      },
      shippingPostalCode(value) {
        this.setDataValue('shipping_postal_code', value)
      },
      shippingPhoneNumber(value) {
        this.setDataValue('shipping_phone_number', value)
      },
      trackingNumber(value) {
        this.setDataValue('tracking_number', value)
      },
    },
  }
)

export default OrderModel
