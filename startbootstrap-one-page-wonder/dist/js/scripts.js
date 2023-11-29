/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function searchData() {
  // Get the data inputted by the user
  const userInput = document.getElementById('search-bar').value;


  // Simple check if URL starts with 'http://' or 'https://'
  if (userInput.startsWith('http://') || userInput.startsWith('https://')) {
      document.getElementById('status-check').textContent = 'Good';
      document.getElementById('status-check').textContent = 'Probably Good';
      document.getElementById('status-check').style.color = 'green';
  } else {
      document.getElementById('status-check').textContent = 'Bad';
      document.getElementById('status-check').textContent = 'Probably Bad';
      document.getElementById('status-check').style.color = 'red';
  }
}