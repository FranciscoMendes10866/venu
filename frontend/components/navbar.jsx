import { SiOpenbadges } from 'react-icons/si'

const Navbar = () => {
    return (
        <div className="hero-head">
            <nav className="navbar px-4" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href style={{ color: 'white', fontSize: 34 }}>
                        <SiOpenbadges />
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button className="button is-danger">
                                    <strong>Log Out</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
