import './AboutMe.css'

const AboutMe = () => {
  let timeofDay;
  const date = new Date();
  const hours = date.getHours();

  console.log('current date:', date)

  if (hours < 12)
    timeofDay = 'morning'
  else if (hours > 17)
    timeofDay = 'evening'
  else 
    timeofDay = 'afternoon'

  return (
    <>
      <div className="paintedladies"></div>
      <div className="greeting">
        <h1>Albert Xu</h1>
        <h5>Good {timeofDay}, and welcome!</h5>
      </div>
      <div className="about-me-intro">
        <h3>About Me</h3>
        <p>
          I am currently a CS major doing my undergraduate studies at Purdue University.
          When I'm not stressing over CS 250, I enjoy taking day trips around the Bay,
          travel (preferably to someplace tropical), and giving my dog (the goodest girl)
          whatever she wants. The photos on my site are intended to be a collage reflecting
          my favorite places and things.
        </p>
      </div>
      <div className="sdcoast"></div>
      <div className="about-me-experience">
        <h5>Experience</h5>
        <p>
          I have experience with writing Apex classes, triggers, and tests on the Salesforce platform.
          Languages and libraries I use for frontend include HTML/CSS and ReactJS, as well as 
          using Axios for making HTTP requests to REST APIs.
          Other programming languages I am proficient with include Java, C, Python,
          and JavaScript.
        </p>
      </div>
      <div className="costaricanresort"></div>
      <div className="about-site">
        <h5>About the Site</h5>
        <p>
          This site was created using ReactJS, React Router DOM, Bootstrap, and my vacation photos.
        </p>
      </div>
      <div className="costaricansunset"></div>
    </>
  )
}
export default AboutMe