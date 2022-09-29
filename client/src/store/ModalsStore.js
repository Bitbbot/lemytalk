import { makeAutoObservable } from "mobx";

export default class ModalsStore {
    constructor() {
        this._isSettings = false;
        this._isLogin = false;
        this._isReport = false;
        makeAutoObservable(this);
    }

    setIsSettings(bool) {
        this._isSettings = bool;
    }

    get isSettings() {
        return this._isSettings;
    }
    setIsLogin(bool) {
        this._isLogin = bool;
    }

    get isLogin() {
        return this._isLogin;
    }
    setIsReport(bool) {
        this._isReport = bool;
    }

    get isReport() {
        return this._isReport;
    }
}
