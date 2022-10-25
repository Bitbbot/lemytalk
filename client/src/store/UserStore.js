import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._id = "";
        this._width = 0;
        //status = null, waiting, talking
        this._status = null;
        this._localStream = null;
        this._remoteStream = null;
        this._nativeLanguage = "";
        this._studiedLanguage = "";
        this._level = "";
        this._isNotifications = false;
        this._isUsingKeyboard = false;
        this._viewPortHeight = 0;
        makeAutoObservable(this);
    }
    setViewPortHeight(num) {
        this._viewPortHeight = num;
    }
    setIsUsingKeyboard(bool) {
        this._isUsingKeyboard = bool;
    }
    setIsAuth(bool) {
        this._isAuth = bool;
    }
    setWidth(num) {
        this._width = num;
    }
    setLocalStream(stream) {
        this._localStream = stream;
    }
    setRemoteStream(stream) {
        this._remoteStream = stream;
    }
    setStatus(status) {
        this._status = status;
    }
    setIsNotifications(bool) {
        this._isNotifications = bool;
    }
    setId(id) {
        this._id = id;
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
    get viewPortHeight() {
        return this._viewPortHeight;
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
    get nativeLanguage() {
        return this._nativeLanguage;
    }
    get studiedLanguage() {
        return this._studiedLanguage;
    }
    get localStream() {
        return this._localStream;
    }
    get remoteStream() {
        return this._remoteStream;
    }
    get status() {
        return this._status;
    }
}
