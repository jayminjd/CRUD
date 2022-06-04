module.exports = (sequelize, DataTypes) => {
  const userTable = sequelize.define(
    "user",
    {
      id: {
        field: "id",
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        field: "name",
        type: DataTypes.STRING,
      },
      userName: {
        field: "username",
        type: DataTypes.STRING,
      },
      email: {
        field: "email",
        type: DataTypes.STRING,
      },
      street: {
        field: "street",
        type: DataTypes.STRING,
      },
      city: {
        field: "city",
        type: DataTypes.STRING,
      },
      suite: {
        field: "suite",
        type: DataTypes.STRING,
      },
      zipCode: {
        field: "zipcode",
        type: DataTypes.STRING,
      },
      lat: {
        field: "lat",
        type: DataTypes.STRING,
      },
      lng: {
        field: "lng",
        type: DataTypes.STRING,
      },
      companyName: {
        field: "company_name",
        type: DataTypes.STRING,
      },
      catchPhrase: {
        field: "catch_phrase",
        type: DataTypes.STRING,
      },
      bs: {
        field: "bs",
        type: DataTypes.STRING,
      },
    },
    {
      schema: "public",
      tableName: "user",
      timestamps: false,
    }
  );
  return userTable;
};
