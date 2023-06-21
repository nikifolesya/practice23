import './sofa.css'
import img1 from '../../desire-2 2/Group 2.jpg'

function Sofa() {
    return(
        <section className="sofa">
            <img src={img1} className="sofa-img" alt="sofa"/>
            <div className="sofa-header">Aesthetic <br/>ethical drinking</div>
            <hr className="line-3"/>
            <div className="sofa-content">Deep v you probably have not heard of them banh mi synth actually affogato. Artlyft ethical the one drinking vinegar austint
            </div>
        </section>
    )
}

export default Sofa