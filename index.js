// =========================
// MOBILE MENU & DROPDOWNS
// =========================
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

// Open/Close mobile menu
mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    mobileMenu.classList.toggle("active");

    // Close all dropdowns when menu opens
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.classList.remove("show");
    });
});

// Close mobile menu when clicking a normal link (not dropdown)
document.querySelectorAll("#nav-menu a:not(.dropdown > a)").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileMenu.classList.remove("active");

        // Close all dropdowns
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.classList.remove("show");
        });
    });
});

// Handle all dropdowns
document.querySelectorAll(".dropdown").forEach(dropdown => {
    const trigger = dropdown.querySelector("a");
    const menu = dropdown.querySelector(".dropdown-menu");

    // Toggle submenu on click
    trigger.addEventListener("click", (e) => {
        e.preventDefault();

        // Close other dropdowns
        document.querySelectorAll(".dropdown-menu").forEach(m => {
            if (m !== menu) m.classList.remove("show");
        });

        menu.classList.toggle("show");
    });

    // Close menu when clicking a submenu link
    menu.querySelectorAll("a").forEach(sublink => {
        sublink.addEventListener("click", () => {
            menu.classList.remove("show");
            navMenu.classList.remove("open");
            mobileMenu.classList.remove("active");
        });
    });
});

// =========================
// EVENT MODAL LOGIC
// =========================
const eventData = [
    {
        title: 'षोडश संस्कार पर व्याख्यान',
        date: '07 दिसंबर 2025 | 04:30 PM',
        venue: 'श्री रामनाथ भीमसेन सभा भवन, समता कॉलोनी, रायपुर (छ.ग.)',
        image: './images/event1.jpeg'
    },
    {
        title: 'डीडी नगर में नवनिर्मित लक्ष्मी नारायण मंदिर का स्थापना उत्सव',
        date: 'To be updated',
        venue: 'To be updated',
        image: './images/pastevent1.jpeg'
    },
    {
        title: 'Donation Drive',
        date: 'To be updated',
        venue: 'To be updated',
        image: './images/donation drive.png'
    }
];

const modal = document.getElementById('eventModal');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalVenue = document.getElementById('modal-venue');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');

// Open modal on "View More"
document.querySelectorAll('.event-card .btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const event = eventData[index];
        modalTitle.textContent = event.title;
        modalDate.textContent = event.date;
        modalVenue.textContent = event.venue;
        modalImage.src = event.image;
        modal.style.display = 'block';
    });
});

// Close modal on close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
