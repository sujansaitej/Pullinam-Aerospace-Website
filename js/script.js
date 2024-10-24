// Load Navbar
document.getElementById('navbar-placeholder').innerHTML = `
    <nav>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
`;

// Load Footer
document.getElementById('footer-placeholder').innerHTML = `
    <footer>
        <p>&copy; 2024 Pullinam Aerospace Technologies. All Rights Reserved.</p>
    </footer>
`;
// scripts.js
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

