import {makeObservable, observable} from 'mobx';

const min = Math.ceil(100);
const max = Math.floor(999);

class Order {
  number = '0000' + Math.floor(Math.random() * (max - min));

  constructor() {
    makeObservable(this, {
      number: observable,
    });
  }
}

const order = new Order();

export default order;
