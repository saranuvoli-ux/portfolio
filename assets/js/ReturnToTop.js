document.addEventListener('DOMContentLoaded', function () {
    // Initialize variables
    const returnTopButton = document.getElementById('returnTopButton');

    // Function to show or hide the button based on scroll position
    function handleScroll() {
        if (window.scrollY > 100) {
            returnTopButton.style.display = 'block';
        } else {
            returnTopButton.style.display = 'none';
        }
    }

    // Function to scroll back to the top smoothly
    function returnTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event listener for the button click to return to the top
    returnTopButton.addEventListener('click', returnTop);

    // Event listener for window scroll to show/hide the button
    window.addEventListener('scroll', handleScroll);

    // Optional: Cleanup event listeners when the component is removed
    window.onunload = function () {
        window.removeEventListener('scroll', handleScroll);
        returnTopButton.removeEventListener('click', returnTop);
    };
});