export default function Header() {
  return (
    <>
      <header className="header">
        <h2 className="fade-in">Gururaj Dharmashetti</h2>
        <h2 className="name fade-in-delay">Java Full Stack Developer</h2>

        {/* Flying animated image */}
        <img
          src="./images/Guru6.jpg"
          alt="Flying Gururaj"
          className="image"
        />

        {/* Center image */}
        <div className="center-image fade-in">
          <img
            src="./images/Gururaj.jpg"
            alt="Gururaj"
          />
        </div>
      </header>
    </>
  );
}
