# Singly Linked List
Create a singly linked list where each node links to only the nest node in the sequence.

## Challenge
Create a Node class that has properties for the value stored in the Node and a pointer to the next Node.
Create a Linked List class that includes a head property. The class should contain the following methods: append, insertBefore, and insertAfter.

## Approach & Efficiency
Created a class Node that has a constructor with value and next as the arguments. Assigned next as null for default. Created class Linked List with a constructor, assigning this.head to null. Created three methods to my Linked List class as described below. Added tests to make sure the methods were performing as expected.

## API
Created an append method that takes in a value and adds that value to the end of the linked list. Created an insertBefore method that takes in two arguments, a value and a new value, and inserts the new value immediately before the value specified. Created a insertAfter method that takes in two arguments, a value and a new value, and inserts the new value immediately after the value specified.

