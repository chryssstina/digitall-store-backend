'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductImage = sequelize.define('ProductImage', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'product_images',
    timestamps: true,
    underscored: true,
  });

  ProductImage.associate = (models) => {
    ProductImage.belongsTo(models.Product, {
      foreignKey: 'product_id',
    });
  };

  return ProductImage;
};