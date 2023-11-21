import Contact from "../components/footer/contact"
import MadeBy from "../components/footer/madeBy"
import Header from "../components/header/header"
import Collage from "../components/main/collage"
import Gallery from "../components/main/gallery"
import Sofa from "../components/main/sofa"
import Welcome from "../components/main/welcome"

const MainPage = () => {
    return(
        <>
            <Header/>
            <Welcome/>
            <Gallery/>
            <Sofa/>
            <Collage/>
            <Contact/>
            <MadeBy/>
        </>
    )
}

export default MainPage