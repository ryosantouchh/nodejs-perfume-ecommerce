import sequelize from '@database/init'
import { DataTypes } from 'sequelize'
import { v4 as uuid4 } from 'uuid'

const PerfumeNotes = ['woody', 'floral', 'citrus', 'aromatic']

const PerfumeModel = sequelize.define(
  'Perfume',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    perfume_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    perfume_note: {
      type: DataTypes.ENUM(...PerfumeNotes),
      allowNull: false,
    },
    bottle_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    getterMethods: {
      perfumeName() {
        return this.getDataValue('perfume_name')
      },
      perfumeNote() {
        return this.getDataValue('perfume_note')
      },
      bottleSize() {
        return this.getDataValue('bottle_size')
      },
      price() {
        return this.getDataValue('price')
      },
      qty() {
        return this.getDataValue('qty')
      },
    },
    setterMethods: {
      perfumeName(value) {
        this.setDataValue('perfume_name', value)
      },
      perfumeNote(value) {
        this.setDataValue('perfume_note', value)
      },
      bottleSize(value) {
        this.setDataValue('bottle_size', value)
      },
      price(value) {
        this.setDataValue('price', value)
      },
      qty(value) {
        this.setDataValue('qty', value)
      },
    },
  }
)

export default PerfumeModel
