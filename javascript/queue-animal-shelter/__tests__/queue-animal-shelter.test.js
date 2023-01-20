'use strict';

const AnimalShelter = require('../queue-animal-shelter');

describe('Animal Shelter tests', () => {
  test('Enqueue cat into queue', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueueAnimal({ type: 'cat' });
    expect(animalShelter.catQueue.front.value).toEqual({ type: 'cat' });
  });
  test('Enqueue multiple cats into queue', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueueAnimal({ type: 'cat', name: 'Maru', breed: 'British Short Hair', color: 'ginger', sex: 'male' });
    animalShelter.enqueueAnimal({ type: 'cat', name: 'Miso', breed: 'Scottish Fold', color: 'tabby', sex: 'male' });
    expect(animalShelter.catQueue.front.value.name).toEqual('Maru');
  });
  test('Dequeue out of cat queue expected value', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueueAnimal({ type: 'cat' });
    animalShelter.enqueueAnimal({ type: 'dog' });
    expect(animalShelter.dequeueAnimal('cat')).toEqual({ type: 'cat' });
  });
  test('Enqueue dog into queue', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueueAnimal({ type: 'dog' });
    expect(animalShelter.dogQueue.front.value).toEqual({ type: 'dog' });
  });
  test('Enqueue multiple dogs into queue', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueueAnimal({ type: 'dog', name: 'Choco', breed: 'Pembroke Welsh Corgi', color: 'sable', sex: 'female' });
    animalShelter.enqueueAnimal({ type: 'dog', name: 'Tofu', breed: 'Samoyed', color: 'white', sex: 'female' });
    expect(animalShelter.dogQueue.front.value.name).toEqual('Choco');
  });
  test('Dequeue out of dog queue expected value', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueueAnimal({ type: 'cat' });
    animalShelter.enqueueAnimal({ type: 'dog' });
    expect(animalShelter.dequeueAnimal('dog')).toEqual({ type: 'dog' });
  });
});
