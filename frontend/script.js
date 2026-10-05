// ========================================
// BOOK DATA
// ========================================

const books = {
    Romance: [
    {
        id: 1,
        title: "Too Good to Be True",
        author: "Prajakta Koli",
        genre: "Romance",
        cover: "images/rb_1.jpg",
        description: "A heartwarming contemporary romance about unexpected connections, personal growth, and discovering that sometimes the most perfect things arrive when you least expect them."
    },
    {
        id: 2,
        title: "You've Reached Sam",
        author: "Dustin Thao",
        genre: "Romance",
        cover: "images/rb_2.jpg",
        description: "A moving story about grief, love, and closure. Julie loses the love of her life, Sam, but receives an unexpected phone call that changes everything."
    },
    {
        id: 3,
        title: "I Don't Love You Anymore",
        author: "Rithvik Singh",
        genre: "Romance",
        cover: "images/rb_3.jpg",
        description: "A heartfelt journey through heartbreak, healing, and self-discovery. A powerful reminder that letting go is sometimes the first step toward finding yourself."
    },
    {
        id: 4,
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "Romance",
        cover: "images/rb_4.jpg",
        description: "A timeless love story about Noah and Allie, whose enduring romance survives distance, challenges, and the test of time."
    },
    {
        id: 5,
        title: "Can First Love Be Forever?",
        author: "Manisha Vashist",
        genre: "Romance",
        cover: "images/rb_5.jpg",
        description: "An emotional story that explores whether first love can truly last forever, following a young couple through dreams, challenges, and life-changing decisions."
    }
    ],
    Thriller: [
        {
            id: 6,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            genre: "Thriller",
            cover: "images/tb_1.jpg",
            description: "A woman shoots her husband and then never speaks again. A gripping psychological thriller about obsession that will keep you guessing until the very end."
        },
        {
            id: 7,
            title: "Verity",
            author: "Colleen Hoover",
            genre: "Thriller",
            cover: "images/tb_2.jpg",
            description: "A mind-bending thriller about a writer hiding dark secrets. A psychological rollercoaster that will leave you questioning everything you thought you knew."
        },
        {
            id: 8,
            title: "Never Lie",
            author: "Freida McFadden",
            genre: "Thriller",
            cover: "images/tb_3.jpg",
            description: "A woman rents a house with a dark past and uncovers sinister truths hidden within its walls. A suspenseful tale of mystery and danger lurking in unexpected places."
        },
        {
            id: 9,
            title: "The Boyfriend",
            author: "Freida McFadden",
            genre: "Thriller",
            cover: "images/tb_4.jpg",
            description: "A mysterious man enters a woman's life with dangerous intentions and secrets that could destroy everything. A tense psychological thriller about trust and deception."
        },
        {
            id: 10,
            title: "Then She Was Gone",
            author: "Lisa Jewell",
            genre: "Thriller",
            cover: "images/tb_5.jpg",
            description: "A woman's obsession with a missing girl leads to dark discoveries that change everything. A gripping mystery that spans decades and uncovers shocking truths."
        }
    ],
    Mystery: [
        {
            id: 11,
            title: "A Good Girl's Guide to Murder",
            author: "Holly Jackson",
            genre: "Mystery",
            cover: "images/mb_1.jpg",
            description: "A teenage girl investigates a closed murder case for her school project and uncovers shocking truths. A captivating mystery that proves nothing is as it seems."
        },
        {
            id: 12,
            title: "Good Girl, Bad Blood",
            author: "Holly Jackson",
            genre: "Mystery",
            cover: "images/mb_2.jpg",
            description: "The sequel continues the investigation with shocking revelations that change everything. More secrets are uncovered in this gripping continuation of the mystery."
        },
        {
            id: 13,
            title: "As Good As Dead",
            author: "Holly Jackson",
            genre: "Mystery",
            cover: "images/mb_3.jpg",
            description: "The thrilling conclusion to the murder mystery trilogy with answers and new mysteries. The final chapter brings closure while raising unexpected questions."
        },
        {
            id: 14,
            title: "That Night",
            author: "Nidhi Upadhyay",
            genre: "Mystery",
            cover: "images/mb_4.jpg",
            description: "A murder mystery set in India with intriguing plot twists and unexpected revelations. A culturally rich mystery with shocking turns that keep you engaged."
        },
        {
            id: 15,
            title: "The Girl In The Glass Case",
            author: "Devashish Sardana",
            genre: "Mystery",
            cover: "images/mb_5.jpg",
            description: "A detective story centered around a mysterious woman in a glass case with dark secrets. An intriguing tale of mystery, identity, and dark secrets."
        }
    ],
    Classics: [
        {
            id: 16,
            title: "White Nights",
            author: "Fyodor Dostoevsky",
            genre: "Classics",
            cover: "images/cb_1.png",
            description: "A philosophical novella about dreams, love, and the nature of human connection and loneliness. A poignant exploration of the human condition and desire."
        },
        {
            id: 17,
            title: "Metamorphosis",
            author: "Franz Kafka",
            genre: "Classics",
            cover: "images/cb_2.jpg",
            description: "A haunting story of transformation and alienation that explores the human condition. A deeply unsettling tale that challenges our understanding of identity."
        },
        {
            id: 18,
            title: "Crime And Punishment",
            author: "Fyodor Dostoevsky",
            genre: "Classics",
            cover: "images/cb_3.jpg",
            description: "A masterpiece exploring morality, guilt, and redemption through a psychological journey. An epic novel that delves into the darkest corners of the human soul."
        },
        {
            id: 19,
            title: "Animal Farm",
            author: "George Orwell",
            genre: "Classics",
            cover: "images/cb_4.jpg",
            description: "An allegorical political satire about power and corruption in revolutionary settings. A brilliant and timeless commentary on power, corruption, and idealism."
        }
    ],
};

// ========================================
// STATE MANAGEMENT
// ========================================

let appState = {
    currentUser: null,
    currentUserID: null,
    token: null,
    favorites: [],
    dislikes: [],
    filteredBooks: null,
    searchTerm: '',
    isAuthenticated: false
};


// ========================================
// DOM ELEMENTS
// ========================================

// Welcome & Auth
const welcomeScreen = document.getElementById('welcomeScreen');
const signupScreen = document.getElementById('signupScreen');
const loginScreen = document.getElementById('loginScreen');
const newUserBtn = document.getElementById('newUserBtn');
const existingUserBtn = document.getElementById('existingUserBtn');
const backFromSignup = document.getElementById('backFromSignup');
const backFromLogin = document.getElementById('backFromLogin');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const signupError = document.getElementById('signupError');
const loginError = document.getElementById('loginError');

// Main App
const mainApp = document.getElementById('mainApp');
const userGreeting = document.getElementById('userGreeting');
const welcomeGreeting = document.getElementById('welcomeGreeting');
const logoutBtn = document.getElementById('logoutBtn');
const genreContainer = document.getElementById('genreContainer');
const searchInput = document.getElementById('searchInput');
const bookModal = document.getElementById('bookModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const toast = document.getElementById('toast');
const loadingSpinner = document.getElementById('loadingSpinner');
const emptyState = document.getElementById('emptyState');

// Modal content
const modalTitle = document.getElementById('modalTitle');
const modalAuthor = document.getElementById('modalAuthor');
const modalGenre = document.getElementById('modalGenre');
const modalDescription = document.getElementById('modalDescription');
const modalCoverImage = document.getElementById('modalCoverImage');
const addFavoriteBtn = document.getElementById('addFavoriteBtn');
const addDislikeBtn = document.getElementById('addDislikeBtn');
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentFeedback = document.getElementById('commentFeedback');
const commentsList = document.getElementById('commentsList');
const commentsCount = document.getElementById('commentsCount');

// ========================================
// AUTHENTICATION FLOW
// ========================================

// User Type Selection
newUserBtn.addEventListener('click', showSignupForm);
existingUserBtn.addEventListener('click', showLoginForm);

// Back Buttons
backFromSignup.addEventListener('click', backToWelcome);
backFromLogin.addEventListener('click', backToWelcome);

function showSignupForm() {
    welcomeScreen.classList.add('hidden');
    signupScreen.classList.remove('hidden');
    document.getElementById('signupName').focus();
}

function showLoginForm() {
    welcomeScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    document.getElementById('loginName').focus();
}

function backToWelcome() {
    welcomeScreen.classList.remove('hidden');
    signupScreen.classList.add('hidden');
    loginScreen.classList.add('hidden');
    signupError.classList.add('hidden');
    loginError.classList.add('hidden');
}

// ========================================
// SIGNUP FORM
// ========================================

async function signupUser(name, password) {

    const response = await fetch(
        "https://crossbook.onrender.com/auth/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: name,
                password: password
            })
        }
    );

    const result = await readAuthResponse(response);
    if (!response.ok || !result.token) {
        showSignupError(result.message || 'Unable to create account');
        return;
    }
    setAuthenticatedUser(result);
    await loadUserPreferences();
    showToast("Account created successfully!");
    showMainApp();
}

async function loginUser(name, password) {
    try {
        const response = await fetch(
            "https://crossbook.onrender.com/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: name,
                    password: password
                })
            }
        );

        const result = await response.json();

        if (!response.ok) {
            showLoginError(result.message || "Unable to log in");
            return;
        }

        // Save authenticated user
        appState.currentUser = result.username;
        appState.currentUserID = result.userId;
        appState.token = result.token;
        appState.isAuthenticated = true;

        // Save to localStorage
        localStorage.setItem("currentUser", result.username);
        localStorage.setItem("currentUserID", result.userId);
        localStorage.setItem("authToken", result.token);

        showToast("Logged in successfully!");

        showMainApp();

    } catch (error) {
        console.error("Login error:", error);
        showLoginError("Unable to log in");
    }
}

async function readAuthResponse(response) {
    const responseText = await response.text();
    try {
        return JSON.parse(responseText);
    } catch {
        return { message: responseText };
    }
}

function setAuthenticatedUser(user) {
    appState.currentUser = user.username;
    appState.currentUserID = user.userId;
    appState.token = user.token;
    appState.isAuthenticated = true;
    localStorage.setItem('currentUser', appState.currentUser);
    localStorage.setItem('currentUserID', appState.currentUserID);
    localStorage.setItem('authToken', appState.token);
}

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    signupError.classList.add('hidden');

    // Validation
    if (!name || !password || !confirmPassword) {
        showSignupError('All fields are required');
        return;
    }

    if (password !== confirmPassword) {
        showSignupError('Passwords do not match');
        return;
    }

    if (password.length < 6) {
        showSignupError('Password must be at least 6 characters');
        return;
    }

    // Call backend
    await signupUser(name, password);
});


function showSignupError(message) {
    signupError.textContent = message;
    signupError.classList.remove('hidden');
}

// ========================================
// LOGIN FORM
// ========================================

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('loginName').value.trim();
    const password = document.getElementById('loginPassword').value;

    loginError.classList.add('hidden');

    if (!name || !password) {
        showLoginError('Name and password are required');
        return;
    }

    await loginUser(name, password);
});



function showLoginError(message) {
    loginError.textContent = message;
    loginError.classList.remove('hidden');
}

// ========================================
// MAIN APP DISPLAY
// ========================================

async function showMainApp() {
    signupScreen.classList.add('hidden');
    loginScreen.classList.add('hidden');
    welcomeScreen.classList.add('hidden');

    mainApp.classList.remove('hidden');

    userGreeting.textContent =
        `Welcome, ${appState.currentUser} 👋`;

    welcomeGreeting.textContent =
        `Welcome, ${appState.currentUser} 👋`;

    /*
     * Load preferences FIRST.
     * Then render the bookshelf.
     */
    await loadUserPreferences();

    loadBookShelf();
}

// ========================================
// LOAD USER PREFERENCES
// ========================================

async function loadUserPreferences() {
    if (!appState.currentUserID) {
        return;
    }

    try {
        const userId = appState.currentUserID;

        /*
         * Run both requests at the same time.
         */
        const [
            favoritesResponse,
            dislikesResponse
        ] = await Promise.all([
            fetch(
                `https://crossbook.onrender.com/favorites/${userId}`
            ),
            fetch(
                `https://crossbook.onrender.com/dislikes/${userId}`
            )
        ]);

        if (!favoritesResponse.ok) {
            throw new Error(
                `Favorites request failed: ${favoritesResponse.status}`
            );
        }

        if (!dislikesResponse.ok) {
            throw new Error(
                `Dislikes request failed: ${dislikesResponse.status}`
            );
        }

        const [
            favoritesData,
            dislikesData
        ] = await Promise.all([
            favoritesResponse.json(),
            dislikesResponse.json()
        ]);

        appState.favorites = Array.isArray(favoritesData)
            ? favoritesData.map(item => Number(item.bookId))
            : [];

        appState.dislikes = Array.isArray(dislikesData)
            ? dislikesData.map(item => Number(item.bookId))
            : [];

        console.log('Loaded favorites:', appState.favorites);
        console.log('Loaded dislikes:', appState.dislikes);

    } catch (error) {
        console.error(
            'Failed to load preferences:',
            error
        );

        /*
         * Don't destroy existing state if loading fails.
         */
        if (!Array.isArray(appState.favorites)) {
            appState.favorites = [];
        }

        if (!Array.isArray(appState.dislikes)) {
            appState.dislikes = [];
        }
    }
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================

searchInput.addEventListener('input', (e) => {
    appState.searchTerm = e.target.value.toLowerCase();
    filterAndDisplayBooks();
});

function filterAndDisplayBooks() {
    const term = appState.searchTerm;
    
    if (!term) {
        appState.filteredBooks = null;
        loadBookShelf();
        return;
    }

    const filtered = {};
    
    for (const [genre, bookList] of Object.entries(books)) {
        const matches = bookList.filter(book => 
            book.title.toLowerCase().includes(term) ||
            book.author.toLowerCase().includes(term)
        );
        if (matches.length > 0) {
            filtered[genre] = matches;
        }
    }

    appState.filteredBooks = filtered;
    
    if (Object.keys(filtered).length === 0) {
        genreContainer.innerHTML = '';
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        renderGenres(filtered);
    }
}

// ========================================
// BOOK SHELF RENDERING
// ========================================

function getFavoriteBooks() {

    const favorites = [];

    Object.values(books).forEach(bookList => {

        bookList.forEach(book => {

            if (appState.favorites.includes(book.id)) {
                favorites.push(book);
            }

        });

    });

    return favorites;
}

function getDislikedBooks() {

    const dislikes = [];

    Object.values(books).forEach(bookList => {

        bookList.forEach(book => {

            if (appState.dislikes.includes(book.id)) {
                dislikes.push(book);
            }

        });

    });

    return dislikes;
}

function loadBookShelf() {
    emptyState.classList.add('hidden');
    const booksToDisplay = appState.filteredBooks || books;
    renderGenres(booksToDisplay);
}

function renderGenres(booksData) {

    genreContainer.innerHTML = '';

    // Favorites at top
    const favoriteBooks = getFavoriteBooks();

    if (favoriteBooks.length > 0) {

        const favoriteSection =
            createGenreSection(
                "❤️ My Favorites",
                favoriteBooks
            );

        genreContainer.appendChild(
            favoriteSection
        );
    }

    // Normal genres
    for (const [genre, bookList] of Object.entries(booksData)) {

        const genreSection =
            createGenreSection(
                genre,
                bookList
            );

        genreContainer.appendChild(
            genreSection
        );
    }

    // Disliked books at bottom
    const dislikedBooks = getDislikedBooks();

    if (dislikedBooks.length > 0) {

        const dislikeSection =
            createGenreSection(
                "👎 My Disliked Books",
                dislikedBooks
            );

        genreContainer.appendChild(
            dislikeSection
        );
    }
}

function createGenreSection(genre, bookList) {

    const section = document.createElement('section');
    section.className = 'genre-section';

    section.innerHTML = `
        <div class="genre-header">
            <div class="genre-accent"></div>
            <h2 class="genre-title">${genre}</h2>
        </div>
        <div class="books-grid"></div>
    `;

    const grid = section.querySelector('.books-grid');

    bookList.forEach(book => {
        const card = createBookCard(book);
        grid.appendChild(card);
    });

    return section;
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';

    let statusHTML = '';

    if (appState.favorites.includes(book.id)) {
        statusHTML += '<div class="status-badge liked">❤️</div>';
    }

    if (appState.dislikes.includes(book.id)) {
        statusHTML += '<div class="status-badge disliked">👎</div>';
    }

    card.innerHTML = `
        <div class="book-cover-container">
            <img src="${book.cover}" alt="${book.title}" class="book-cover">

            ${statusHTML}

            <div class="book-overlay">
                <div class="book-overlay-text">
                    Click to view details
                </div>
            </div>
        </div>

        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
    `;

    card.addEventListener('click', () => openModal(book));

    return card;
}

// ========================================
// MODAL LOGIC
// ========================================

let currentModalBook = null;

function openModal(book) {
    currentModalBook = book;
    modalTitle.textContent = book.title;
    modalAuthor.textContent = `by ${book.author}`;
    modalGenre.textContent = book.genre;
    modalDescription.textContent = book.description;

    
    modalCoverImage.src = book.cover;
    modalCoverImage.style.fontSize = '120px';
    modalCoverImage.style.display = 'flex';
    modalCoverImage.style.alignItems = 'center';
    modalCoverImage.style.justifyContent = 'center';
    modalCoverImage.style.color = 'white';
    
    updateActionButtons();
    commentInput.value = '';
    commentFeedback.textContent = '';
    loadComments(book.id);
    
    bookModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

async function loadComments(bookId) {
    commentsList.replaceChildren();

    const loadingMessage = document.createElement('p');
    loadingMessage.className = 'comments-empty';
    loadingMessage.textContent = 'Loading comments...';
    commentsList.appendChild(loadingMessage);

    try {
        const headers = {};

        // Send token if user is logged in
        if (appState.token) {
            headers['Authorization'] = `Bearer ${appState.token}`;
        }

        const response = await fetch(
            `https://crossbook.onrender.com/comments/${bookId}`,
            {
                method: 'GET',
                headers: headers
            }
        );

        if (!response.ok) {
            const errorText = await response.text();

            console.error(
                'Comments API error:',
                response.status,
                errorText
            );

            throw new Error(
                errorText || `Failed to load comments (${response.status})`
            );
        }

        const comments = await response.json();

        console.log('Comments loaded:', comments);

        // Make sure the user is still viewing the same book
        if (
            !currentModalBook ||
            Number(currentModalBook.id) !== Number(bookId)
        ) {
            return;
        }

        renderComments(comments);

    } catch (error) {

        console.error(
            'Failed to load comments:',
            error
        );

        commentsList.replaceChildren();

        const message = document.createElement('p');
        message.className = 'comments-empty';
        message.textContent =
            'Comments are temporarily unavailable.';

        commentsList.appendChild(message);
    }
}

function renderComments(comments) {
    commentsCount.textContent = comments.length;
    commentsList.replaceChildren();

    if (comments.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'comments-empty';
        emptyMessage.textContent = 'No comments yet. Start the conversation.';
        commentsList.appendChild(emptyMessage);
        return;
    }

    comments.forEach(comment => {

        const item = document.createElement('article');
        item.className = 'comment-item';

        // =========================
        // HEADER
        // =========================

        const header = document.createElement('div');
        header.className = 'comment-header';

        const author = document.createElement('strong');
        author.className = 'comment-author';
        author.textContent = comment.username;

        const timestamp = document.createElement('time');
        timestamp.className = 'comment-time';
        timestamp.dateTime = comment.updatedAt;
        timestamp.textContent =
            new Date(comment.updatedAt).toLocaleString();

        header.append(author, timestamp);

        // =========================
        // CONTENT
        // =========================

        const content = document.createElement('p');
        content.className = 'comment-content';
        content.textContent = comment.content;

        item.append(header, content);

        // =========================
        // REACTION BUTTONS
        // =========================

        const reactionActions = document.createElement('div');
        reactionActions.className = 'comment-reactions';

        // LIKE
        const likeButton = document.createElement('button');
        likeButton.type = 'button';
        likeButton.className = 'comment-reaction-btn';

        if (comment.userReaction === 'LIKE') {
            likeButton.classList.add('active');
        }

        likeButton.innerHTML = `
            <span>👍</span>
            <span>${comment.likes || 0}</span>
        `;

        likeButton.addEventListener('click', () => {
            reactToComment(comment, 'LIKE');
        });

        // DISLIKE
        const dislikeButton = document.createElement('button');
        dislikeButton.type = 'button';
        dislikeButton.className = 'comment-reaction-btn';

        if (comment.userReaction === 'DISLIKE') {
            dislikeButton.classList.add('active');
        }

        dislikeButton.innerHTML = `
            <span>👎</span>
            <span>${comment.dislikes || 0}</span>
        `;

        dislikeButton.addEventListener('click', () => {
            reactToComment(comment, 'DISLIKE');
        });

        reactionActions.append(likeButton, dislikeButton);

        item.appendChild(reactionActions);

        // =========================
        // REPLY BUTTON
        // =========================

        const replyButton = document.createElement('button');
        replyButton.type = 'button';
        replyButton.className = 'comment-reply-btn';
        replyButton.textContent = 'Reply';

        replyButton.addEventListener('click', () => {
            showReplyBox(item, comment);
        });

        item.appendChild(replyButton);

        // =========================
        // EDIT / DELETE
        // =========================

        if (Number(comment.userId) === Number(appState.currentUserID)) {

            const actions = document.createElement('div');
            actions.className = 'comment-actions';

            const editButton = document.createElement('button');
            editButton.type = 'button';
            editButton.textContent = 'Edit';

            editButton.addEventListener('click', () => {
                editComment(comment);
            });

            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', () => {
                deleteComment(comment);
            });

            actions.append(editButton, deleteButton);

            item.appendChild(actions);
        }

        commentsList.appendChild(item);
    });
}


async function reactToComment(comment, reactionType) {
    if (!appState.token) {
        showToast('Please log in first.');
        return;
    }

    try {
        const endpoint =
            reactionType === 'LIKE'
                ? `https://crossbook.onrender.com/comments/${comment.id}/like`
                : `https://crossbook.onrender.com/comments/${comment.id}/dislike`;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: commentHeaders()
        });

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message || 'Could not update reaction.');
        }

        /*
         * Don't reload the entire bookshelf.
         * Only reload comments.
         */
        if (currentModalBook) {
            await loadComments(currentModalBook.id);
        }

    } catch (error) {
        console.error('Comment reaction error:', error);

        showToast(
            error.message || 'Could not update comment reaction.'
        );
    }
}

function showReplyBox(commentElement, comment) {

    // Don't create multiple reply boxes
    if (commentElement.querySelector('.reply-box')) {
        return;
    }

    const replyBox = document.createElement('div');
    replyBox.className = 'reply-box';

    const textarea = document.createElement('textarea');

    textarea.className = 'reply-input';
    textarea.maxLength = 2000;
    textarea.placeholder = `Reply to ${comment.username}...`;

    const buttons = document.createElement('div');
    buttons.className = 'reply-actions';

    const cancelButton = document.createElement('button');

    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';

    cancelButton.addEventListener('click', () => {
        replyBox.remove();
    });

    const submitButton = document.createElement('button');

    submitButton.type = 'button';
    submitButton.textContent = 'Post Reply';

    submitButton.addEventListener('click', async () => {

        const content = textarea.value.trim();

        if (!content) {
            showToast('Reply cannot be empty.');
            return;
        }

        await submitReply(comment, content, replyBox);
    });

    buttons.append(cancelButton, submitButton);

    replyBox.append(textarea, buttons);

    commentElement.appendChild(replyBox);

    textarea.focus();
}

async function submitReply(comment, content, replyBox) {
    if (!appState.token) {
        showToast('Please log in first.');
        return;
    }

    if (!content || !content.trim()) {
        showToast('Reply cannot be empty.');
        return;
    }

    const cleanContent = content.trim();

    if (cleanContent.length > 2000) {
        showToast(
            'Reply must be 2000 characters or less.'
        );
        return;
    }

    try {
        const response = await fetch(
            `https://crossbook.onrender.com/comments/${comment.id}/reply`,
            {
                method: 'POST',

                headers: commentHeaders(),

                body: JSON.stringify({
                    content: cleanContent
                })
            }
        );

        if (!response.ok) {
            const message = await response.text();

            throw new Error(
                message || 'Could not post reply.'
            );
        }

        replyBox.remove();

        if (currentModalBook) {
            await loadComments(currentModalBook.id);
        }

        showToast('Reply posted successfully.');

    } catch (error) {

        console.error(
            'Reply error:',
            error
        );

        showToast(
            error.message ||
            'Could not post reply.'
        );
    }
}

function commentHeaders() {
    const headers = {
        'Content-Type': 'application/json'
    };

    if (appState.token) {
        headers['Authorization'] = `Bearer ${appState.token}`;
    }

    return headers;
}

commentForm.addEventListener('submit', async event => {
    event.preventDefault();

    if (!currentModalBook || !appState.token) {
        showToast('Please log in first.');
        return;
    }

    const bookId = currentModalBook.id;
    const content = commentInput.value.trim();

    if (!content) {
        commentFeedback.textContent = 'Comment cannot be empty.';
        return;
    }

    try {
        const response = await fetch(
            `https://crossbook.onrender.com/comments/${bookId}`,
            {
                method: 'POST',
                headers: commentHeaders(),
                body: JSON.stringify({
                    content: content
                })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                errorText || 'Could not post comment.'
            );
        }

        commentInput.value = '';
        commentFeedback.textContent = '';

        await loadComments(bookId);

        showToast('Comment posted successfully.');

    } catch (error) {

        console.error(
            'Comment post error:',
            error
        );

        commentFeedback.textContent =
            error.message ||
            'Could not post comment.';
    }
});

async function editComment(comment) {
    const content = window.prompt('Edit your comment:', comment.content);
    if (content === null || !content.trim()) return;
    try {
        const response = await fetch(`https://crossbook.onrender.com/comments/${comment.id}`, {
            method: 'PUT',
            headers: commentHeaders(),
            body: JSON.stringify({ content })
        });
        if (!response.ok) throw new Error(await response.text());
        if (currentModalBook) await loadComments(currentModalBook.id);
    } catch (error) {
        showToast(error.message || 'Could not update comment.');
    }
}

async function deleteComment(comment) {
    if (!window.confirm('Delete your comment?')) return;
    try {
        const response = await fetch(`https://crossbook.onrender.com/comments/${comment.id}`, {
            method: 'DELETE',
            headers: commentHeaders()
        });
        if (!response.ok) throw new Error(await response.text());
        if (currentModalBook) await loadComments(currentModalBook.id);
    } catch (error) {
        showToast(error.message || 'Could not delete comment.');
    }
}

function closeModal() {
    bookModal.classList.add('hidden');
    currentModalBook = null;
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !bookModal.classList.contains('hidden')) {
        closeModal();
    }
});

// ========================================
// ACTION BUTTONS (LIKE/DISLIKE)
// ========================================

function updateActionButtons() {
    if (!currentModalBook) return;
    
    const isFavorited = appState.favorites.includes(currentModalBook.id);
    const isDisliked = appState.dislikes.includes(currentModalBook.id);
    
    // Update favorite button
    if (isFavorited) {
        addFavoriteBtn.classList.add('favorited');
        addFavoriteBtn.innerHTML = '<span class="heart-icon">❤️</span><span class="btn-text">Added to Favorites</span>';
    } else {
        addFavoriteBtn.classList.remove('favorited');
        addFavoriteBtn.innerHTML = '<span class="heart-icon">🤍</span><span class="btn-text">Add to Favorites</span>';
    }
    
    // Update dislike button
    if (isDisliked) {
        addDislikeBtn.classList.add('disliked');
        addDislikeBtn.innerHTML = '<span class="dislike-icon">👎</span><span class="btn-text">Disliked</span>';
    } else {
        addDislikeBtn.classList.remove('disliked');
        addDislikeBtn.innerHTML = '<span class="dislike-icon">👎</span><span class="btn-text">Dislike</span>';
    }
}

addFavoriteBtn.addEventListener('click', () => {
    if (!currentModalBook) return;
    toggleFavorite(currentModalBook.id);
});

addDislikeBtn.addEventListener('click', () => {
    if (!currentModalBook) return;
    toggleDislike(currentModalBook.id);
});

async function toggleFavorite(bookId) {
    if (!appState.currentUserID) {
        showToast('Please log in to like books.');
        return;
    }

    bookId = Number(bookId);

    const isFavorited =
        appState.favorites.includes(bookId);

    try {
        const response = await fetch(
            'https://crossbook.onrender.com/favorite',
            {
                method: isFavorited ? 'DELETE' : 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    userId: appState.currentUserID,
                    bookId: bookId
                })
            }
        );

        if (!response.ok) {
            const message = await response.text();

            throw new Error(
                message || 'Could not update favorite.'
            );
        }

        if (isFavorited) {

            appState.favorites =
                appState.favorites.filter(
                    id => Number(id) !== bookId
                );

            showToast('Removed from Favorites');

        } else {

            appState.favorites.push(bookId);

            /*
             * A book cannot be both liked
             * and disliked.
             */
            appState.dislikes =
                appState.dislikes.filter(
                    id => Number(id) !== bookId
                );

            showToast('Added to Favorites ❤️');
        }

        /*
         * Update only the modal buttons.
         * Do NOT reload the entire bookshelf.
         */
        updateActionButtons();

    } catch (error) {

        console.error(
            'Favorite error:',
            error
        );

        showToast(
            error.message ||
            'Could not update favorite.'
        );
    }
}
async function toggleDislike(bookId) {
    if (!appState.currentUserID) {
        showToast('Please log in to dislike books.');
        return;
    }

    bookId = Number(bookId);

    const isDisliked =
        appState.dislikes.includes(bookId);

    try {
        const response = await fetch(
            'https://crossbook.onrender.com/dislike',
            {
                method: isDisliked ? 'DELETE' : 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    userId: appState.currentUserID,
                    bookId: bookId
                })
            }
        );

        if (!response.ok) {
            const message = await response.text();

            throw new Error(
                message || 'Could not update dislike.'
            );
        }

        if (isDisliked) {

            appState.dislikes =
                appState.dislikes.filter(
                    id => Number(id) !== bookId
                );

            showToast('Dislike Removed');

        } else {

            appState.dislikes.push(bookId);

            /*
             * A book cannot be both liked
             * and disliked.
             */
            appState.favorites =
                appState.favorites.filter(
                    id => Number(id) !== bookId
                );

            showToast('Marked as Disliked 👎');
        }

        /*
         * Update only the modal buttons.
         */
        updateActionButtons();

    } catch (error) {

        console.error(
            'Dislike error:',
            error
        );

        showToast(
            error.message ||
            'Could not update dislike.'
        );
    }
}
//     if (!appState.isAuthenticated) {
//         showToast('Please log in to dislike books');
//         return;
//     }

//     const isDisliked = appState.dislikes.includes(bookId);
    
//     try {
//         const response = await fetch(`${API_URL}/books/${bookId}/dislike`, {
//             method: isDisliked ? 'DELETE' : 'POST',
//             headers: {
//                 'Authorization': `Bearer ${appState.token}`,
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ userId: appState.currentUserID })
//         });

//         if (response.ok) {
//             if (isDisliked) {
//                 appState.dislikes = appState.dislikes.filter(id => id !== bookId);
//                 showToast(`Removed from dislikes`);
//             } else {
//                 appState.dislikes.push(bookId);
//                 // Remove from favorites if it was favorited
//                 appState.favorites = appState.favorites.filter(id => id !== bookId);
//                 showToast(`Marked as disliked`);
//             }
            
//             updateActionButtons();
//             loadBookShelf();
//         }
//     } catch (error) {
//         console.error('Error toggling dislike:', error);
//         showToast('Failed to update dislike status');
//     }
// }

// ========================================
// LOGOUT
// ========================================

logoutBtn.addEventListener('click', logout);

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserID');
    localStorage.removeItem('authToken');
    
    appState.currentUser = null;
    appState.currentUserID = null;
    appState.token = null;
    appState.isAuthenticated = false;
    appState.favorites = [];
    appState.dislikes = [];
    
    mainApp.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    
    // Reset forms
    document.getElementById('signupName').value = '';
    document.getElementById('signupPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('loginName').value = '';
    document.getElementById('loginPassword').value = '';
    
    showToast('Logged out successfully');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function showLoadingSpinner(show) {
    if (show) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}

// ========================================
// INITIALIZATION
// ========================================

window.addEventListener('load', async () => {

    const savedUser =
        localStorage.getItem(
            "currentUser"
        );

    const savedUserID =
        localStorage.getItem(
            "currentUserID"
        );
    const savedToken = localStorage.getItem('authToken');

    if (savedUser && savedUserID && savedToken) {

        appState.currentUser =
            savedUser;

        appState.currentUserID =
            parseInt(savedUserID);
        appState.token = savedToken;

        appState.isAuthenticated =
            true;

        await loadUserPreferences();

        showMainApp();

    } else {

        welcomeScreen.classList.remove(
            'hidden'
        );
    }
});

// Animate stars
function animateStars() {
    const allStars = document.querySelectorAll('.star');
    allStars.forEach(star => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        const randomDelay = Math.random() * 2;
        const randomDuration = Math.random() * 2 + 2;
        
        star.style.left = randomX + 'px';
        star.style.top = randomY + 'px';
        star.style.animationDelay = randomDelay + 's';
        star.style.animationDuration = randomDuration + 's';
    });
}

animateStars();
