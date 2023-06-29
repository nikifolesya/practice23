import './gallery.css'
import img1 from '../../desire-2 2/gallery/container-4.jpg'
import img2 from '../../desire-2 2/gallery/container-3.jpg'
import img3 from '../../desire-2 2/gallery/container-2.jpg'
import img4 from '../../desire-2 2/gallery/container-1.jpg'
import img5 from '../../desire-2 2/gallery/container.jpg'



function Gallery() {
    return (
        <section className="gallery">
            <img src={img1} className="img-1" alt=""/>
            <img src={img2} className="img-2" alt=""/>
            <img src={img3} className="img-3" alt=""/>
            <img src={img4} className="img-4" alt=""/>
            <img src={img5} className="img-5" alt=""/>
        </section>
    )
}

export default Gallery