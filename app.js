function updateProductNumber(product, price, isIncreasing){
  const productInput = document.getElementById(product + '-number');
  let productNumber = productInput.value;
  if(isIncreasing == true){
    productNumber = parseInt(productNumber) + 1;
  }
  else if(productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

  // update case total 
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productNumber * price;

  // calculateTotal 
  calculateTotal();
}

// totalCalculation 
function getInputValue(product){
  const productInput = document.getElementById(product + '-number');
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal(){
  const phoneTotal = getInputValue('phone') * 1219;
  const caseTotal = getInputValue('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10; //10%
  const totalPrice = subTotal + tax;

  // update subtotal 
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-price').innerText = totalPrice;
}

//------------------------------------ END Function ---------------------------------------//


// Phone increase Decrease Handle
document.getElementById('phone-plus').addEventListener('click', function(){
  updateProductNumber( 'phone', 1219 ,true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
  updateProductNumber( 'phone', 1219 ,false);
})



// Case increase decrease  Handle

document.getElementById('case-plus').addEventListener('click', function(){
  // const caseInput = document.getElementById('case-number');
  // const caseNumber = caseInput.value;
  // caseInput.value = parseInt(caseNumber) + 1;
  updateProductNumber( 'case', 59 ,true);
})

document.getElementById('case-minus').addEventListener('click', function(){
  // const caseInput = document.getElementById('case-number');
  // const caseNumber = caseInput.value;
  // caseInput.value = parseInt(caseNumber) - 1;
  updateProductNumber( 'case', 59 ,false);
})
