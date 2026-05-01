import "../styles/homePage.css";
import Header from "../components/header";
import LawVide from "../assets/media/lawVideo.mp4";
import law from "../assets/lawB.jpg";
import SearchIcon from "../assets/icons/search.svg?react";
import AdvisoryIcon from "../assets/icons/advisory.svg?react";
import PropertyIcon from "../assets/icons/property.svg?react";
import ConsultancyIcon from "../assets/icons/consultancy.svg?react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import YouTubeCarousel from "../components/YoutubeCarousel";
import Article from "../components/Article";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="home-page" aria-label="home page">
      <Header />
      <section className="hero-section" aria-label="hero section">
        <div
          className="hero-section-content-container"
          aria-label="hero section contact container"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="hero-video"
            aria-label="hero video"
          >
            <source src={LawVide} type="video/mp4" />
          </video>

          <div className="hero-text-content" aria-label="hero-text-content">
            <h1>Trusted Advisors in Property and Land Matters</h1>
            <h1>
              Providing trusted guidance in conveyancing, land transactions, and
              property investment.
            </h1>
            <button>TALK TO A LAWYER</button>
          </div>
        </div>
      </section>

      <section className="about-us-home" aria-label="about us home">
        <h3>Jubail Holdings Is Your Trusted Legal Partner In Real Estate.</h3>
        <p>
          Jubail Holdings is a legal and real estate consultancy firm based in
          Kenya. We specialise in providing comprehensive legal advice on
          conveyancing, land transactions, property law, and real estate
          investments. We serve both local and international clients, offering
          practical, reliable guidance across all property-related matters. Our
          team comprises experienced professionals with strong expertise in
          Kenyan land law and real estate transactions.
        </p>
        <button>About Us</button>
      </section>

      <section className="practice-areas" aria-label="practice areas">
        <div
          className="practice-areas-container"
          aria-label="practice areas container"
        >
          <img src={law} className="practice-img" aria-label="practice img" />

          <div
            className="practice-areas-content"
            aria-label="practice areas content"
          >
            <h1 className="lowercase">Practice areas</h1>
            <h1 className="styled">How We Can Help.</h1>

            <div
              className="practice-areas-individuals"
              aria-label="indivual practice areas"
            >
              <PropertyIcon className="icon" />
              <h3>Property Advisory</h3>
              <p>
                We provide strategic guidance to clients seeking to navigate the
                real estate market with confidence.
              </p>
              <ul>
                <li>Market analysis and insights</li>
                <li>Investment advisory</li>
                <li>Portfolio structuring</li>
              </ul>
            </div>

            <div
              className="practice-areas-individuals"
              aria-label="indivual practice areas"
            >
              <AdvisoryIcon className="icon" />
              <h3>Real Estate Investment</h3>
              <p>
                We support clients in identifying and executing high-value
                investment opportunities.
              </p>
              <ul>
                <li>Property acquisition strategy</li>
                <li>Opportunity identification</li>
                <li>Due diligence support</li>
              </ul>
            </div>

            <div
              className="practice-areas-individuals"
              aria-label="indivual practice areas"
            >
              <ConsultancyIcon className="icon" />
              <h3>Property Consultancy</h3>
              <p>
                We deliver expert insights to enhance decision-making and reduce
                risk.
              </p>
              <ul>
                <li>Property valuation insights</li>
                <li>Development advisory</li>
                <li>Risk assessment and mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="media" aria-label="media section">
        <h2>Media Section</h2>
        <div className="line"></div>
        <h4>
          Jubail Holdings Real Estate & Property Consultancy creates informative
          video responses to client inquiries received through our website and
          social media platforms, sharing them on our official YouTube channel
          to provide clear, accessible legal and property guidance.
        </h4>
        <button>Watch our Media</button>

        <YouTubeCarousel />
      </section>

      <section className="recent-articles" aria-label="recent articles section">
        <h2>Recent Articles</h2>
        <div className="line"></div>
        <h4>
          Jubail Holdings Real Estate & Property Consultancy publishes
          insightful articles addressing key legal and property matters,
          offering clients clear, practical guidance on real estate
          transactions, land issues, and investment opportunities.
        </h4>
        <div className="articles-preview" aria-label="article-preview">
          <Article />
          <Article />
          <Article />
        </div>
        <button>View all our Articles</button>
      </section>
      <Footer />
    </main>
  );
}
