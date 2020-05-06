module.exports = (sequelize, DataTypes) => {
    const appUser = sequelize.define('appUser', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field:'id'
          },
          userDetails: {
            allowNull: false,            
            type: DataTypes.JSONB,
            field:'user_details'
          },
          isActive: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            field:'is_active'
          }, 
          createdBy: {
            allowNull: false,
            type: DataTypes.STRING,
            field:'created_by'
          },
          createdDate: {
            allowNull: false,
            type: DataTypes.DATE,
            field:'created_date'
          },
          modifiedBy: {
            allowNull: false,
            type: DataTypes.STRING,
            field:'modified_by'
          },
          modifiedDate: {
            allowNull: false,
            type: DataTypes.DATE,
            field:'modified_date'
          },
    }, {
      tableName:'app_users',
      timestamps: false
      });
 
    return appUser;
  };
  