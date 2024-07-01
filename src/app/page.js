import "./style/welcome.css";
import Link from "next/link";

function WelcomePage() {
  return (
    <section className="welcome__page">
      <div className="welcome__text">
        <span>Enjoy</span>
        <h1>Explore the world with us</h1>
        <br />
        <button>
          <Link href="/home">Enter To Website</Link>
        </button>
      </div>
    </section>
  );
}

export default WelcomePage;
