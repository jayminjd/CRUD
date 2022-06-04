module.exports = (sequelize, DataTypes) => {
  const postTable = sequelize.define(
    "post",
    {
      id: {
        field: "id",
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        field: "user_id",
        type: DataTypes.NUMBER,
      },
      title: {
        field: "title",
        type: DataTypes.STRING,
      },
      body: {
        field: "body",
        type: DataTypes.STRING,
      },
    },
    {
      schema: "public",
      tableName: "post",
      timestamps: false,
    }
  );
  return postTable;
};
