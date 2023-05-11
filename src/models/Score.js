const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Score = sequelize.define('score', {
    // studentId // 2
    // testId    // 1
    score: {     // 10
        type: DataTypes.DECIMAL,
        allowNull: false
    },
});

module.exports = Score;