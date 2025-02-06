document.getElementById("login-form").addEventListener("submit", getFormvalue);

function getFormvalue(event) {
  event.preventDefault(); // Prevents form from refreshing the page

  // Retrieve the values from the form fields
  const firstName = document.querySelector('input[name="fname"]').value.trim();
  const lastName = document.querySelector('input[name="lname"]').value.trim();

  // Handle edge cases for empty fields and alert the full name
  if (firstName && lastName) {
    alert(`${firstName} ${lastName}`);
  } else {
    alert("Please enter both First Name and Last Name.");
  }
}

