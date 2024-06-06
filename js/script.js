// Search Functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const contentDivs = document.querySelectorAll('.searchable-content');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        contentDivs.forEach(div => {
            const title = div.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                div.classList.add('show');
            } else {
                div.classList.remove('show');
            }
        });
    });
});