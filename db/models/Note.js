const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Note = sequelize.define('Note', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 30]
      }
    },
    text: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 500]
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'notes',
    timestamps: false, // Adds createdAt and updatedAt
    underscored: false // Use camelCase instead of snake_case
  });

  return Note;
};