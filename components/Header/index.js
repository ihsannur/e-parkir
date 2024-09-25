import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ({ isIndex }) => {
  const [activePage, setActivePage] = useState("/");
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const headerMenus = [
    {
      isDropdown: false,
      text: "Beranda",
      url: `/`,
      active: activePage == "/" && scrollPosition < 45,
    },
    {
      isDropdown: false,
      text: "Pesan Parkir",
      url: `/#pesan-parkir`,
      active:
        activePage == "/#pesan-parkir" ||
        (scrollPosition > 500 && scrollPosition < 1000),
    },
    {
      isDropdown: false,
      text: "Tentang",
      url: `/#tentang`,
      active: activePage == "/#tentang" || scrollPosition > 1000,
    },
  ];

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, [activePage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg  fixed-top w-100 py-sm-3 py-2 ${
          !isIndex ? (scrollPosition > 45 ? "active" : "") : "active"
        }`}
      >
        <div className="container">
          <div className="align-items-center">
            <Link href={`/`} className="text-decoration-none">
              <div
                className="navbar-brand d-flex align-items-center fs-title"
                style={{ cursor: "pointer" }}
              >
                <h4 className="text-primary-main fw-bold mb-0">E - Parkir</h4>
              </div>
            </Link>
          </div>
          <div className="d-lg-none d-flex align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              {headerMenus?.map((menu, idx) => {
                return (
                  <li
                    className="nav-item py-lg-1 py-2"
                    key={idx}
                    style={{ paddingLeft: "12px", paddingRight: "12px" }}
                  >
                    <Link href={menu.url}>
                      <div
                        className={`nav-link p-0 fs-lg ${
                          menu.active ? "active" : ""
                        } ${
                          !isIndex
                            ? scrollPosition > 45
                              ? "active-scroll"
                              : ""
                            : "active-scroll"
                        }`}
                      >
                        {menu.text}
                      </div>
                    </Link>
                  </li>
                );
              })}
              {/* <li
                className="nav-item py-lg-1 py-2"
                style={{ paddingLeft: "12px", paddingRight: "12px" }}
              >
                <button className="btn btn-primary-secondary py-2 px-3">
                  Login
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
