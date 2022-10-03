import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._width = 0;
        this._isTalking = false;
        this._nativeLanguage = "Russian";
        this._studiedLanguage = "";
        this._level = "";
        makeAutoObservable(this);
    }
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setWidth(num) {
        this._width = num;
    }
    setUser(user) {
        this._user = user;
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
    get width() {
        return this._width;
    }
    get level() {
        return this._level;
    }
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
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
