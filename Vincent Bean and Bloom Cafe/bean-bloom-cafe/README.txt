Student name: Vincent Chongo
Student Number: 1707534908
Course: IWD
Submission Date: 26th August 2026
Time: 11:59

The webpage demonstrations:
1. Where to write JavaScript

Line: <script src="js/script.js"></script>
Located at the bottom of <body> in index.html. It is needed to connect the
external JavaScript file to the HTML page so the browser runs the code.
Placing it at the end of the body ensures all HTML elements exist before the
script tries to access them.


2. Output methods

On the webpage: orderMessage.textContent = `Thank you, ${customerName}! Your ${quantity} ${drinkName} order costs K${total}.`; this line of code displays the
order confirmation message directly on the page for the customer to see.
In the console: console.log(`New order: ${customerName}, total K${total}`); this line prints the order details to the
browser console, useful for the developer to check what happened.


3. Variables

customerName — stores the name typed by the customer.
quantity — stores the number of drinks ordered.
price — stores the cost of one drink.
total — stores the calculated cost of the whole order.

4. Data types

customerName — string (text typed into an input field).
quantity — number (converted from text using Number()).
price — number (converted from the selected option's value).
total — number (the result of multiplying two numbers).
isValid — boolean (true or false result of a comparison/condition).

5. Operators

Expression: const total = price * quantity;
The * (multiplication) operator multiplies the price of one drink by the quantity
ordered to calculate the total order cost.

6. Events

Event: click
Line: orderButton.addEventListener('click', function () {
  const customerName = document.getElementById('customerName').value.trim();
This listens for a click on the "Place order" button. When clicked, the function
runs: it reads the form values, checks they are valid, calculates the total (and
now the discount), and displays the order message.
