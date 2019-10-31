/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {

        name: {
            type: DataTypes.STRING(11),
            allowNull: true,

        },
        msisdn: {
            type: DataTypes.STRING(11),
            allowNull: true,

        }
    }, {
        tableName: 'users'
    });
};
