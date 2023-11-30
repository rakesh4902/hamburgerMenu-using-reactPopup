// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="main-container">
    <Header />
    <div className="home-image-container">
      <img
        className="mobile-home-image"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <img
        className="laptop-home-image"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
