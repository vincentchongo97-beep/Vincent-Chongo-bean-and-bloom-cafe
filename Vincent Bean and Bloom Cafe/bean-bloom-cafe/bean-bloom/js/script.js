// This JavaScript file is linked to index.html.
const orderButton = document.getElementById('orderButton');
const orderMessage = document.getElementById('orderMessage');

// The click is an event. The code uses variables, data types and operators.
orderButton.addEventListener('click', function () {
  const customerName = document.getElementById('customerName').value.trim(); // string
  const drink = document.getElementById('drink');
  const quantity = Number(document.getElementById('quantity').value); // number
  const price = Number(drink.value);
  const total = price * quantity; // multiplication operator
  const isValid = customerName !== '' && quantity > 0; // boolean 

  if (isValid) {
    const drinkName = drink.options[drink.selectedIndex].text.split(' — ')[0];

    // Part B: New variables for the discount feature
    // discount: the amount (in Kwacha) taken off the order when 3 or more drinks are bought
    // finalTotal: the amount the customer pays after the discount is subtracted
    let discount = 0; // starts at 0 (no discount) unless the condition below is met

    if (quantity >= 3) {
      discount = total * 0.10; // 10% discount when quantity is 3 or more
    }

    const finalTotal = total - discount; // original total minus the discount

    orderMessage.textContent = `Thank you, ${customerName}! You ordered ${quantity} ${drinkName}. Original total: K${total.toFixed(2)}. Discount: K${discount.toFixed(2)}. Final total: K${finalTotal.toFixed(2)}.`;
    console.log(`New order: ${customerName}, qty ${quantity}, total K${total}, discount K${discount.toFixed(2)}, final K${finalTotal.toFixed(2)}`); // console output
  } else {
    orderMessage.textContent = 'Please enter your name and a quantity of at least 1.';
  }
});
