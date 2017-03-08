import { observable } from 'mobx';

export default class CountStore {
    @observable counter = 0;

    increament() {
        this.counter++;
    }

    decreament() {
        this.counter--;
    }

    get counter() {
        return this.counter;
    }
}
