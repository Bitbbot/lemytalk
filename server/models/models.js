import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    authMethod: { type: DataTypes.STRING, allowNull: false },
    authKey: { type: DataTypes.STRING },
    authSecret: { type: DataTypes.STRING },
    nativeLanguage: { type: DataTypes.STRING },
    studiedLanguage: { type: DataTypes.STRING },
    languageLevel: { type: DataTypes.STRING },
    latitude: { type: DataTypes.FLOAT },
    longitude: { type: DataTypes.FLOAT },
    complains: { type: DataTypes.INTEGER, defaultValue: 0 },
    accusations: { type: DataTypes.INTEGER, defaultValue: 0 },
    banTime: { type: DataTypes.TIME },
    numberOfCalls: { type: DataTypes.INTEGER, defaultValue: 0 },
    numberOfCallsAfterAd: { type: DataTypes.INTEGER, defaultValue: 0 },
    isStickers: { type: DataTypes.BOOLEAN, defaultValue: false },
    isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export { User };
