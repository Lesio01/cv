import './App.css';

function App() {
  return (
    <div className="container">
      <div className="profile-section">
        <img 
          src="https://picsum.photos/200/200?random=10" 
          alt="Moje zdjęcie" 
          className="profile-img" 
        />
        <div className="exam-info">
          <h2>Kwalifikacje zawodowe:</h2>
          <p>Zdałem egzamin <strong>INF.03</strong></p>
          <p>Zdałem egzamin <strong>INF.04</strong></p>
        </div>
      </div>

      <div className="gallery-section">
        <h3>Galeria zdjęć</h3>
        <div className="gallery-grid">
          <img src="https://picsum.photos/400/250?random=1" alt="Projekt 1" />
          <img src="https://picsum.photos/400/250?random=2" alt="Projekt 2" />
          <img src="https://picsum.photos/400/250?random=3" alt="Projekt 3" />
        </div>
      </div>
    </div>
  );
}

export default App;