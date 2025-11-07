import { ArrowDown } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div id="Home">
      <div className="left">
        <section>
          <h2>Hi There,</h2>
          <h2>
            I am <span>Rajesh</span>
          </h2>
          <p>
            I am into <span>Frontend Development</span>
          </p>
          <button>
            About me
            <ArrowDown id="ad-icon" />
          </button>
        </section>
      </div>
      <div className="right">
        <img src={profileImage} alt="profileImage" id="profile-image" />
      </div>
    </div>
  );
};
export default Hero;
