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
                const titleContainer = document.createElement('div');
                titleContainer.style.position = 'relative';  // Make the container relative

                const titleDisplay = document.createElement('div');
                titleDisplay.id = 'book-title-display';

                // Append the titleDisplay inside the titleContainer
                titleContainer.appendChild(titleDisplay);

                // Find the bookshelf container and insert titleContainer after it
                const bookshelfContainer = document.getElementById('bookshelf-container');
                bookshelfContainer.after(titleContainer);

                // Add event listeners to all books
                const books = document.querySelectorAll('.book');
                books.forEach(book => {
                    book.addEventListener('mouseenter', function () {
                        // Get the title from the book's title element
                        const title = this.querySelector('.title').textContent;
                        titleDisplay.textContent = title;
                    });

                    book.addEventListener('mouseleave', function () {
                        titleDisplay.textContent = '';
                    });
                });

            }
        })
        .catch(error => console.error('Error loading content:', error));
}



