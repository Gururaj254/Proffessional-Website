export default function AboutMe() {
  return (
    <>
      <section className="projects-section fade-in">
        <h2 className="name">Projects</h2>

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
              <strong>Task Matrix</strong> is a React-based task management
              platform designed for efficient and precise tracking of daily
              tasks.
            </li>
            <li>
              Gained practical exposure to React fundamentals, including
              component lifecycle and state management.
            </li>
            <li>
              The project showcases clean UI, strong modularity, and improved
              performance practices.
            </li>
          </ul>

          <div className="project-image fadeSlideIn">
            <img
              src="./images/image3.jpg"
              alt="Task Matrix Project"
            />
          </div>
        </div>
      </section>
    </>
  );
}
