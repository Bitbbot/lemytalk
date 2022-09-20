import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._isTalking = false;
        this._nativeLanguage = "Russian";
        this._studiedLanguage = "English";
        makeAutoObservable(this);
    }
    setIsAuth(bool) {
        this._isAuth = bool;
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
