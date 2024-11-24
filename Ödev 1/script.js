// Mocked data representing blog posts
const blogPosts = [
    { title: "The Future of AI", content: "Artificial intelligence is shaping the future.", category: "Technology", date: "2024-01-15", keywords: ["AI", "future", "technology"] },
    { title: "My Travel Adventures in Europe", content: "I visited France, Spain, and Italy.", category: "Travel", date: "2023-12-05", keywords: ["travel", "europe", "adventure"] },
    { title: "How to Stay Fit in Busy Times", content: "Staying healthy while managing a busy schedule.", category: "Lifestyle", date: "2024-02-20", keywords: ["fitness", "health", "lifestyle"] },
    { title: "Top 5 Programming Languages", content: "Which programming languages are best in 2024?", category: "Technology", date: "2024-03-10", keywords: ["programming", "languages", "tech"] }
];

// Function to filter posts based on search criteria
function filterPosts() {
    const keyword = document.getElementById('search-keyword').value.toLowerCase();
    const date = document.getElementById('search-date').value;
    const category = document.getElementById('search-category').value;

    const filteredPosts = blogPosts.filter(post => {
        const matchesKeyword = keyword ? post.keywords.some(k => k.toLowerCase().includes(keyword)) || post.title.toLowerCase().includes(keyword) : true;
        const matchesDate = date ? post.date === date : true;
        const matchesCategory = category ? post.category === category : true;
        return matchesKeyword && matchesDate && matchesCategory;
    });

    displaySearchResults(filteredPosts);
}

// Function to display search results
function displaySearchResults(posts) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';  // Clear previous results

    if (posts.length > 0) {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post-result');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p><strong>Category:</strong> ${post.category} | <strong>Date:</strong> ${post.date}</p>
                <p>${post.content.substring(0, 100)}...</p>
                <a href="postdetails.html?title=${encodeURIComponent(post.title)}">Read more</a>
            `;
            resultsContainer.appendChild(postElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No posts found matching your criteria.</p>';
    }
}

// Handle search form submission
document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    filterPosts();
});

const data = [
    {
        "title": "Cryptocurrency Trends",
        "category": "Cryptocurrency",
        "date": "2024-01-15",
        "keywords": ["crypto", "blockchain", "bitcoin"],
        "url": "crypto.html"
    },
    {
        "title": "Football League Analysis",
        "category": "Football",
        "date": "2024-02-10",
        "keywords": ["football", "league", "soccer"],
        "url": "football.html"
    },
    {
        "title": "Welcome to My Blog",
        "category": "General",
        "date": "2024-03-01",
        "keywords": ["blog", "intro", "welcome"],
        "url": "index.html"
    }
];