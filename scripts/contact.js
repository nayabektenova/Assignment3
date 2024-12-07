// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Get the submit button and contact page container
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page'); // Using the id you provided for the contact page

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent form submission

    // Create a new <p> element
    const thankYouMessage = document.createElement('p');
    
    // Set the text content of the new <p> element
    thankYouMessage.textContent = 'Thank you for your message!';
    
    // Set the font size of the <p> element
    thankYouMessage.style.fontSize = '24px';

    // Clear the contact page content and append the thank you message
    contactPage.innerHTML = ''; // Clear the existing content
    contactPage.appendChild(thankYouMessage); // Add the thank you message
});
