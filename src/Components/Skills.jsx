export default function AboutMe() {
  return (
    <>
      <section className="skills-section fade-in">
        <h2 className="name">Technical Skills</h2>
        <div className="skills-category">
          <h4>Web Technologies</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>

        <div className="skills-category">
          <h4>Backend & Database</h4>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>DSA</li>
            <li>SQL</li>
          </ul>
        </div>
      </section>

      <section className="skills-section fade-in-delay">
        <h2>Soft Skills</h2>
        <ul>
          <li>Efficient Communicator</li>
          <li>Team Collaboration</li>
        </ul>
      </section>

      <section className="skills-section fade-in-delay">
        <h2>Development Tools</h2>
        <ul>
          <li>DBMS Tools: MySQL, Oracle</li>
          <li>Version Control: Git, GitHub</li>
        </ul>
      </section>
    </>
  );
}
