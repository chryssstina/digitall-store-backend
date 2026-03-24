'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },

    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    tableName: 'product_categories',
    timestamps: false, // tabela pivot normalmente não precisa
    underscored: true,
  });

  ProductCategory.associate = (models) => {
    ProductCategory.belongsTo(models.Product, {
      foreignKey: 'product_id',
    });

    ProductCategory.belongsTo(models.Category, {
      foreignKey: 'category_id',
    });
  };

  return ProductCategory;
};