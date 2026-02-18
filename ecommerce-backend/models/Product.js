import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';
// thid id the products details model which will be used to store the products details in the database. It has the following fields:
// - id: a unique identifier for the product, generated using UUIDv4.
// - image: a string that stores the URL of the product image.
// - name: a string that stores the name of the product.
// - rating: a JSON object that stores the rating details of the product.
// - priceCents: an integer that stores the price of the product in cents.
// - keywords: a string that stores the keywords associated with the product, which is stored as a comma-separated string in the database but is accessed as an array in the application code.
// - createdAt: a date field that stores the timestamp when the product was created.
// - updatedAt: a date field that stores the timestamp when the product was last updated.
export const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.JSON,
    allowNull: false
  },
  priceCents: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  keywords: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('keywords').split(',');
    },
    set(val) {
      this.setDataValue('keywords', val.join(','));
    }
  },
  createdAt: {
    type: DataTypes.DATE(3)
  },
  updatedAt: {
    type: DataTypes.DATE(3)
  },
}, {
  defaultScope: {
    order: [['createdAt', 'ASC']]
  }
});
