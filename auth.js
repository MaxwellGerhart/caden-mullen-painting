// Authentication & Access Control Script
// Checks if user is authenticated before allowing access to site content

(function() {
    const AUTH_KEY = 'painting';
    const COMING_SOON_PAGE = 'coming-soon.html';
    
    // List of pages that should be protected (all except coming-soon.html)
    const protectedPages = ['index.html', 'about.html', 'services.html', 'portfolio.html', 'contact.html'];
    
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem(AUTH_KEY) === 'true';
    
    // If not authenticated and trying to access protected page, redirect to coming soon
    if (!isAuthenticated && protectedPages.includes(currentPage)) {
        window.location.replace(COMING_SOON_PAGE);
    }
    
    // Add logout functionality (optional - for developer convenience)
    window.cadenPaintingAuth = {
        logout: function() {
            sessionStorage.removeItem(AUTH_KEY);
            window.location.href = COMING_SOON_PAGE;
        },
        isAuthenticated: function() {
            return sessionStorage.getItem(AUTH_KEY) === 'true';
        }
    };
})();
