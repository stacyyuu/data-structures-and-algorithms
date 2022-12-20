# Singly Linked List
Create a singly linked list where each node links to only the nest node in the sequence.

## Challenge
Create a Node class that has properties for the value stored in the Node and a pointer to the next Node.
Create a Linked List class that includes a head property. The class should contain the following methods: insert, include, and toString.

## Approach & Efficiency
Created a class Node that has a constructor with value and next as the arguments. Assigned next as null for default. Created class Linked List with a constructor, assigning this.head to null. Created three methods to my Linked List class as described below. Added tests to make sure the methods were performing as expected. 

## API
Created an insert method that takes in a value and adds that value to the head of the list with an O(1) Time performance. Created an include method that takes in an argument and checks if that Node's value exists in the list. Created a toString method that prints out all the values in the Linked List in a specific format.

