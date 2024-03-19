import "./header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <span className="home">Home</span>
        <span>page</span>
      </div>
      <nav className="nav">
        <div>header</div>
        <div>slides</div>
        <div>banner</div>
        <div>contents</div>
        <div>footer</div>
      </nav>
      <div className="button">login</div>
    </header>
  );
}

export default Header;
