import { Send } from 'lucide-react';
import ProfileImage from '../assets/profile.jpg';
const About = () => {
  return (
    <div id="about">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center">
        About me
      </h2>
      <div className="about-section">
        <div className="left">
          <img src={ProfileImage} alt="ProfileImage" id="profile-image" />
        </div>
        <div className="right">
          <section>
            <h2>
              I'm <span>Rajesh</span>
            </h2>
            <p>Full stack developer</p>
            <p>
              I am a passionate full-stack web developer with hands-on expertise
              in Next.js, the MERN stack, and Java programming. I thrive on
              transforming innovative ideas into robust, real-world applications
              by leveraging modern technologies and best coding practices. My
              approach combines creative problem-solving with a commitment to
              building scalable and impactful digital solutions. I’m driven by
              the challenge of turning concepts into seamless, user-focused
              products, and I continuously seek opportunities to learn and grow
              in the ever-evolving tech landscape.
            </p>
            <p>
              <span>Email:</span>{' '}
              <a href="mailTo:iamrajesh65892004@gmail.com">
                iamrajesh65892004@gmail.com
              </a>
            </p>
            <p>
              <span>Place:</span> Tamilnadu,India-607301
            </p>
            <button>
              Resume <Send />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
export default About;
