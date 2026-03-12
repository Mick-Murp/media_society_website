import "../App.css";

export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 z-1000" style={{ backgroundColor: "#90d1bc" }}>
            <div className="container mx-auto flex justify-between items-center py-4 px-5">
                <div className="logo">
                    <img src="media/ms.png" alt="Media Soc" width={130} height={50} />
                </div>
                <ul className="flex gap-8 list-none">
                    <li>
                        <a href="#home" className="text-text font-medium transition-colors duration-300 hover:text-white font-galderBL">Home</a>
                    </li>
                    <li>
                        <a href="#committee" className="text-text font-medium transition-colors duration-300 hover:text-white font-galderBL">Committee</a>
                    </li>
                    <li>
                        <a href="#calendar" className="text-text font-medium transition-colors duration-300 hover:text-white font-galderBL">Calendar</a>
                    </li>
                    <li>
                        <a href="#gallery" className="text-text font-medium transition-colors duration-300 hover:text-white font-galderBL">Gallery</a>
                    </li>
                    <li className="join-pill">
                        <a href="https://societies.tudublin.ie/societies/mediasociety">
                            Join Now!
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
