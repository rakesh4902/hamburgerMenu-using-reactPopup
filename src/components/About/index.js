import Header from '../Header'
import './index.css'

const About = () => (
  <div className="main-container">
    <Header />
    <div className="home-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="mobile-home-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
        alt="about"
        className="laptop-home-image"
      />
    </div>
  </div>
)

export default About
