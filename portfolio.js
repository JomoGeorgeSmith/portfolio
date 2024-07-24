// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const colors = ["#51cacc", "#9df871", "#e0ff77", "#de9dd6", "#ff708e", "#84BD00", "#00A9E0", "#66d3f0", "#a1e44d", "#b8e986"];
    const background = document.querySelector('.background');
    background.style.backgroundColor = "#f0f0f0"; 

    for (let i = 0; i < 100; i++) {
        const shape = document.createElement("div");
        const color = colors[Math.floor(Math.random() * colors.length)];
        shape.style.borderColor = color;
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.setProperty('--move-x', `${Math.random() * 100 - 50}px`);
        shape.style.setProperty('--move-y', `${Math.random() * 100 - 50}px`);

        // Determine shape type based on the iteration
        if (i % 3 === 0) {
            // Square
            shape.classList.add("square");
            shape.style.borderWidth = "2px";
            shape.style.borderStyle = "solid";
            shape.style.backgroundColor = "transparent";
            shape.style.width = shape.style.height = "20px"; // Fixed size for squares
        }
        //else if (i % 3 === 1) {
        //    // Triangle
        //    shape.classList.add("triangle");
        //    shape.style.width = "0";
        //    shape.style.height = "0";
        //    shape.style.borderLeft = "10px solid transparent"; // Fixed size for triangles
        //    shape.style.borderRight = "10px solid transparent"; // Fixed size for triangles
        //    shape.style.borderBottom = "20px solid " + color; // Colored border for triangles
        //}
        else {
            // Circle
            shape.classList.add("circle");
            shape.style.borderWidth = "2px";
            shape.style.borderStyle = "solid";
            // White fill for circles
            shape.style.width = shape.style.height = "20px"; // Fixed size for circles
            shape.style.borderRadius = "50%"; // Make it round
        }

        const animationDuration = `${Math.random() * 5 + 5}s`; // Between 5 and 10 seconds
        shape.style.animation = `moveShape ${animationDuration} infinite linear`;


        background.appendChild(shape);
    }
});


document.addEventListener('scroll', function() {
    const points = document.querySelectorAll('.journey-point');
    points.forEach((point, index) => {
        const rect = point.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // Current point is in view
            point.classList.add('active');
            // Optional: Check if you want to change the previous point's class
            if (index > 0) {
                points[index - 1].classList.remove('active');
                points[index - 1].classList.add('visited'); // Ensure you define .visited in CSS if needed
            }
        } else {
            point.classList.remove('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', () => {
        const journeyPoints = document.querySelectorAll('.journey-point');
        journeyPoints.forEach((point, index) => {
            const logo = point.querySelector('.company-logo');
            // Check if the journey point is above the bottom of the viewport
            if (point.getBoundingClientRect().top < window.innerHeight) {
                logo.classList.add('visible');
            }
        });
    });
});

window.onload = function() {
    const backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.volume = 0.3; // Set the volume to 30%
    
    // Attempt to play the music
    const playPromise = backgroundMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Autoplay started!
        }).catch(error => {
            // Autoplay was prevented.
            // Show a UI element to let the user manually start playback.
            console.log("Playback prevented. User might need to start playback manually.");
            showPlayButton(); // Call function to show play button
        });
    }
};

function showPlayButton() {
    // Create a play button if it doesn't already exist
    if (!document.getElementById("playButton")) {
        const button = document.createElement("button");
        button.id = "playButton";
        button.innerText = "Play Music";
        button.onclick = function() {
            const backgroundMusic = document.getElementById("backgroundMusic");
            backgroundMusic.play().then(_ => {
                // Hide the play button once the music starts playing
                button.style.display = "none";
            }).catch(error => {
                console.error("Error trying to play the music:", error);
            });
        };
        
        // Append the button to the body or a specific element on your page
        document.body.appendChild(button);
    }
}