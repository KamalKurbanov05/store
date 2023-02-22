const sequelize = require('../db');
const { DataTypes  } = require('sequelize');

const User = sequelize.define( 'user',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const Basket = sequelize.define( 'basket',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketProduct = sequelize.define( 'basketProduct',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Product = sequelize.define( 'product',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    price: { type: DataTypes.INTEGER },
    description: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }
})

const Type = sequelize.define( 'type',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true ,allowNull: false },
})

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

BasketProduct.hasOne(Product);
Product.belongsTo(BasketProduct);

Type.hasMany(Product);
Product.belongsTo(Product);

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    Type
}


