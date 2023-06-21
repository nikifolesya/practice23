// import App from '../../App'
import './header.css'
import img1 from '../../desire-2 2/logo.png'
import img2 from '../../desire-2 2/icon_menu.svg'

function Header() {
    return (
    <header>
        <div className="container">
            <a className="button-about" href="#">About</a>
            <a className="button-gallery" href="#">Gallery</a>
            <img src={img1} className="logo" alt="logo"/>
            <a className="button-blog" href="#">Blog</a>
            <a className="button-contact" href="#">Contact</a>
            <img src={img2} className="menu" alt="menu"/>
        </div>
    </header>
    )
}

export default Header