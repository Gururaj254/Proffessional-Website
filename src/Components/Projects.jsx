export default function Projects() {
  return (
    <section className="projects-section fade-in">
      <h2>Projects</h2>

      {/* Ecommerce Food API */}
      <div className="project">
        <h3>
          1. Project Title: <mark> E-Commerce Food Ordering Application</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>Java, Spring Boot, Spring Cloud, Eureka, API Gateway, Feign, MySQL</mark>
        </p>
        <ul>
          <li>Designed and developed RESTful backend APIs using Spring Boot, following MVC and Microservices-based food ordering system with Restaurant, Menu, and Order services. Full service discovery, gateway routing, and end-to-end order management.
.</li>
          <li>Integrated MySQL using Spring Data JPA & Hibernate for scalable backend processing and efficient data persistence.</li>
          <li>Add/View Restaurants
          <li>API routing via Spring Cloud Gateway and Inter-service communication with Feign clients</li>    
</li>
        </ul>
        <div className="project-image">
          <img src="./images/imageEureka.jpg" alt="Ecommerce Food APP" />
        </div>
        <div className="project-image">
          <img src="./images/imagepjt.jpg" alt="Ecommerce Food API Test" />
        </div>
      </div>

      {/* Bank Account API */}
      <div className="project">
        <h3>
          2. Project Title: <mark>Bank Account Application</mark>
        </h3>
        <p>
          <strong>Technologies used:</strong> <mark>Java, Spring Boot,Spring Security(Jwt), MVC, MySQL</mark>
        </p>
        <ul>
          <li>Built RESTful banking APIs supporting account creation, deposits, withdrawals, and balance validation using Spring Boot.</li>
          <li>Implemented business validations, Global exception handling, and integrated ReactJS for smooth backend-to-UI interaction.</li>
        </ul>
        <div className="project-image">
          <img src="./images/bankapitest..jpg" alt="Bank Account API" />
        </div>
      </div>

      {/* Task Matrix */}
      <div className="project">
        <h3>
          3. Project Title: <mark>Task Matrix</mark>
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
    </section>
  );
}
