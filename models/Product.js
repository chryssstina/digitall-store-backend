'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    use_in_menu: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    description: DataTypes.STRING,

    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    price_with_discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    tableName: 'products',
    timestamps: true,
    underscored: true,
  });

  Product.associate = (models) => {
    Product.hasMany(models.ProductImage, {
      foreignKey: 'product_id',
    });

    Product.hasMany(models.ProductOption, {
      foreignKey: 'product_id',
    });

    Product.belongsToMany(models.Category, {
      through: models.ProductCategory,
      foreignKey: 'product_id',
    });
  };

  return Product;
};