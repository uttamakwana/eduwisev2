import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AboutUs, Header } from "../../components";
import { motion } from "framer-motion";
import "./content.css";
import images from "../../constants/images";
const Content = ({ setSelectedCard }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  // const departmentRef = useRef(null);
  // const semesterRef = useRef(null);

  const [department, setDepartment] = useState("Information Technology");
  const [semester, setSemester] = useState("6");

  const location = useLocation();
  const locationValue = location.pathname;

  const cardArray = [
    {
      img: images.ADA,
      title: "Analysis and Design of Algorithm",
      code: "3150709",
      department: "Information Technology",
      semester: "5",
    },
    {
      img: images.WT,
      title: "Web Technology",
      code: "2160708",
      department: "Computer Engineering",
      semester: "6",
    },
    {
      img: images.TOC,
      title: "Theory of Computation",
      code: "2160704",
      department: "Computer Engineeing",
      semester: "6",
    },
    {
      img: images.AWP,
      title: "Advanced Web Programming",
      code: "3161611",
      department: "Information Technology",
      semester: "6",
    },
    {
      img: images.OOP,
      title: "OOP",
      code: "2140705",
      department: "Computer Engineering",
      semester: "6",
    },
    {
      img: images.OS,
      title: "Operating System",
      code: "3154985",
      department: "Information Technology",
      semester: "4",
    },
    {
      img: images.CS,
      title: "Cyber Security",
      code: "3150714",
      department: "Information Technology",
      semester: "5",
    },
    {
      img: images.CN,
      title: "Computer Network",
      code: "3150710",
      department: "Information Technology",
      semester: "5",
    },
    {
      img: images.SC,
      title: "Satellite Communication",
      code: "3154985",
      department: "Electronics and Communication",
      semester: "6",
    },
    {
      img: images.ET,
      title: "Engineering Thrmodynamics",
      code: "3131905",
      department: "Mechanical Engineering",
      semester: "3",
    },

    {
      img: images.SE,
      title: "Software Engineering",
      code: "3150711",
      department: "Information Technology",
      semester: "6",
    },
  ];

  const [filterdArray, setFilteredArray] = useState(cardArray);
  const [explore, setExplore] = useState(false);

  // console.log("outside", departmentRef.current.value);
  console.log("outside", department);
  useEffect(() => {
    // console.log(departmentRef.current.value);
    console.log("inside", department);
    if (department) {
      const updatedArray = cardArray.filter(
        (card) => card.department === department && card.semester === semester
      );
      setFilteredArray(updatedArray);
    }
    // if (semester) {
    //   const updatedArray = cardArray.filter(
    //     (card) => card.semester === semester
    //   );
    //   setFilteredArray(updatedArray);
    // }
  }, [department, semester]);
  // console.log(departmentRef.current);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Header toggle={toggle} setToggle={setToggle} location={locationValue} />
      <section className="filter">
        {/* <h1>Subjects</h1> */}
        <h1>Subjects</h1>
        <div className="filter-list">
          <div className="filter-list-group">
            <select
              name="department"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="" disabled>
                Department
              </option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Computer Engineering">Computer Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Bio Medical">Bio Medical</option>
              <option value="Electornics and Communication">
                Electornics and Communication
              </option>
            </select>
          </div>
          <div className="filter-list-group">
            <select
              name="semester"
              id="semester"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="Semester">Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
        </div>
      </section>
      <div className="subject-container">
        <div className="container">
          {filterdArray.length > 0 ? (
            filterdArray.map((card, index) => {
              return (
                <div className="card">
                  <img src={card.img} alt="none" style={{ display: "block" }} />
                  <strong>{card.title}</strong>
                  <p>{card.code}</p>
                  <button
                    onClick={() => {
                      setExplore(true);
                      navigate("/subject");
                      setSelectedCard(card);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Explore
                  </button>
                </div>
              );
            })
          ) : (
            <div className="card no-subject">
              <strong style={{ color: "purple" }}>
                Sorry no subjects found!
              </strong>
            </div>
          )}
        </div>
      </div>
      <AboutUs />
      <Link id="back-btn" to="/" className="back-btn">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/circled-left-2.png"
          alt="circled-left-2"
        />
      </Link>
      {/* <button onClick={() => navigate("/")}>Back to home</button> */}
    </motion.main>
  );
};

export default Content;
