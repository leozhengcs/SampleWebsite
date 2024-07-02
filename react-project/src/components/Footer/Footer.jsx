import './Footer.css'

export default function Footer() {

    return (
        <footer>
        <address>
            <form action="">
                <label htmlFor="email-newsletter">Stay Updated</label>
                <input type="email" placeholder="Enter your email address" id="email-newsletter" />
                <button type="submit" id="subscribe-button">Subscribe</button>
            </form>
            <div id="social-medias">
                <span>Find us on Social Media</span>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="./images/Instagram-outline-icon-logo-0٣.png" alt="instagram logo" id="instagram-logo" />
                </a>
                <a href="">
                    <img src="./images/facebook-logo.png" alt="facebook-logo" id="facebook-logo" />
                </a>
            </div>
        </address>
        <div className="location">
            <h1>Visit Us</h1>
            <span>1234, Summer Drive, Richmond, BC</span>
            <span>Call us at <span className="underline">123-456-7890</span></span>
        </div>
        <div className="hours-of-operation">
            <h1>Hours</h1>
            <div id="hours">
                <span>Monday</span>
                <span>1-8 PM</span>
                <span>Tuesday</span>
                <span>1-8 PM</span>
                <span>Wednesday</span>
                <span>1-8 PM</span>
                <span>Thursday</span>
                <span>1-8 PM</span>
                <span>Friday</span>
                <span>1-10 PM</span>
                <span>Saturday</span>
                <span>1-10 PM</span>
                <span>Sunday</span>
                <span>1-10 PM</span>
            </div>
        </div>
    </footer>
    )
}