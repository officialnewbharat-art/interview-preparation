/* script.js - InternAdda Interview Hub */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Header, Navigation, and Theme Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const searchTrigger = document.getElementById('search-trigger');
    const floatingSearchBar = document.getElementById('floating-search-bar');
    const globalSearchInput = document.getElementById('search-input-global');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Search Bar Toggle & Redirection
    if (searchTrigger) {
        searchTrigger.addEventListener('click', () => {
            // If on search page, just focus input. Otherwise, show/hide floating bar.
            if (window.location.pathname.endsWith('search.html')) {
                document.getElementById('search-input-page')?.focus();
            } else {
                floatingSearchBar.classList.toggle('active');
                if (floatingSearchBar.classList.contains('active')) {
                    globalSearchInput.focus();
                }
            }
        });
    }
    
    // Global Search: Redirect on Enter
    if (globalSearchInput) {
        globalSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && globalSearchInput.value.trim() !== '') {
                const query = globalSearchInput.value.trim();
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
    }

    // Dark/Light Mode
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark-mode') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const newTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
            localStorage.setItem('theme', newTheme);
            themeToggle.innerHTML = newTheme === 'dark-mode' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // --- 2. Question Card Details Toggle (Accordion) ---
    // Note: Inline onclick event is added in HTML for better static compatibility, 
    // but this JS loop ensures all dynamically loaded items also work if the HTML 
    // structure changes or is loaded via AJAX (good practice).
    document.querySelectorAll('.question-item').forEach(item => {
        // Find the strong tag inside to attach a listener, avoiding double listeners if inline is used.
        const strongTag = item.querySelector('strong'); 
        if (strongTag) {
            strongTag.addEventListener('click', (e) => {
                // Prevent click from propagating to the parent item if needed, but here we toggle the parent
                item.classList.toggle('active');
            });
        }
    });

    // --- 3. Client-Side Search Logic (Specific to search.html) ---
    if (window.location.pathname.endsWith('search.html') && typeof window.INTERN_ADDA_QUESTIONS !== 'undefined') {
        const searchInput = document.getElementById('search-input-page');
        const resultsContainer = document.getElementById('search-results-container');
        const searchTermDisplay = document.getElementById('search-term-display');
        const resultCount = document.getElementById('result-count');
        const allQuestions = window.INTERN_ADDA_QUESTIONS; 

        // Helper function to get the difficulty tag class
        const getDifficultyTag = (type, topic) => {
            const lowerType = type.toLowerCase();
            const lowerTopic = topic.toLowerCase();
            
            if (lowerType === 'system design' || lowerType === 'technical' || lowerTopic.includes('system')) return 'tag-system';
            if (lowerType.includes('behavioral') || lowerType.includes('hr')) return 'tag-behavioral';

            // Check difficulty for coding questions based on topic/complexity
            if (lowerTopic.includes('hard') || lowerTopic.includes('advanced') || lowerTopic.includes('lfu') || lowerTopic.includes('min window')) return 'tag-hard';
            if (lowerTopic.includes('medium') || lowerTopic.includes('two pointers') || lowerTopic.includes('dp')) return 'tag-medium';
            return 'tag-easy'; // Default for core/easy
        };

        const renderResults = (query, questions) => {
            resultsContainer.innerHTML = '';
            const lowerCaseQuery = query.toLowerCase();
            const filteredQuestions = questions.filter(q => 
                q.question.toLowerCase().includes(lowerCaseQuery) ||
                q.topic.toLowerCase().includes(lowerCaseQuery) ||
                q.company.toLowerCase().includes(lowerCaseQuery) ||
                q.type.toLowerCase().includes(lowerCaseQuery)
            );

            searchTermDisplay.textContent = query === '' ? 'All Questions' : query;
            resultCount.textContent = `Found ${filteredQuestions.length} results.`;
            
            if (filteredQuestions.length === 0) {
                resultsContainer.innerHTML = `<p style="text-align: center; padding: 50px; font-size: 1.2rem; color: #EF4444;">No results found for "${query}". Try a different term.</p>`;
                return;
            }

            // Grouping: Company > Topic
            const groupedResults = filteredQuestions.reduce((acc, question) => {
                const groupKey = `${question.company || 'General'} - ${question.topic || question.type || 'Miscellaneous'}`;
                if (!acc[groupKey]) acc[groupKey] = [];
                acc[groupKey].push(question);
                return acc;
            }, {});

            for (const groupKey in groupedResults) {
                const groupElement = document.createElement('div');
                groupElement.classList.add('question-group');
                groupElement.innerHTML = `<h2><i class="fas fa-flask" style="color: var(--primary-blue); margin-right: 10px;"></i>${groupKey}</h2>`;

                groupedResults[groupKey].forEach(q => {
                    const tagClass = getDifficultyTag(q.type, q.topic);
                    const item = document.createElement('div');
                    item.classList.add('question-item');
                    item.innerHTML = `
                        <strong class="question-title">
                            ${q.question} 
                            <span class="difficulty-tag ${tagClass}">${q.topic.split('/')[0] || q.type}</span>
                        </strong>
                        <div class="details">
                            <strong style="font-weight: 600;">Area:</strong> ${q.type || 'N/A'}. 
                            <strong style="font-weight: 600;">Topic:</strong> ${q.topic || 'N/A'}. 
                            <strong style="font-weight: 600;">Source:</strong> ${q.company || 'General'}.
                        </div>
                    `;
                    item.querySelector('strong').addEventListener('click', () => item.classList.toggle('active'));
                    groupElement.appendChild(item);
                });
                resultsContainer.appendChild(groupElement);
            }
        };

        // Initialize search from URL or input
        const urlParams = new URLSearchParams(window.location.search);
        const initialQuery = urlParams.get('q');
        
        if (initialQuery) {
            searchInput.value = initialQuery;
            renderResults(initialQuery, allQuestions);
        } else {
             // Show all questions as default on the search page
             renderResults('', allQuestions);
        }

        searchInput.addEventListener('input', () => {
            renderResults(searchInput.value.trim(), allQuestions);
        });
    }
});
