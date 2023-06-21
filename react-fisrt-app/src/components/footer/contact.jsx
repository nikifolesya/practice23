import './contact.css'
import img1 from '../../desire-2 2/envelope.svg'
import fb from '../../desire-2 2/facebook.svg'
import ig from '../../desire-2 2/instagram.svg'
import pinterest from '../../desire-2 2/Pinterest.svg'
import wu from '../../desire-2 2/whatsapp.svg'
import yt from '../../desire-2 2/youtube.svg'

function Contact() {
    return(
        <section className='main-info'>
            <div className="contact-info">
                <div className="contact">
                    <h5>
                        <div>Contact Us</div>
                    </h5>
                    <h6>
                        <div>Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz you probably occupy</div>
                    </h6>
                    <div><img src={img1} className="mail-logo" alt="mail"/>ouremailaddress@email.com</div>
                    <div className="feedback">
                        <form action="mail.php" encType="multipart/form-data" method="post" name="form">
                            <input name="email" type="email" placeholder="Subscribe by email" />
                            <input type="submit" className="send-button" value="Send" />
                        </form>
                    </div>
                </div>
                <div className="social-media">
                    <div className="media-content">
                        <img src={fb} className="media-logo" alt="fb"/><div className="media-name">Facebook</div>
                    </div>
                    <div className="media-content">
                        <img src={ig} className="media-logo" alt="ig"/><div className="media-name">Instagram</div>
                    </div>
                    <div className="media-content">
                        <img src={pinterest} className="media-logo" alt="pinterest"/><div className="media-name">Pinterest</div>
                    </div>
                    <div className="media-content">
                        <img src={wu} className="media-logo" alt="wu"/><div className="media-name">WhatsApp</div>
                    </div>
                    <div className="media-content">
                        <img src={yt} className="media-logo" alt="yt"/><div className="media-name">Youtube</div>
                    </div>
                </div>
                <div className='info-content'>
                    <div className="info">Delivery</div>
                    <div className="info">FAQ</div>
                    <div className="info">Help</div>
                    <div className="info">More About Us</div>
                </div>
            </div>
        </section>
    )
}

export default Contact