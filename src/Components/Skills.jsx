export default function AboutMe() {
  return (
    <section className="skills-section fade-in">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        <div className="skills-card">
          <h4>Programming</h4>
          <p>Java, SQL, JavaScript, Python (Basic)</p>
        </div>

        <div className="skills-card">
          <h4>Backend</h4>
          <p>
            Spring, Spring Boot, Spring MVC, Spring Data JPA, Spring Security(JWT),Spring Cloud Config ,Spring Microservices
            REST APIs
          </p>
        </div>

        <div className="skills-card">
          <h4>Databases</h4>
          <p>MySQL, Oracle</p>
        </div>

        <div className="skills-card">
          <h4>Web</h4>
          <p>Thymeleaf</p>
        </div>

        <div className="skills-card">
          <h4>Core Concepts</h4>
          <p>OOPS, Data Structures, DBMS, Microservices</p>
        </div>

        <div className="skills-card">
          <h4>Tools</h4>
          <p>Git, GitHub, Maven, Postman, IntelliJ IDEA, Eclipse, VS Code</p>
        </div>
      </div>
    </section>
  );
}
