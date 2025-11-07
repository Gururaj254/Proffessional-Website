export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-images">
          <img src="images/image5.jpg" alt="Footer 1" />
          <img src="images/image6.jpg" alt="Footer 2" />
        </div>

        <p className="footer-text">
          © {new Date().getFullYear()} Gururaj Dharmashetti | Java Full Stack Developer
        </p>
      </footer>
    </>
  );
}
