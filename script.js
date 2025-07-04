document.addEventListener('DOMContentLoaded', () => {
    const falImageElement = document.getElementById('falImage');
    const getFalButton = document.getElementById('getFalButton');
    const getFalAgainButton = document.getElementById('getFalAgainButton');
    const headingElement = document.querySelector('.container h1');

    const fetchAndDisplayFal = () => {
        // Generate a random number between 1 and 150
        const randomNumber = Math.floor(Math.random() * 150) + 1;
        const imageUrl = `https://www.beytoote.com/images/Hafez/${randomNumber}.gif`;

        // Show loading state (optional, could be a spinner or text)
        falImageElement.src = ''; // Clear previous image
        falImageElement.alt = 'در حال بارگذاری فال...';
        falImageElement.style.display = 'block'; // Show the image element

        // Preload image to handle potential errors and show it once loaded
        const img = new Image();
        img.onload = ()_InstanceActions => {
            falImageElement.src = imageUrl;
            falImageElement.alt = 'فال حافظ';
        };
        img.onerror = ()_InstanceActions => {
            falImageElement.alt = 'خطا در بارگذاری تصویر فال. لطفا دوباره تلاش کنید.';
            // Optionally, you could hide the image element or show a placeholder error image
        };
        img.src = imageUrl;
    };

    getFalButton.addEventListener('click', () => {
        fetchAndDisplayFal();
        headingElement.textContent = "فال شما:"; // Change heading
        getFalButton.style.display = 'none';
        getFalAgainButton.style.display = 'inline-block';
    });

    getFalAgainButton.addEventListener('click', () => {
        fetchAndDisplayFal(); // Fetch a new Fal
    });
});
