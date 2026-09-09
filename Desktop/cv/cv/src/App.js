import './App.css';
import profileImg from './profilowe.jpg';
import inf03Img from './inf03.png';
import inf04Img from './inf04.png';
import codingImg from './kodowanie.png';

function App() {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <img 
          src={profileImg} 
          alt="Michał Leszek" 
          className="profile-img" 
        />
        <div className="header-text">
          <h1>Michał Leszek</h1>
          <p className="subtitle">Junior Frontend Developer / Technik Informatyk</p>
          <div className="contact-inline">
            <span>Email: michalleszek2008@wp.pl</span>
            <span>GitHub: github.com/Lesio01</span>
          </div>
        </div>
      </header>

      <section className="cv-section">
        <h2>O mnie</h2>
        <p>
          Pasjonat technologii internetowych oraz tworzenia nowoczesnych interfejsów użytkownika. 
          Stale rozwijam swoje umiejętności w ekosystemie JavaScript i React, dbając o czysty kod 
          i estetyczny wygląd aplikacji.
        </p>
      </section>

      <section className="cv-section">
        <h2>Kwalifikacje zawodowe</h2>
        <div className="qualifications-grid">
          <div className="qualification-card">
            <span className="badge">Zdany egzamin</span>
            <h3>INF.03</h3>
            <p>Tworzenie i administrowanie stronami i bazami danych oraz aplikacjami internetowymi</p>
          </div>
          <div className="qualification-card">
            <span className="badge">Zdany egzamin</span>
            <h3>INF.04</h3>
            <p>Projektowanie, programowanie i testowanie aplikacji</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h2>Umiejętności</h2>
        <div className="skills-tags">
          <span className="tag">HTML5</span>
          <span className="tag">CSS3 / Flexbox / Grid</span>
          <span className="tag">JavaScript (ES6+)</span>
          <span className="tag">React</span>
          <span className="tag">Git & GitHub</span>
          <span className="tag">SQL</span>
        </div>
      </section>

      <section className="cv-section">
        <h2>Certyfikaty i realizacje</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={inf03Img} alt="Kwalifikacja INF.03" />
            <div className="project-body">
              <h4>Kwalifikacja INF.03</h4>
              <p>Tworzenie i administrowanie stronami i bazami danych.</p>
            </div>
          </div>
          <div className="project-card">
            <img src={inf04Img} alt="Kwalifikacja INF.04" />
            <div className="project-body">
              <h4>Kwalifikacja INF.04</h4>
              <p>Projektowanie, programowanie i testowanie aplikacji.</p>
            </div>
          </div>
          <div className="project-card">
            <img src={codingImg} alt="Kodowanie" />
            <div className="project-body">
              <h4>Realizacja projektów</h4>
              <p>Praktyczne kodowanie i wdrażanie rozwiązań webowych.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;