function toggleComments(commentId) {
    var comments = document.getElementById(commentId);
    if (comments.style.display === "none") {
        comments.style.display = "block";
    } else {
        comments.style.display = "none";
    }
}

function toggleTruncate(truncatedElement, fullTextId) {
    var fullTextElement = document.getElementById(fullTextId);
    if (fullTextElement.style.display === "none") {
        truncatedElement.style.display = "none";
        fullTextElement.style.display = "block";
    } else {
        truncatedElement.style.display = "block";
        fullTextElement.style.display = "none";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

window.onload = function() {
    document.getElementById('comment1-upvotes').innerText = getRandomInt(25);
    document.getElementById('comment1-downvotes').innerText = getRandomInt(25);
    document.getElementById('comment2-upvotes').innerText = getRandomInt(25);
    document.getElementById('comment2-downvotes').innerText = getRandomInt(25);
    document.getElementById('comment3-upvotes').innerText = getRandomInt(25);
    document.getElementById('comment3-downvotes').innerText = getRandomInt(25);
    document.getElementById('comment4-upvotes').innerText = getRandomInt(25);
    document.getElementById('comment4-downvotes').innerText = getRandomInt(25);
    document.getElementById('comment5-upvotes').innerText = getRandomInt(25);
    document.getElementById('comment5-downvotes').innerText = getRandomInt(25);
}
