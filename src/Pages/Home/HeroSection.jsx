export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Maha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">PhD Researcher</span>{" "}
            <br />
            Software Engineer
          </h1>
          <p className="hero--section-description">
            I'm focused on research in AI and data science.
            <br /> Let's explore new possibilities together.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Hero_me.png" alt="Hero Section" />
      </div>
    </section>
  );
}
