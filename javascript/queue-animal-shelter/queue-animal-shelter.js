'use strict';

const Queue = require('../queues/queues');

class AnimalShelter {
  constructor() {
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }

  enqueueAnimal(animal) {
    if (animal.type === 'cat') {
      this.catQueue.enqueue(animal);
      return;
    }
    if (animal.type === 'dog'){
      this.dogQueue.enqueue(animal);
      return;
    } else {
      return 'null';
    }
  }

  dequeueAnimal(pref){
    if (pref === 'cat') {
      return this.catQueue.dequeue();
    }
    if (pref === 'dog'){
      return this.dogQueue.dequeue();
    } else {
      return 'null';
    }
  }
}

module.exports = AnimalShelter;
