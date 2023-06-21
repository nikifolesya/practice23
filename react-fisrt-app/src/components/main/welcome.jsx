import './welcome.css'
import img1 from '../../desire-2 2/slider/main_slider.jpg'
import img2 from '../../desire-2 2/slider/Group 1.png'

function Welcome() {
    return(
        <section className="welcome">
            <img src={img1} className="back-picture" alt="back-picture"/>
            <img src={img2} className="chair" alt="chair"/>
            <div className="main-info">
                <h1>
                    <div>Furniture <br/> collection</div>
                </h1>
                <hr className="line-1"/>
                <h2>
                    <div>Deep v you probably have not heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint</div>
                </h2>
                <h3>
                    <div>Furniture new collection</div>
                </h3>
                <hr className="line-2"/>
                <h4>
                    <div>Deep v you probably have not heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint</div>
                </h4>
            </div>
        </section>
    )
}

export default Welcome