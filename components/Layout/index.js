import Link from "next/link";
import { FaChevronUp, FaInstagram, FaTiktok } from "react-icons/fa";
import Header from "../Header/index";

const Layout = ({ children, isIndex }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="page-wrapper">
      <button
        className="scroll-to-top-button d-flex align-items-center justify-content-center"
        onClick={handleScrollToTop}
        title="Scroll to Top"
        style={{
          padding: "12px",
          background: "#FF6600",
          boxShadow: "0px 5px 15px rgba(6, 17, 33, 0.07)",
          borderRadius: " 8px",
          border: "none",
        }}
      >
        <FaChevronUp color="#f0f0f0" />
      </button>
      <Header isIndex={isIndex} />

      {!isIndex ? (
        <section
          className="banner position-absolute vh-100"
          style={{
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        ></section>
      ) : (
        ""
      )}

      <main
        style={{
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <div className="position-relative">{children}</div>
      </main>
      <footer id="footer" class="footer">
        <section className="footer-content bg-footer text-secondary bb-card-gs">
          <div className="container p-4 ">
            <div className="row gy-1 d-flex align-items-center ">
              <div className="col-md-9 d-flex mb-md-0 mb-">
                <div className="row d-flex justify-content-center text-center align-items-center me-2">
                  <div className="col-lg-10 col-md-12 col-8 d-flex justify-content-center">
                    <Link href={`/`} className="text-decoration-none">
                      <div className="navbar-brand d-flex align-items-center fs-title">
                        <h4 className=" fw-bold mb-0">E - Parkir</h4>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <Link href={"/"}>
                    <div className="col-md-4 d-flex justify-content-center align-items-center col-6">
                      <h5 className="fw-bold  md-fs-5 mb-0 sm-fs-6  text-white">
                        Beranda
                      </h5>
                    </div>
                  </Link>
                  <Link href={"/#pesan-parkir"}>
                    <div className="col-md-4 d-flex justify-content-center align-items-center col-6">
                      <h5 className="fw-bold  md-fs-5 mb-0 sm-fs-6  text-white">
                        Pesan
                      </h5>
                    </div>
                  </Link>
                  <Link href={"/#tentang"}>
                    <div className="col-md-4 d-flex justify-content-center align-items-center col-6">
                      <h5 className="fw-bold  md-fs-5 mb-0 sm-fs-6  text-white">
                        Tentang
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-end flex-column">
                <div className="col-md-12 d-flex justify-content-end align-items-center">
                  <h5 className="fw-bold  md-fs-5 mb-0 sm-fs-6 me-3  text-white">
                    <FaTiktok />
                  </h5>
                  <h5 className="fw-bold  md-fs-5 mb-0 sm-fs-6  text-white">
                    <FaInstagram />
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="">
          <section className="bg-secondary-main text-white ">
            <div className="container py-3 text-center">
              <small>
                &copy;E - Parkir {new Date().getFullYear()}. Hak Cipta
                Dilindungi oleh undang-undang.
              </small>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
