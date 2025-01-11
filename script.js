const mouseeeConfig = {
    color: "transparent",  // cursor border color
    size: 5,  // cursor size
    trailColor: "rgba(51, 51, 51, 0.1)",  // trail color
    trailTime: 500  // trail duration time
}

document.addEventListener('DOMContentLoaded', () => {

    loadContent('home.html');

    document.querySelectorAll('ul li a').forEach(item => {
        item.addEventListener('click', event => {
            // Remove the .active class from all anchor elements
            document.querySelectorAll('ul li a').forEach(link => {
                link.classList.remove('active');
            });

            // Add the .active class to the clicked anchor element
            event.target.classList.add('active');
        });
    });
});



function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;

            if (page === 'about.html') {
                //putText();
            }
        })
        .catch(error => console.error('Error loading content:', error));
}

