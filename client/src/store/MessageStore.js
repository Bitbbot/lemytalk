import { makeAutoObservable } from 'mobx';

export default class MessageStore {
  constructor() {
    this._number = 8;
    this._messages = [
      { user: 'stranger', text: 'Hello', id: 1 },
      { user: 'you', text: 'Hi', id: 2 },
      { user: 'stranger', text: 'Where u from?', id: 3 },
      { user: 'you', text: "doesn't matter", id: 4 },
      { user: 'stranger', text: 'why?', id: 5 },
      { user: 'you', text: "You don't know this place anyway", id: 6 },
      { user: 'stranger', text: "Well. it's strange", id: 7 },
      {
        user: 'you',
        text: "It's a poor country in Africa. Just don't wanna talk about it",
        id: 8,
      },
      {
        user: 'stranger',
        text: 'so bad?',
        id: 9,
      },
      {
        user: 'you',
        text: 'kinda',
        id: 10,
      },
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
