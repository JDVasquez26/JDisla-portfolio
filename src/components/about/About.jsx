import "./about.scss";

const About = () => {
  return (
    <div className="about" id='about'>

      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="assets/moi.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        Hello, I'm Jesthine Disla Vasquez, a teacher turn coder, 
        with a passion for using technology to solve problems and create innovative and user-friendy web applications. 
        I love nature, my cat named Pluto, and going to music concerts.
        </p>
        <p className="a-desc">
        I'm a Frontend / Fullstack developer dedicated to learning, 
        problem-solving, and designing modern applications. I have 
        experience creating dynamic single-page applications with responsive UIs with clean functionality.
        {/* Skilled in using backend frameworks to create services to deliver and manage 
        data through relational databases. */}
        </p>
        {/* <h3 className='skills-header'>Technologies I Use</h3> */}
        <span
        className="tech-stack" 
          style={{display:"flex", justifyContent:"space-evenly", overflow:"hidden", marginTop:"20px"}}
          >
          <img style={{ width: 30, height: 30 }} src="assets/javascript.png" alt="" />
          <img style={{ width: 30, height: 30 }} src="assets/nodejs (1).png" alt="" />
          <img style={{ width: 30, height: 30 }} src="assets/express.png" alt="" />
          <img style={{ width: 30, height: 30 }} src="assets/postgresql.png" alt="" />
          <img style={{ width: 30, height: 30 }} src="assets/react.png" alt="" />
          <img style={{ width: 30, height: 30 }} src="assets/redux.png" alt="" />
          </span>
          <div className='skills-container'>
            <div>
              <ul>
                <h3>Frontend:</h3>
                <li>JavaScript ES6</li>
                <li>React</li>
                {/* <li>JSX / TSX</li> */}
                <li>Redux Toolkit</li>
                <li>CSS3</li>
                <li>Figma</li>
                <li>HTML5</li>
              </ul>
            </div>
            <div>
              <ul>
                <h3>Backend:</h3>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                {/* <li>SQL Server</li> */}
                <li>Database Design</li>
              </ul>
            </div>
            <div>
              <ul>
                <h3>Other Competancies:</h3>
                <li>RESTful APIs</li>
                <li>Responsive Design</li>
                <li>AJAX</li>
                <li>Git/Github</li>
                {/* <li>Netlify</li>
                <li>Heroku</li> */}
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
