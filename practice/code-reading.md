# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers. 
The first console.log(x), gives 2 because x has been declared in the function scope. 
The second console.log(x), gives 1 because x has been declared as a global scope.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

The output of console.log(f1()) is 10, because x has been declared in a global scope and therefore when the function has logged outside the function, we can see the output.
The output of console.log(y) is undefined, because y has been declared in a function scope and therefore it can not be accessed out of the function. 

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
The out put will be 9 and 10.
