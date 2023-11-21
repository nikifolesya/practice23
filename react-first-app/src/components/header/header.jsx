// import App from '../../App'
import './header.css'
import img1 from '../../desire-2 2/logo.png'
import img2 from '../../desire-2 2/icon_menu.svg'
import links from '../../data'

function Header() {
    const menuLinksLeft = [
        { 
            id: 1,
            title: "Home",
            link: links[0].link
        },
        {
            id: 2,
            title: "Catalog",
            link: "catalog-page"
        }
    ]

    const menuLinksRight = [
        { 
            id: 3,
            title: "About",
            link: links[1].link
        },
        {
            id: 4,
            title: "Login",
            link: links[2].link
        }
    ]

    // const menuItemsRight = menuLinksRight.map( (l) => (
    //     <MenuItem
    //         key={l.id}
    //         title={l.title}
    //         link={l.link}
    //     />
    // ))

    const menuItemsRight = menuLinksRight.map( (l) => (
        <a key={l.id} className="button-header" href={l.link}>{l.title}</a>
    ))

    const menuItemsLeft = menuLinksLeft.map( (l) => (
        <a key={l.id} className="button-header" href={l.link}>{l.title}</a>
    ))

    
    return (
    <header>
        <div className="container">
            <div className='left-button'>
                {/* <a className="button-header" href="#">About</a>
                <br />
                <a className="button-header" href="#">Gallery</a> */}
                {menuItemsLeft}
            </div>
    
            <img src={img1} className="logo" alt="logo"/>

            <div className='right-button'>
                {/* <a className="button-header" href="#">Blog</a>
                <br />
                <a className="button-header" href="#">Contact</a> */}
                {menuItemsRight}
            </div>

            {/* <button className='menu-button'>
            </button> */}
            <img src={img2} className="menu" alt="menu"/>
        </div>
    </header>
    )
}

export default Header