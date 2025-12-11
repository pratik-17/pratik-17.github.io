import "./App.css";
import profileImg from "./assets/profile.jpeg"; // change name if needed

function App() {
  return (
    <div className="page">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-inner">
          <div className="nav-logo">Achyut Deshpande</div>
          <nav>
            <a href="#home">Home</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Achievements</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="section hero">
          <div className="hero-left fade-in-up">
            <p className="hero-chip">Mechanical Engineering • Design • Innovation</p>
            <h1>
              Hi, I&apos;m <span className="accent">Achyut Anant Deshpande</span>
            </h1>
            <h2 className="hero-subtitle">Final Year Mechanical Engineering Student</h2>
            <p className="hero-text">
              I am passionate about mechanical design, CAD/CAE, and building practical
              engineering solutions. From thermochemical energy storage systems to
              environmental devices like SeaBin, I enjoy turning ideas into working
              prototypes.
            </p>

            <div className="hero-tags">
              <span>Mechanical Design</span>
              <span>CAD &amp; CAE</span>
              <span>Product Development</span>
              <span>Problem Solving</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View My Projects
              </a>
              <a href="#contact" className="btn outline">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-right fade-in-up delay-1">
            <div className="profile-card float">
              <div className="profile-image-wrapper">
                <img src={profileImg} alt="Achyut Deshpande" className="profile-image" />
              </div>
              <div className="profile-info">
                <h3>Quick Info</h3>
                <p>🎓 B.Tech Mechanical, DKTE Society&apos;s Textile &amp; Engineering Institute (An Empowered Autonomous Institute)</p>
                <p>📍 Miraj, Maharashtra, India</p>
                <p>📧 atharvaadeshpande2004@gmail.com</p>
                <p>📞 7420878362</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="section fade-in-up">
          <h2 className="section-title">Education</h2>
          <div className="grid">
            <div className="card card-animate">
              <h3>DKTE&apos;s Textile &amp; Engineering Institute, Ichalkaranji</h3>
              <p className="card-subtitle">B.Tech – Mechanical Engineering (Final Year)</p>
              <p className="card-meta">2022 – Present</p>
            </div>
            <div className="card card-animate">
              <h3>Vidya Mandir Prashala &amp; Junior College, Miraj</h3>
              <p className="card-subtitle">HSC – 68.00%</p>
              <p className="card-meta">2022</p>
            </div>
            <div className="card card-animate">
              <h3>Ideal English School, Miraj</h3>
              <p className="card-subtitle">SSC – 71.40%</p>
              <p className="card-meta">2020</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section fade-in-up">
          <h2 className="section-title">Internship Experience</h2>
          <div className="grid">
            <div className="card card-animate">
              <h3>Mahabal Metals Private Limited</h3>
              <p className="card-subtitle">Intern – Machining Department</p>
              <p className="card-meta">June 2024</p>
              <p>
                Worked with machining operations, shop-floor practices, precision
                measuring instruments, and basic quality checks in a real production
                environment.
              </p>
            </div>
            <div className="card card-animate">
              <h3>Rotadyne Precision Engineering Pvt. Ltd.</h3>
              <p className="card-subtitle">Intern – Quality Control Department</p>
              <p className="card-meta">November 2024</p>
              <p>
                Performed inspection using QC tools and gauges, assisted in documentation,
                and supported quality standard procedures in the manufacturing process.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section fade-in-up">
          <h2 className="section-title">Projects</h2>
          <div className="grid">
            <div className="card card-animate">
              <h3>Thermochemical Energy Storage (TCES) System</h3>
              <p className="card-subtitle">Research Project</p>
              <p>
                Investigated thermochemical energy storage using salt hydrates such as
                SrBr₂ and SrCl₂. Designed and tested a reactor to store large amounts of
                energy in a compact system with minimal loss.
              </p>
            </div>
            <div className="card card-animate">
              <h3>Air Umbrella Helmet</h3>
              <p className="card-subtitle">Conceptual Design</p>
              <p>
                Designed a conceptual umbrella helmet using an air dome-shaped structure
                to provide protection from environmental exposure and improve user comfort.
              </p>
            </div>
            <div className="card card-animate">
              <h3>Magnetic Damper</h3>
              <p className="card-subtitle">Vibration Damping System</p>
              <p>
                Developed a piston-cylinder arrangement using opposing magnets to
                effectively damp vibrations without physical contact, reducing wear and
                maintenance.
              </p>
            </div>
            <div className="card card-animate">
              <h3>Customizable LCV</h3>
              <p className="card-subtitle">Modular Light Commercial Vehicle</p>
              <p>
                Designed a customizable carriage system for light commercial vehicles
                (LCVs), enabling the same chassis to be adapted for different use cases.
              </p>
            </div>
            <div className="card card-animate">
              <h3>SeaBin – Water Surface Waste Collector</h3>
              <p className="card-subtitle">Environmental Prototype</p>
              <p>
                Developed a stationary floating device inspired by the Seabin concept to
                collect floating waste from small stagnant water bodies using low-cost
                materials and passive operation.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="section fade-in-up">
          <h2 className="section-title">Achievements &amp; Certifications</h2>
          <div className="grid grid-2">
            <div className="card card-animate">
              <ul className="list">
                <li>Six Sigma White Belt – understanding of quality and waste reduction.</li>
                <li>Third Prize in “Mech-Dart” – Tech-Symposium 2K24, DKTE.</li>
                <li>
                  Participated in AAKRUTI Global 2024 – SOLIDWORKS design contest on
                  sustainability and innovation.
                </li>
                <li>Participation in IET Karmaveer Expo 2024 – project exhibition.</li>
              </ul>
            </div>
            <div className="card card-animate">
              <ul className="list">
                <li>
                  Tata Technologies Ready Engineer Program – Advanced Automobile Design,
                  Analysis &amp; Manufacturing.
                </li>
                <li>CSWA-certified in SolidWorks – Dassault Systèmes.</li>
                <li>NPTEL Certification – Advanced Machining Processes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section fade-in-up">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid">
            <div className="card card-animate">
              <h3>Design &amp; Analysis</h3>
              <div className="pill-list">
                <span>AutoCAD 2D &amp; 3D</span>
                <span>SolidWorks</span>
                <span>Fusion 360</span>
                <span>CATIA</span>
                <span>ANSYS Workbench</span>
              </div>
            </div>
            <div className="card card-animate">
              <h3>Programming &amp; Tools</h3>
              <div className="pill-list">
                <span>C Programming</span>
                <span>Python</span>
                <span>Microsoft Office</span>
                <span>Canva</span>
                <span>Photoshop</span>
              </div>
            </div>
            <div className="card card-animate">
              <h3>Extra-Curricular &amp; Memberships</h3>
              <div className="pill-list">
                <span>MESA Co-Coordinator</span>
                <span>Member – SAE India</span>
                <span>Member – IME</span>
                <span>Member – E-Cell DKTE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section fade-in-up">
          <h2 className="section-title">Contact</h2>
          <p className="contact-text">
            I&apos;m open to opportunities in mechanical design, product development,
            and research-oriented roles. Feel free to reach out for internships,
            full-time roles, or collaborations.
          </p>
          <div className="contact-grid">
            <div className="card card-animate">
              <h3>Contact Details</h3>
              <p>📞 7420878362</p>
              <p>📧 atharvaadeshpande2004@gmail.com</p>
              <p>
                🏠 Malkans Appt. Flat No. 8, Watve Galli, Brahmanpuri, Miraj – 416410
              </p>
            </div>
            <div className="card card-animate">
              <h3>Online Profiles</h3>
              <p>
                🔗{" "}
                <a
                  href="https://www.linkedin.com/in/achyut-deshpande-b34369334"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Achyut Anant Deshpande · Portfolio
      </footer>
    </div>
  );
}

export default App;
