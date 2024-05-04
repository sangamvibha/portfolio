document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.box');

    // Set default active button to "All"
    filterButtons.forEach(button => {
        if (button.getAttribute('data-filter') === 'all') {
            button.classList.add('active');
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            setActiveButton(button); // Set active class to clicked button
            filterGallery(category);
        });
    });

    function filterGallery(category) {
        galleryItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function setActiveButton(activeButton) {
        // Remove "active" class from all buttons
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        // Add "active" class to the clicked button
        activeButton.classList.add('active');
    }
});
