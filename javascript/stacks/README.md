# Stacks
Create a Stack class that has a top property. It creates an empty Stack when instantiated. The class should contain the following methods: push, pop, peek, isEmpty.

## Approach & Efficiency
- Create push method that takes in value
- Check if it isEmpty, if true, assign top to value
- Else assign value next to top
- Top equals new Node

- Create pop method, check if it isEmpty
- Assign top to holder variable
- Change value of top to holder next
- Return holder value

- Create peek method, check if it isEmpty
- return top value
