import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="ms-4 d-flex justify-content-between align-items-center me-5">
        <div className="d-flex align-items-center">
          <div className="h-200">
            <img id="logo" src="../logo.png" alt="Logo" />
          </div>
          <div>
            <p className="m-0 mt-3 fs-3"><i className="text-white">Dove il cinema prende vita!</i></p>
          </div>
        </div>
        <div>
          <Link className="text-decoration-none rounded-4 bg-light-blue fs-4 p-3" to={'/'}>
            <span>Torna alla homepage</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
