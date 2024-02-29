import sequelize from './init'

const connectDatabase = () => {
  sequelize
    .sync()
    .then(() => {
      console.log('Database synchronized successfully')
    })
    .catch((error) => {
      console.error('Error synchronizing database: ', error)
    })
}

export default connectDatabase
