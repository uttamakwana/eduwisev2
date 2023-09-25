import React from "react";
import "./whyeduwise.css";
import images from "../../constants/images.js";

const WhyEduWise = () => {
  return (
    // Why EduWise component
    <div className="why-eduwise-container" id="why-eduwise-container">
      <h2 className="why-eduwise-heading">
        Why <span> EduWise?</span>
      </h2>
      <div className="why-eduwise-container-content">
        <div className="why-eduwise-container-side">
          <div className="why-eduwise-container-leftside-top why-eduwise-shadow">
            <div className="why-eduwise-container-top">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/emoji/48/fire.png"
                alt="fire"
              />
              <strong>Effective and Efficient</strong>
            </div>
            <div>
              <p>
                Our study material effectively and efficient teach reading and
                learning. Check more courses.
              </p>
            </div>
          </div>
          <div className="why-eduwise-container-leftside-bottom why-eduwise-shadow">
            <div className="why-eduwise-container-top">
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/3d-fluency/94/checkmark.png"
                alt="checkmark"
              />
              <strong>Personalized Learning</strong>
            </div>
            <div>
              <p>
                Combining the best study material, lessons are tailored to help
                you learn at just the right level and pace.
              </p>
            </div>
          </div>
        </div>
        <div className="why-eduwise-container-centerimage">
          <img src={images.kid} alt="kid-studing-in-eduwise" />
        </div>
        <div className="why-eduwise-container-side">
          <div className="why-eduwise-container-rightside-top why-eduwise-shadow">
            <div className="why-eduwise-container-top">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/emoji/48/crown-emoji.png"
                alt="crown-emoji"
              />
              <strong>Stay Motivated</strong>
            </div>
            <div>
              <p>
                Stay motivated in education. Knowledge is power, unlocking opportunities and your full potential.
              </p>
            </div>
          </div>
          <div className="why-eduwise-container-rightside-bottom why-eduwise-shadow">
            <div className="why-eduwise-container-top">
              <img
                width="45"
                height="45"
                src="https://img.icons8.com/3d-fluency/94/hard-working.png"
                alt="hard-working"
              />
              <strong>Have fun with EduWise</strong>
            </div>
            <div>
              <p>
                Effective learning doesn t have to be boring! Complete your
                syllabus each day each day with EduWise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyEduWise;
