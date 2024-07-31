document.addEventListener('DOMContentLoaded', () => {
    // needs user data sjkajksa
    fetch('/api/getUserProfile?userId=123')  //user data (to edit)
        .then(response => response.json())
        .then(data => {
            document.getElementById('username').innerText = data.username;
            document.getElementById('shortDesc').innerText = data.shortDesc;
            document.getElementById('profilePic').src = data.profilePic;

            const reviewsContainer = document.getElementById('reviews');
            data.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');
                reviewElement.innerHTML = `
                    <h3>${review.restaurantName}</h3>
                    <p>${review.content}</p>
                    <div class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
        })
        .catch(error => console.error('Error fetching user profile:', error));
});
