document.addEventListener('DOMContentLoaded', function() {
    const googleLoginLink = document.getElementById('google-login');
    const googlePopup = document.getElementById('google-popup');
    const closePopup = document.getElementById('close-popup');

    googleLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        googlePopup.style.display = 'flex';
    });

    closePopup.addEventListener('click', function() {
        googlePopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === googlePopup) {
            googlePopup.style.display = 'none';
        }
    });
});
