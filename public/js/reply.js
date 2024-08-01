function toggleReplyForm(formId) {
    const form = document.getElementById(formId);
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

function submitReply(formId) {
    const form = document.getElementById(formId);
    const textarea = form.querySelector('textarea');
    if (textarea.value.trim() !== '') {
        // Logic for submitting the reply goes here
        console.log(`Submitting reply: ${textarea.value}`);
        // Reset form after submission
        textarea.value = '';
        form.style.display = 'none';
    } else {
        alert('Please write a reply before submitting.');
    }
}