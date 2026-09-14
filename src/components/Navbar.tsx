import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header>
      <a href="#top">
        <img src="/favicon.svg" alt="J" className="navbar-logo" />
      </a>

      <nav>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <ThemeToggle />
    </header>
  );
}

export default Navbar;
