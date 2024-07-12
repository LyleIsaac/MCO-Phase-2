// Function to show reviews
function showReviews(restaurantId) {
    const reviewSection = document.getElementById('reviews');
    const reviewContent = document.getElementById('reviewContent');
    document.getElementById('exitButton').addEventListener('click', function() {
        reviewSection.style.display = 'none';
    });

    // Clear existing reviews
    reviewContent.innerHTML = '';

    // Fetch and add new reviews from the HTML file
    fetch(`${restaurantId}.html`)
        .then(response => response.text())
        .then(data => {
            reviewContent.innerHTML = data;
            // Show the review section
            reviewSection.style.display = 'block';
        })
        .catch(error => console.error('Error fetching reviews:', error));
}

// Initially hide the reviews section
document.getElementById('reviews').style.display = 'none';
