export default function Projects() {
  return (
    <section className="projects-section fade-in">
      <h2>Projects</h2>

      {/* Task Matrix */}
      <div className="project">
        <h3>
          1. Project Title: <mark>Task Matrix</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>ReactJS</mark>
        </p>
        <h3>
          <a
            href="https://gururaj254.github.io/TaskMatrix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 Project is Live Here
          </a>
        </h3>
        <ul>
          <li>
            <strong>Task Matrix</strong> is a React-based task management platform for efficient daily task tracking.
          </li>
          <li>Practical exposure to React fundamentals: component lifecycle and state management.</li>
          <li>Showcases clean UI, strong modularity, and optimized performance.</li>
        </ul>
        <div className="project-image">
          <img src="./images/image3.jpg" alt="Task Matrix Project" />
        </div>
      </div>

      {/* Ecommerce Food API */}
      <div className="project">
        <h3>
          2. Project Title: <mark>Ecommerce Food API</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>Java, Spring Boot, Spring Data JPA, MySQL</mark>
        </p>
        <ul>
          <li>Designed and developed RESTful backend APIs using Spring Boot, following MVC and layered architecture with full CRUD operations.</li>
          <li>Integrated MySQL using Spring Data JPA & Hibernate for scalable backend processing and efficient data persistence.</li>
        </ul>
        <div className="project-image">
          <img src="./images/imagepjt2.jpg" alt="Ecommerce Food API" />
        </div>
      </div>

      {/* Bank Account API */}
      <div className="project">
        <h3>
          3. Project Title: <mark>Bank Account API</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>Java, Spring Boot, MVC, Thymeleaf, MySQL</mark>
        </p>
        <ul>
          <li>Built RESTful banking APIs supporting account creation, deposits, withdrawals, and balance validation using Spring Boot.</li>
          <li>Implemented business validations, custom exception handling, and integrated Thymeleaf for smooth backend-to-UI interaction.</li>
        </ul>
        <div className="project-image">
          <img src="./images/imagepjt1.jpg" alt="Bank Account API" />
        </div>
      </div>
    </section>
  );
}
