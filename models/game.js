module.exports = function(sequelize, DataTypes) {
    var Games = sequelize.define("Games", {
      title: {
        type: DataTypes.STRING,
      },
      player_base: {
        type: DataTypes.FLOAT
      }
    }, { timestamps: false });
    return Games;
  };
  