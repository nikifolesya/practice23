import './collage.css'
import img1 from '../../desire-2 2/gallery/placeholder-4.jpg'
import img2 from '../../desire-2 2/gallery/placeholder-1.jpg'
import img3 from '../../desire-2 2/gallery/placeholder.jpg'
import img4 from '../../desire-2 2/gallery/placeholder-2.jpg'
import img5 from '../../desire-2 2/gallery/placeholder-3.jpg'

function Collage() {
    return(
        <section className="collage">
            <div className="box1">
                <img src={img1} className="collage-img-1" alt=""/>
            </div>
            <div className="box2">
                <img src={img2} className="collage-img-2" alt=""/>
                <img src={img3} className="collage-img-3" alt=""/>
                <img src={img4} className="collage-img-4" alt=""/>
                <img src={img5} className="collage-img-5" alt=""/>
        </div>
        </section>
    )
}

export default Collage