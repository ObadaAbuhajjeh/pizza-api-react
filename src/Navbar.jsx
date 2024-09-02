import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={`${style.navbar}`} >
            <div className="container">
                <div className="">
                    <ul className={`${style.ul}`}>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${style.entery}`} href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className={`${style.entery}`} href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
