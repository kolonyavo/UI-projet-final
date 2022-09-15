export default function Navbar(props) {
  const { toggleSidebarClass } = props;
  return (
    <nav className="navbar bg-info sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cours Particuliers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cours Particuliers</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mx-5">
          <li className="nav-item py-3 fs-3">
            <a className="nav-link active" aria-current="page" href="/admin">Calendar</a>
          </li>
          <li className="nav-item dropdown py-3 fs-3">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Adhérents
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/adherent">Liste des adhérents</a></li>
              <li><a className="dropdown-item" href="/adherent/add">Modifier les adhérents</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown py-3 fs-3 fs-3">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Lieux
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/place">Liste des lieux</a></li>
              <li><a className="dropdown-item" href="/place/add">Modifier les lieux</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
}
