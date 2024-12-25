
    document.addEventListener("DOMContentLoaded", () => {
        // Select input field, clear icon, and cards
        const searchInput = document.querySelector('.search-box input');
        const clearIcon = document.querySelector('.search-box .clear-icon');
        const cards = document.querySelectorAll('.card');

        if (!searchInput || !clearIcon || cards.length === 0) {
            console.error("Required elements (search input, clear icon, or cards) are missing!");
            return;
        }

        // Search input event
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            let found = false;

            // Filter cards based on the query
            cards.forEach((card) => {
                const title = card.querySelector('.card-title')?.textContent.toLowerCase();
                if (title && title.includes(query)) {
                    card.style.display = "block"; // Show matching card
                    found = true;
                } else {
                    card.style.display = "none"; // Hide non-matching card
                }
            });

            // Show "No results found" message if no matches
            if (!found && query !== "") {
                if (!document.querySelector('.no-results')) {
                    const noResults = document.createElement('div');
                    noResults.classList.add('no-results');
                    noResults.textContent = "No results found.";
                    document.querySelector('.card-container').appendChild(noResults);
                }
            } else {
                const noResults = document.querySelector('.no-results');
                if (noResults) noResults.remove();
            }
        });

        // Clear input field and reset cards
        clearIcon.addEventListener('click', () => {
            searchInput.value = '';
            clearIcon.style.display = 'none';

            cards.forEach((card) => {
                card.style.display = "block";
            });

            const noResults = document.querySelector('.no-results');
            if (noResults) noResults.remove();
        });

        // Toggle visibility of clear icon
        searchInput.addEventListener('input', () => {
            if (searchInput.value.trim() !== '') {
                clearIcon.style.display = 'block';
            } else {
                clearIcon.style.display = 'none';
            }
        });
    });

