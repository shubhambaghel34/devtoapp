const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">DevToApp</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="#articles">Articles</a>
          </li>
        </ul>
        <a
          className="navbar-brand"
          href="https://dev.to/shubham57396755"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open DEV.to profile"
        >
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s---0tIF-Gk--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/304901/cb2ca02b-ab81-41d5-a38e-5d76145846f5.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;