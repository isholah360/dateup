import "./navigate.css";

function Navigate() {
  return (
    <div>
      <div className="naviagtion">
        <div className="logo-link">DateUp</div>
        <div className="navigate-list">
          <ul>
            <li>Home</li>
            <li>Abou Us</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>coming Soon</li>
          </ul>
        </div>
        <div className="app-link">
          <button>Get the App</button>
        </div>
      </div>
    </div>
  );
}

export default Navigate;
