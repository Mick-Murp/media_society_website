export default function Footer() {
    return (
    <footer>
        <div className="container">
            <p>© 2026 TU Dublin Media Society. All rights reserved.</p>
        </div>
        <div className="social-links">
            <a
                href="https://www.instagram.com/tudmediasociety"
                aria-label="Instagram"
            >
            <img src="icons/instagram.png" alt="Instagram" width={30} height={30} />
        </a>
            <a href="https://discord.com/invite/SXxPdGvKU5" aria-label="Discord">
                <img src="icons/discord.png" alt="Discord" width={30} height={30} />
            </a>
        </div>
    </footer>
    );
}