import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container-fluid my-5">
                <h1 className="text-light">Emmanuel Jatto</h1>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/resume"
                            className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
        </div>
        </nav>
        
    );
}

export default Navigation;