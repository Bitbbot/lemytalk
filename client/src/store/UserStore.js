import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._id = "";
        this._width = 0;
        this._isTalking = false;
        this._nativeLanguage = "";
        this._studiedLanguage = "";
        this._level = "";
        this._isNotifications = false;
        makeAutoObservable(this);
    }
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setWidth(num) {
        this._width = num;
    }
    setIsNotifications(bool) {
        this._isNotifications = bool;
    }
    setId(id) {
        this._id = id;
    }
    setIsTalking(bool) {
        this._isTalking = bool;
    }
    setNativeLanguage(language) {
        this._nativeLanguage = language;
    }
    setStudiedLanguage(language) {
        this._studiedLanguage = language;
    }
    setLevel(level) {
        this._level = level;
    }
    get isNotifications() {
        return this._isNotifications;
    }
    get width() {
        return this._width;
    }
    get level() {
        return this._level;
    }
    get isAuth() {
        return this._isAuth;
    }
    get id() {
        return this._id;
    }
    get isTalking() {
        return this._isTalking;
    }
    get nativeLanguage() {
        return this._nativeLanguage;
    }
    get studiedLanguage() {
        return this._studiedLanguage;
    }
}
