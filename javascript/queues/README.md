# Queues
Create Queue class that has front property. It creates an empty Queue when instantiated. The class should contain the following methods: enqueue, dequeue, peek, isEmpty.

## Approach & Efficiency
- Create enqueue method that takes in value
- Check if it isEmpty, if true, assign front and rear to value
- Otherwise, assign rear next to value
- Rear equals value

- Create dequeue method, check if it isEmpty
- Else, create holder variable for front
- Assign front to holder next
- Return holder value

- Create peek method, check if it isEmpty
- Return front value
