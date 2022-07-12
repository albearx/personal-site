
import facebookIcon from '../resources/facebook_icon.svg'
import githubIcon from '../resources/github_icon.svg'
import gmailIcon from '../resources/gmail_icon.svg'
import instagramIcon from '../resources/instagram_icon.svg'
import linkedinIcon from '../resources/linkedin_icon.svg'

import background from '../resources/honolulu_skyline.JPG'
import './Contact.css'

const Contact = () => {
  
  return (
    <div className="contact-wrapper">
      {/* <img src={background} /> */}
      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>

      <div className="socials">
        <a href="https://facebook.com/albearx/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt='Facebook'/>
        </a>
        <a href="https://github.com/albearx" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt='Github'/>
        </a>
        <a href="mailto:albert.xu.13103@gmail.com">
          <img src={gmailIcon} alt='Gmail' />
        </a>
        <a href="https://www.instagram.com/albearx/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt='Instagram' />
        </a>
        <a href="https://www.linkedin.com/in/albert-x/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt='LinkedIn' />
        </a>
      </div>
    </div>
  )
}
export default Contact;