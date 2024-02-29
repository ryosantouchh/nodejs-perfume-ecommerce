import sequelize from '@database/init'
import { DataTypes } from 'sequelize'
import { v4 as uuid4 } from 'uuid'

const PerfumeNotes = ['woody', 'floral', 'citrus', 'aromatic']

const Perfume = sequelize.define('Perfume', {
  perfume_id: {
    type: DataTypes.UUID,
    defaultValue: () => uuid4(),
    allowNull: false,
  },
  perfume_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  perfume_note: {
    type: DataTypes.ENUM(...PerfumeNotes),
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
})

export default Perfume
