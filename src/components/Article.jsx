import "../styles/article.css";

export default function Article() {
  return (
    <div className="article" aria-label="article">
      <div
        className="article-image-container"
        aria-label="article image container"
      >
        <img
          src="https://africafeeds.com/wp-content/uploads/2025/10/igaming-in-SA.jpg"
          alt=""
        />
      </div>
      <div className="article-metadata" aria-label="article metadata">
        <h3 className="author" aria-label="author">
          Mary Ndzikwa
        </h3>
        <p
          className="article-date-published"
          aria-label="article date published"
        >
          02-04-2026
        </p>
      </div>
      <div className="article-content" aria-label="article content">
        <h1>
          Safer Bets or Fewer Bets? Kenya’s iGaming Sector Under the Gambling
          Control Act, 2025
        </h1>
        <p>
          The enactment of the Gambling Control Act, 2025 (the Act) marks a
          decisive legislative intervention, one that seeks not merely
        </p>

        <p>Read more →</p>
      </div>
    </div>
  );
}
