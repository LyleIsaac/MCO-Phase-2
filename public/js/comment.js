// Toggle visibility of the comment form
function toggleCommentForm(formId) {
    const form = document.getElementById(formId);
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

// Handle comment submission
function submitComment(formId) {
    const form = document.getElementById(formId);
    const textarea = form.querySelector('textarea');
    const fileInput = form.querySelector('input[type="file"]');
    
    const commentText = textarea.value;
    const file = fileInput.files[0];
    
    console.log('Comment Text:', commentText);
    console.log('File:', file);

    textarea.value = '';
    fileInput.value = '';
    form.style.display = 'none';
}

// Toggle visibility of additional comments
function toggleComments() {
    const hiddenComments = document.querySelectorAll('.hidden-comments');
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    hiddenComments.forEach(comment => {
        comment.style.display = comment.style.display === 'none' || comment.style.display === '' ? 'block' : 'none';
    });
    seeMoreBtn.textContent = seeMoreBtn.textContent === 'See More' ? 'Show Less' : 'See More';
}

// Toggle truncated text
function toggleTruncate(element, fullTextId) {
    const fullText = document.getElementById(fullTextId);
    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        element.style.display = 'none';
    } else {
        fullText.style.display = 'none';
        element.style.display = 'block';
    }
}
