import { Link } from "react-router-dom";

function Nav() {
    return (
       <header className="nav-container">
            <div className="logo-and-links">
                <Link className="logo-name" to="/">Fox Auction</Link>
                <Link className="nav-link-section" to="/shop">Shop</Link>
            </div>
            <nav className="nav-emoji-bar">
                <Link className="my-account-nav" to="/account"><i className="fa-regular fa-user"></i></Link>
                <Link className="contact-list">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <i class="fa-solid fa-ellipsis-vertical"></i>
                </Link>
            </nav>
       </header>
    );
}
export default Nav;
