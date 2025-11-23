/* script.js - InternAdda Interview Hub (Final Logic) */

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
            // Ensure search bar closes when menu opens/closes
            if (floatingSearchBar && floatingSearchBar.classList.contains('active')) {
                floatingSearchBar.classList.remove('active');
            }
        });
    }

    // Search Bar Toggle & Redirection
    if (searchTrigger) {
        searchTrigger.addEventListener('click', () => {
            if (window.location.pathname.endsWith('search.html')) {
                // If already on the search page, just focus the dedicated input
                document.getElementById('search-input-page')?.focus();
            } else {
                // Toggle the floating search bar
                floatingSearchBar.classList.toggle('active');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active'); // Close mobile menu if open
                }
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
                // Redirect to search page with query parameter
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

    // --- 2. Question Accordion Toggle (Handles static and dynamic content) ---
    const setupAccordion = () => {
        document.querySelectorAll('.question-item').forEach(item => {
            const header = item.querySelector('.question-header');
            if (header) {
                header.onclick = (e) => {
                    item.classList.toggle('active');
                };
            }
        });
    };
    setupAccordion(); // Setup for static HTML pages

    // --- 3. Client-Side Search Logic (Specific to search.html) ---
    if (window.location.pathname.endsWith('search.html') && typeof window.INTERN_ADDA_QUESTIONS !== 'undefined') {
        const searchInput = document.getElementById('search-input-page');
        const resultsContainer = document.getElementById('search-results-container');
        const searchTermDisplay = document.getElementById('search-term-display');
        const resultCount = document.getElementById('result-count');
        const allQuestions = window.INTERN_ADDA_QUESTIONS; 

        // Helper function to determine the tag class based on topic/difficulty
        const getTagClass = (topic) => {
            const lowerTopic = topic.toLowerCase();
            // Assign based on topic complexity or type
            if (lowerTopic.includes('hard') || lowerTopic.includes('lfu') || lowerTopic.includes('advanced')) return { tag: 'Hard', class: 'tag-hard' };
            if (lowerTopic.includes('medium') || lowerTopic.includes('dp') || lowerTopic.includes('sliding window')) return { tag: 'Medium', class: 'tag-medium' };
            if (lowerTopic.includes('easy') || lowerTopic.includes('core')) return { tag: 'Easy', class: 'tag-easy' };
            if (lowerTopic.includes('system design') || lowerTopic.includes('networks') || lowerTopic.includes('mapping')) return { tag: 'System', class: 'tag-system' };
            if (lowerTopic.includes('behavioral') || lowerTopic.includes('hr') || lowerTopic.includes('lp') || lowerTopic.includes('culture')) return { tag: 'Behavioral', class: 'tag-behavioral' };
            return { tag: 'DSA', class: 'tag-easy' };
        };

        const renderResults = (query, questions) => {
            resultsContainer.innerHTML = '';
            const lowerCaseQuery = query.toLowerCase();
            
            // Filter questions based on keyword presence in multiple fields
            const filteredQuestions = questions.filter(q => 
                q.question.toLowerCase().includes(lowerCaseQuery) ||
                q.answer.toLowerCase().includes(lowerCaseQuery) ||
                q.topic.toLowerCase().includes(lowerCaseQuery) ||
                q.company.toLowerCase().includes(lowerCaseQuery) ||
                q.type.toLowerCase().includes(lowerCaseQuery)
            );

            searchTermDisplay.textContent = query === '' ? 'All Questions' : `"${query}"`;
            resultCount.textContent = `Found ${filteredQuestions.length} results.`;
            
            if (filteredQuestions.length === 0) {
                resultsContainer.innerHTML = `<p style="text-align: center; padding: 50px; font-size: 1.2rem; color: #EF4444;">No results found for "${query}". Try a different term or check your spelling.</p>`;
                return;
            }

            // Grouping: Company > Type/Topic
            const groupedResults = filteredQuestions.reduce((acc, question) => {
                const groupKey = `${question.company || 'General'} - ${question.type || 'Coding'} / ${question.topic.split(' (')[0]}`;
                if (!acc[groupKey]) acc[groupKey] = [];
                acc[groupKey].push(question);
                return acc;
            }, {});

            for (const groupKey in groupedResults) {
                const groupElement = document.createElement('div');
                groupElement.classList.add('question-group');
                groupElement.innerHTML = `<h2><i class="fas fa-list-check" style="color: var(--primary-blue); margin-right: 10px;"></i>${groupKey}</h2>`;

                groupedResults[groupKey].forEach(q => {
                    const tagInfo = getTagClass(q.topic);
                    const item = document.createElement('div');
                    item.classList.add('question-item');
                    item.innerHTML = `
                        <div class="question-header">
                            <strong class="question-title">${q.question}</strong>
                            <span class="difficulty-tag ${tagInfo.class}">${tagInfo.tag}</span>
                            <span class="toggle-icon"><i class="fas fa-chevron-right"></i></span>
                        </div>
                        <div class="question-content">
                            <div class="answer-section">
                                <h3><i class="fas fa-lightbulb" style="margin-right: 5px;"></i> Answer & Explanation</h3>
                                ${q.answer}
                            </div>
                        </div>
                    `;
                    // Attach the accordion functionality to the header
                    item.querySelector('.question-header').addEventListener('click', () => item.classList.toggle('active'));
                    groupElement.appendChild(item);
                });
                resultsContainer.appendChild(groupElement);
            }
        };

        // Check for URL query parameter 'q' on load
        const urlParams = new URLSearchParams(window.location.search);
        const initialQuery = urlParams.get('q');
        
        if (initialQuery) {
            searchInput.value = initialQuery;
            renderResults(initialQuery, allQuestions);
        } else {
             // Default state: show all questions
             renderResults('', allQuestions); 
        }

        // Live search listener
        searchInput.addEventListener('input', () => {
            renderResults(searchInput.value.trim(), allQuestions);
        });
    }
});
