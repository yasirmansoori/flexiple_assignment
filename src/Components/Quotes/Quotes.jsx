import styles from "./quotes.module.css";
import quotes from "./QuoteData";

const Quotes = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className={styles.quote}>
      <blockquote>
        <em>{randomQuote.quote}</em>
        <br />
        <footer className="float-end"> - {randomQuote.author}</footer>
      </blockquote>
    </div>
  );
};

export default Quotes;
