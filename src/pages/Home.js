import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      <section className="hero-section">
        <h1>Library Management System</h1>

        <p>
          Welcome to the Library Management System. 
        </p>

        <div className="hero-buttons">
          <Link to="/users" className="btn">
            Explore Authors
          </Link>

          <Link to="/about" className="btn secondary-btn">
            About Library
          </Link>
        </div>
      </section>

      <section className="features-section">

        <div className="feature-card">
          <h3>Author Directory</h3>
          <p>
            Browse author profiles and explore information about famous
            writers and contributors.
          </p>
        </div>

        <div className="feature-card">
          <h3>Easy Navigation</h3>
          <p>
            Navigate smoothly between pages using React Router links and
            dynamic routes.
          </p>
        </div>

        <div className="feature-card">
          <h3>Author Profiles</h3>
          <p>
            Access detailed author information using URL parameters and
            dynamic routing.
          </p>
        </div>

      </section>

      <section className="library-info">
        <h2>Why Choose Our Library?</h2>

        <p>
          Our Library Management System provides an organized platform for
          managing author information and library resources. 
        </p>

        <p>
          This project is designed for educational purposes and demonstrates
          how React Router is used in real-world web applications.
        </p>
      </section>

    </div>
  );
}
export default Home;