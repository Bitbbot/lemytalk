import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    authId: { type: DataTypes.STRING, allowNull: false, unique: true },
    authMethod: { type: DataTypes.STRING },
    nativeLanguage: { type: DataTypes.STRING, defaultValue: "" },
    studiedLanguage: { type: DataTypes.STRING, defaultValue: "" },
    languageLevel: { type: DataTypes.STRING, defaultValue: "" },
    isNotifications: { type: DataTypes.BOOLEAN, defaultValue: false },
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
