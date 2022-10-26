function counter(countTo, countBy) {
  let countTotal = [];
  for (i = countBy; i <= countTo; i += countBy) {
    countTotal.push(i); 
  }
  return countTotal;
}

function isNumber(input) {
  if (input === NaN){
    return false;
  } else {
    return true;
  }
}

function correctOrder(countTo, countBy) {
  if (countTo <= countBy) {
    return false;
  } else {
    return true;
  }
}

function negNumbers(countTo, countBy) {
  if (countTo < 0 || countBy < 0) {
    return true;
  } else {
    return false;
  }
}

window.addEventListener("load" , function(){
  let form = document.querySelector("form");
  form.addEventListener("submit" , handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  
  const countToInput = parseInt(document.getElementById('countTo').value);
  const countByInput = parseInt(document.getElementById('countBy').value);

  const p = document.querySelector('p#output');
  if (isNaN(countToInput) || isNaN(countByInput)) {
    document.getElementById('output').innerText = 'PLEASE ENTER A NUMBER!!!';
  } else if (correctOrder(countToInput, countByInput) !== true) {
    document.getElementById('output').innerText = 'COUNT TO CANNOT BE LESS THAN OR EQUAL TO COUNT BY!!!' 
  } else if (negNumbers(countToInput, countByInput) === true) {
    document.getElementById('output').innerText = 'NUMBERS CANNOT BE NEGATIVE'
  } else {
    document.getElementById('output').innerText = counter(countToInput, countByInput);
  }
}