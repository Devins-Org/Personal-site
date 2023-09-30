// Path: submit.js

// const form = document.querySelector("#contact-form");

// const form = document.querySelector("#form");
// const submitButton = document.querySelector("#submit");
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec';

// form.addEventListener('submit', e => {
//   submitButton.disabled = true;
//   e.preventDefault();
//   let requestBody = new FormData(form);
//   fetch(scriptURL, { method: 'POST', body: requestBody })
//     .then(response => {
//       alert('Success!');
//       submitButton.disabled = false;
//     })
//     .catch(error => {
//       alert('Error: ' + error.message);
//       submitButton.disabled = false;
//     });
// });

// contact.js

console.log('Connected to contact.js')

// Ensuring that DOM content is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const form = document.querySelector('#form')
    const submitButton = document.querySelector('#submit')

    if(!form) console.error('Form not found');
    if(!submitButton) console.error('Submit button not found');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec'

    // Attach the event listener to the form
    form.addEventListener('submit', async (event) => {
        console.log('Submit event detected');
        event.preventDefault(); // Prevents the default form submission
        submitButton.disabled = true;

        // Get form data
        const formData = new FormData(form);
        console.log('Form data created');

        try {
            console.log('Trying to send the form data');
            const response = await fetch(scriptURL, { method: 'POST', body: formData });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            console.log('Form submitted successfully');
            alert('Message sent successfully!');
        } catch (error) {
            console.error(`Error during the form submission: ${error.message}`);
            alert(`Message failed to send. Error: ${error.message}`);
        } finally {
            submitButton.disabled = false;
        }
    });
});
