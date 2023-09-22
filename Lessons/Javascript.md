## Arrays
#### Accessing elements of an array:
```javascript
const favoriteFood = ["pasta" , "pizza" , "dumplings"]
console.log(favoriteFoods[1]); //Shows value in the second index
```
#### Updating Elements of an Array
```javascript
favoriteFoods[1] = "veggie burgers"; // Replaces pizza with veggie burgers.
```
#### The Length property
```javascript
const numbers = [10, 20, 30, 40];
numbers.length; //.length allows you to see how many elements in an array.
// => 4 elements in the array
```
```javascript
(breakfast[breakfast.length-1]) // This is a neat trick to always access the last element in an array
```
#### Array Methods
A method manipulates items in an array, whether by sorting, removing, or adding data.
| Method | Column 2 | Code | 
|:--------:| :-------------:| -------------:|
| Push | Adds new items to the end of an array. | arrayName.push(element-to-add) |
| Pop |   Removes items from the end of an array. |arrayName.pop() |

## Objects
 Holds more varied information than arrays.
 ```javascript
const aboutMe = { //aboutMe is the object
  name: "Lisa Simpson", //Name is the property
  hometown: "Springfield, Oregon",
  age: 8,
  isABoss: true,
  hobbies: ["playing the saxophone", "political causes", "saving the world"]
};
```
Dot Notations to access values:
```javascript
objectName.propertyName
```
Dot Notations to add properties:
```javascript
objectName.propertyName= "value";
```
## Math Property
Method | What it Does
-------- | -----
Math.random() | Returns a random number between `0` (inclusive) and `1` (exclusive)
Math.floor() | Rounds down a number to it's nearest integer, like 4.7 would be 4.

## Comparison Statements
Operator | Functionality | Usage
-------- | ----- |------
> | Greater than |5>2
>= | Greater than or equal to |5>=5
<|Less than | 2<200
<=|Less than or equal to | 1<=72
==| **Loose equality** tests if the left and right sides have equal values. |5=="5"
===|**Strict Equality** tests if the left and right sides have equal values AND are the same data type. |"apples"==="apples"|
!==|**Inequality** tests if the data type or the value is different. The opposite of === |5!=="5"
&&|And Operator
|I I|Or Operator |

-   When using  **loose equality comparison**, or  `==`, JavaScript transforms the given values so that the data types will match. (Fancy term alert: This is called “type coercion.”)
    -   `"4" == 4`  would evaluate to  `true`.
    -   `4 == 4`  would evaluate to  `true`.
    -   `5 == 4`  would evaluate to  `false`.

-   When using  **strict equality comparison**, or  `===`, JavaScript isn’t so lenient; it makes sure the data type AND value match.
    -   `"4" === 4`  would evaluate to  `false`.
    -   `4 === 4`  would evaluate to  `true`.

-   The  **inequality operator**,  `!==`, is just as strict; if the data types OR the values don’t match, it will evaluate to  `true`.
    -   `"4" !== 4`  would evaluate to  `true`.
    -   `4 !== 4`  would evaluate to  `false`.
   
   ## Conditionals in Programming
   ```javascript
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
}
else if (assignmentsCompleted > .65) {
   console.log("Better catch up on your homework!");
}
 else {
    console.log("Better catch up on your homework!");
}
```
```javascript
if (temperature < 60) {
    if (weather === "raining") {
        console.log("It's cold and raining. Time for a heavy rain jacket.");
    } else if (weather === "snowing") {
        console.log("It's cold and snowing. Get out the parka.");
    } else {
        console.log("It's cold and clear. Feels like sweater weather today.");
    }
} else {
    if (weather === "raining") {
        console.log("It's warm but it's raining. A light windbreaker will do.");
    } else if (weather === "sunny") {
        console.log("It's warm and sunny. Tank top it is.");
    } else {
        console.log("It's warm and clear. Regular old T-shirt day.");
    }
}
```
```javascript
if(temperature === "cold" &&  windSpeed > 10){
    console.log("Time for the windbreaker!");
}
```
```javascript
if(weather === "snowing" || weather === "raining"){
    console.log("Looks like we need to wear boots today.");
}
```
## Loops
Considering how strictly the  `for`  loop is defined, there’s a general rule on when each type of loop is appropriate:

-   If you know  **exactly how many times**  the loop should execute, use a  `for`  loop for its precision. This includes iterating over an array, which has a specific amount of items.
-   If you’re  **not sure how many times**  the loop has to run but you do know when it should stop, use a  `while`  loop.
### For Loops
```javascript
for (let i = 0; i < 100; i++) {
  console.log(i);
} 
//Counts every number from 0 up to, but not including 100
```
```javascript
for(let i = 0; i < 3; i++){
    console.log("Hello?");
}
//a `for` loop that logs the message `"Hello?"` three times.
```
```javascript
//The loop below will `console.log` every element in the `cookies` array:
const cookies = ["chocolate chip", "gingersnap", "oatmeal raisin", "shortbread"];
for (let i = 0; i < cookies.length; i++) //We want to keep the loop going for as long as the iterator is less than `array.length` {
    console.log(cookies[i]);
}
```
``` javascript
let investment = 1000;
for(let year = 1; year < 11; year++){
    if(year === 7){
        investment = investment * 0.25;
    }else{
        investment = investment * 1.10;
    }
    console.log("Years: " + year + " Value: " + investment);
}
```
### While Loops
```javascript
let number = 0;
while (number < 11) {
    number = number + 1;
}
```
## Functions
```Javascript
function takeDamage() {
    player.health -= 1;
    player.damageTaken += 1;
    player.points -= 100;
}
```
Don't forget to call the function by: 
```Javascript
function sayHello() {
    console.log("Hello!");
}

sayHello(); //Call here
```
### Parameters
We can add multiple parameters separated by commas in the parentheses.
```Javascript
function calculateTotal(price, salesTaxRate) {
   const totalAmount = price + (price * salesTaxRate);
   console.log("The total is $" + totalAmount);
}
```
#### Invoking a function with arguments:

When we invoke a function, we replace parameters with the data we want them to actually use. The data we provide when invoking a function is called an  **argument**.
```javascript
function calculateTotal(price, salesTaxRate) {
   const totalAmount = price + (price * salesTaxRate);
   console.log("The total is $" + totalAmount);
}

calculateTotal(4.50, .10); //Argument
```
The output of a function is called its **return** value, and we use the `return` keyword inside the function to define the output.
```javascript
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
```
#### Scope
Global vs. Local Scope

A **globally scoped variable** is one to which the entire program has access.
Conversely, a **locally scoped variable** is declared inside of a code block and can only be accessed by other members of the same code block.

```javascript
function sayHello() {
   const brother = "Phillip";
   console.log("Hello " + brother);
};

sayHello();   // brother would be logged here...

console.log(brother);   // but it can’t be accessed on its own here.
```
#### The arrow function
```javascript
// Older way:
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);

// Newer way:
const calculateTotal = (price, salesTaxRate) => {
   return (price + (price * salesTaxRate));
}
calculateTotal(4.5, .10);
```
## The DOM 
Document Object Model allows JavaScript to access HTML elements on a webpage to alter their structure, style, and content.

**Document:**  The document is the webpage — typically the HTML document.

**Object:**  Every HTML element —  `<head>`,  `<body>`, or  `<p>`  — is an object. Because they’re objects, we can use methods and properties to change, delete, and add to them.

**Model:**  The model describes how the objects are laid out, often in a hierarchical tree. We call this the “DOM tree,” shown below. (You might see the terms “node,” “object,” or “element” all used interchangeably when referring to parts of the DOM.)

There are many methods for selecting specific DOM elements, but we’ll keep things simple by using these two:

-   `document.querySelector()`: Finds the first matching element.
-   `document.querySelectorAll()`: Finds all matching elements.

The  `document`  written before the query is telling JavaScript to check out the HTML page (aka, the document). Information about the specific element you want to grab goes inside of the  `()`. Let’s look at that next.

### querySelector and querySelectorAll

| Example | Functionality |
|:--------| :-------------|
| `document.querySelector('p')` | Grabs the first `< p >` in the document |
|`document.querySelector('.magic')` | Grabs the first element in the class `"magic"` in the document.
|`document.querySelector('#hero')`|Grabs the first element with an ID of `"hero"` in the document.
|`document.querySelector('.magic p')` |  Grabs the first  `<p>`  inside an element with the class  `"magic"`.
`document.querySelectorAll` works in basically the same way, except it will grab ALL of the elements that match the query.

https://ibb.co/4KYvQ6x

| Property Name | Functionality | Example|
|:--------| :-------------| :-------|
| `element.innerHTML` | Returns or sets the HTML content of the element. | `document.querySelector('h2').innerHTML = 'Hello there!';` updates the `<h2>` to read “Hello there!”. |
|`element.innerText`|Just gets the text without the html tags, unlike `inner.html`|
|`element.style`| Returns or sets the style attributes of the element. |`document.querySelector('h2').style.color = 'blue';` changes the color of the `<h2>` to blue.
|`element.className` |Sets the class of the element | `document.querySelector('h2').className = 'complete';` changes the class of the `<h2>` to `complete`. |
|`element.parentNode` |  Returns the parent, or containing element, of the requested element. | `document.querySelector('h2').parentNode;`  returns the parent element of the  `<h2>`.
|`element.childNodes` |Returns all of the child nodes that an element contains. |`document.querySelector('h2').childNodes;` returns the child nodes of the `<h2>`.

### Getting, Setting, and Removing Attributes
```javascript
const h1ID = document.querySelector('h1').getAttribute('id');
// This would store the ID attribute of the <h1> in the variable called h1ID.

document.querySelector('#title').setAttribute('class', 'blue');
// This would give the element with the ID of "title" a class of "blue."

document.querySelectorAll('p').removeAttribute('class');
// This would remove the class attribute from all <p> elements.

const titleText = document.getElementById("title").innerText;
    console.log(titleText);
//`console.log()` the text of the element with the ID of `title`
```
### Creating DOM Elements
```javascript
const paragraph = document.createElement('p');
paragraph.innerText = "Your passwords did not match.";
paragraph.setAttribute("class", "registration-error");

// This is what's created: <p class="registration-error">Your passwords did not match.</p>
```
### Adding Elements to the DOM
| Method | Description |
|:--------| -------------|
| element.append(newElement) | Adds the `newElement` as the last child at the end of the original `element` |
|element.prepend(newElement) | Adds the `newElement` as the first child at the front of the original `element` |
|[element.insertAdjacentElement(position, newElement)](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)|	Adds the `newElement` to a specific position relative to the original `element`|

```javascript
// First, we create the element and store it in a variable named newPost
const newPost = document.createElement("p");
// Then, we can set properties such as the innerText
newPost.innerText = "JavaScript can be tough!";
// Then, we can grab the parent element that we want to attach our new element to
const postsDiv = document.querySelector("#posts");
// Finally, we use the append method to add our newPost inside of the postsDiv
postsDiv.append(newPost);

//Another way to do the last two steps: 
document.body.appendChild(h4);
```
```Javascript
const element = document.getElementById("title");
//Always fetch element first.
```
## Responding to Browser Events
**Events** are user actions that occur on your webpage, such as hovering over an element, clicking a link, or scrolling down a page.
```javascript
onload  // When the page loads.
onclick  // When a user clicks something.
onmouseover  // When a user hovers their mouse over something.
onfocus  // When a user puts the cursor on a form field.
```
### onClick( )
```javascript
elementToGrab.onclick = function() {
   // Code that should run 
};
```
Let’s say we created a function named  `respondToLoginAttempt`  that throws a notification when the login element is clicked. The code snippet would look like this:

```javascript
document.querySelector('#login').onclick = respondToLoginAttempt;
```
In plain English, this is saying, “When the login element is clicked, run the function called `respondToLoginAttempt`.”
### addEventListener( )
The general format looks like this:  `elementToGrab().addEventListener(event, callback);`. Notice how this method takes two parameters:

1.  The name of the browser event being listened for.
2.  The callback function to be executed once that event occurs.

In this simple example, a clicked button will print a message to the console:

```javascript
function sayHello() {
    console.log("Hello!");
}
document.querySelector('button').addEventListener('click', sayHello);
```
### The Event Object- e
When attaching functions as event listeners, you might want that function to use the element that was clicked. Maybe you want to grab the text that was clicked to store or update it.

When defining the function, you can add a parameter, typically called  `e`. This parameter, known as the  **event object**, is passed into the function when it’s triggered. It contains helpful details about the event that triggered the function, including which element triggered the function:  `e.target`.

```javascript
document.querySelector('#disappearing-button').onclick = function(e) {
    console.log(e.target);
    e.target.remove();
}
```
### Exercise:
##### Add a text input that allows the user to log in whatever, when the user clicks the button with the ID of  `generate-message`, log the value the user has typed into the input field.

HTML:
 ```HTML
  <input type="text" id="message"> 
  <button id="generate-message">Express Yourself!</button> 
  ``` 

JS:
```JAVASCRIPT
function sayAnything(){
    const message = document.getElementById('message').value;
    console.log(message);
}
document.getElementById('generate-message').addEventListener("click", sayAnything)
```
##### Add user's to-do list items. The to-do app adds new list items when users click the button
HTML:
 ```HTML
 <label for="new-todo">Add a new item to the list:</label>
<input id="new-todo" type="text">
<button id="generate-todo">Add to the List!</button>
<h1>List of things to do</h1>
<ul class="todos">
</ul>
  ``` 

JS:
```JAVASCRIPT
  function addToDo(){
      const text = document.getElementById("new-todo").value;
      const newItem = document.createElement('li');
      newItem.innerText = text;
      document.querySelector('.todos').appendChild(newItem);
      // As an added bonus, clear the input so users can keep adding items!
      document.getElementById("new-todo").value = null;
    }
    document.getElementById("generate-todo").addEventListener('click', addToDo)
```\\||
``` javascript
let name  = prompt ('Enter your name: ); 
```
