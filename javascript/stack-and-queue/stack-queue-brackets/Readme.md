# Challenge Summary
- Write a function called validate brackets
- Arguments: string
- Return: boolean
- representing whether or not the brackets in the string are balanced

## Whiteboard Process
![whiteboard](https://i.ibb.co/5nP660m/Capture.png)

## Approach & Efficiency
space O(n)
time O(n)
## Solution
first using regex i seperated the brackets from the text and using the split function i made it into an array 
after that mapped throguh the array and pushed each bracket openning into a stack 
then did few conditions where if the ending for the beginning bracket is in the array still then remove the opening from the new stack 
if the stack becomes empty it will return true 
if the stack not empty it will return false 