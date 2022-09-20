import { makeAutoObservable } from "mobx";

export default class MessageStore {
    constructor() {
        this._number = 8;
        this._messages = [
            { user: "stranger", text: "Hello", id: 1 },
            { user: "you", text: "Hi", id: 2 },
            { user: "stranger", text: "How are you?", id: 3 },
            { user: "you", text: "fine", id: 4 },
            { user: "stranger", text: "I see", id: 5 },
            { user: "you", text: "And you?", id: 6 },
            { user: "you", text: "Cool", id: 7 },
            {
                user: "stranger",
                text:
                    "Oh, today I had a dream. It was awesome " +
                    "and I'm gonna write script " +
                    "and film a movie based on my dream ",
                id: 8,
            },
            { user: "stranger", text: "Hello", id: 9 },
            { user: "you", text: "Hi", id: 10 },
            { user: "stranger", text: "How are you?", id: 11 },
            { user: "you", text: "fine", id: 12 },
            { user: "stranger", text: "I see", id: 13 },
            { user: "you", text: "And you?", id: 14 },
            { user: "you", text: "Cool", id: 15 },
            {
                user: "stranger",
                text:
                    "Oh, today I had a dream. It was awesome " +
                    "and I'm gonna write script " +
                    "and film a movie based on my dream ",
                id: 16,
            },
            { user: "you", text: "Cool", id: 17 },
        ];
        makeAutoObservable(this);
    }
    setNumber(number) {
        this._number = number;
    }
    setMessages(message) {
        this._messages = this._messages.append(message);
    }
    get number() {
        return this._number;
    }
    get messages() {
        return this._messages;
    }
}
