// Path: submit.js

// const form = document.querySelector("#contact-form");

const form = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec';

form.addEventListener('submit', e => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
      alert('Success!');
      submitButton.disabled = false;
    })
    .catch(error => {
      alert('Error: ' + error.message);
      submitButton.disabled = false;
    });
});

