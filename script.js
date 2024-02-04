let currentPosition = 'right'; // Initial position
let noButtonClickCount = 0; // Counter for 'No' button clicks

function changePosition(direction) {
    if (direction === 'left') {
        // Handle left button click (change image or perform other actions)
        document.getElementById('mainImage').src = "success.jpg";
        document.getElementById('mainImage').style.width = "30%";
        document.getElementById('mainImage').style.height = "auto";
        
        // Add an additional image to a random place on the page
        const additionalImage = document.createElement('img');
        additionalImage.src = 'sloth.jpg'; // Replace with your image source
        additionalImage.style.position = 'absolute';
        additionalImage.style.width = '150px'; // Set width to 150 pixels


        const screenWidth = window.innerWidth - additionalImage.width;
        const screenHeight = window.innerHeight - additionalImage.height;

        const randomX = Math.floor(Math.random() * screenWidth);
        const randomY = Math.floor(Math.random() * screenHeight);

        additionalImage.style.left = randomX + 'px';
        additionalImage.style.top = randomY + 'px';

        document.body.appendChild(additionalImage);

        // Change the header message
        document.getElementById('message').innerText = "HAPPY HAPPY HAPPYY";
    
    } else if (direction === 'right') {
        // Handle right button click
        noButtonClickCount++;

        if (noButtonClickCount > 5) {
            // If 'No' button is clicked more than 5 times, hide the button
            document.getElementById('noButton').style.display = 'none';

            // Change the header message
            document.getElementById('message').innerText = "You got played! No is not an option";
        } else {
            // Move the button to a random location
            const button = document.getElementById('noButton');
            const screenWidth = window.innerWidth - button.offsetWidth;
            const screenHeight = window.innerHeight - button.offsetHeight;

            const randomX = Math.floor(Math.random() * screenWidth);
            const randomY = Math.floor(Math.random() * screenHeight);

            button.style.position = 'absolute';
            button.style.left = randomX + 'px';
            button.style.top = randomY + 'px';
        }
    }
}
