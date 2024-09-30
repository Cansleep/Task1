const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  // Get all input fields with the class 'form-input'
  let inputs = document.querySelectorAll('.form-input');
  let allFilled = true;

  // Loop through each input field
  inputs.forEach(function(input) {
      if (input.value === '') {
          allFilled = false;
      }
  });

  // If any input field is empty, prevent form submission and alert the user
  if (!allFilled) {
      alert('All input fields must be filled out');
      event.preventDefault();
  }
});

