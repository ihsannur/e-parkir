"use-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

const SuSideBarMobile = ({ SuMenu, minimize, id }) => {
  const [menuAktif, setMenuAktif] = useState("/");

  useEffect(() => {
    setMenuAktif(window.location.pathname);
  }, [menuAktif]);

  return (
    <>
      {SuMenu?.map((data, idx) => {
        if (data?.name == "Anggota") {
          return (
            <>
              <div className="accordion-item mb-2">
                <h2
                  className="accordion-header d-flex justify-content-center"
                  id="headingTwo"
                >
                  <a
                    className={`kehadiran accordion-button collapsed parents-icon d-flex justify-content-center w-100 rounded-1 mb-2 ${
                      data?.active ? "link-sidebar-active" : "link-sidebar"
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <div
                      className={`d-flex ${
                        minimize ? "justify-content-center w-100" : " "
                      } `}
                      style={{
                        padding: "16px",
                      }}
                    >
                      <div
                        className={`d-flex justify-content-center `}
                        style={{
                          width: "16px",
                          height: "auto",
                        }}
                      >
                        <FaUsers />
                      </div>
                    </div>
                    <p
                      className={`fw-600 fs-14 mb-0  ${
                        minimize ? "d-none" : "d-block"
                      }`}
                      style={{
                        color: "inherit",
                      }}
                    >
                      Anggota
                    </p>
                  </a>
                </h2>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse ${
                    menuAktif.startsWith("/anggota") ? "show" : ""
                  }`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-3">
                    <div
                      style={{
                        marginBottom: "14px",
                      }}
                    >
                      <Link href="/anggota/pengurus">
                        <div
                          className={`d-flex gap-2 fs-14 fw-600 ${
                            menuAktif.startsWith("/anggota/pengurus")
                              ? "text-primary-main"
                              : " text-neutral-90"
                          }`}
                        >
                          <span>&#8226;</span>
                          <span>Pengurus</span>
                        </div>
                      </Link>
                    </div>
                    <div
                      style={{
                        marginBottom: "14px",
                      }}
                    >
                      <Link href="/anggota/dpd">
                        <div
                          className={`d-flex gap-2 fs-14 fw-600 ${
                            menuAktif.startsWith("/anggota/dpd")
                              ? "text-primary-main"
                              : " text-neutral-90"
                          }`}
                        >
                          <span>&#8226;</span>
                          <span>DPD</span>
                        </div>
                      </Link>
                    </div>
                    <div
                      style={{
                        marginBottom: "14px",
                      }}
                    >
                      <Link href="/anggota/dpc">
                        <div
                          className={`d-flex gap-2  fs-16 fw-600 ${
                            menuAktif.startsWith("/anggota/dpc")
                              ? "text-primary-main"
                              : " text-neutral-90"
                          }`}
                        >
                          <span>&#8226;</span>
                          <span>DPC</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        } else {
          return (
            <>
              <Link href={data?.link}>
                <div
                  className={`d-flex align-items-center rounded-1 mb-2 ${
                    data?.active ? "link-sidebar-active" : "link-sidebar"
                  }
        ${minimize ? " justify-content-center" : ""}`}
                >
                  <div
                    style={{
                      padding: "16px",
                    }}
                  >
                    <div
                      className={`d-flex justify-content-center `}
                      style={{
                        width: "16px",
                        height: "auto",
                      }}
                    >
                      {data?.icon}
                    </div>
                  </div>
                  <h6
                    className={`fw-600   fs-16 mb-0  ${
                      minimize ? "d-none" : "d-block"
                    }`}
                    style={{
                      color: "inherit",
                    }}
                  >
                    {data?.name}
                  </h6>
                </div>
              </Link>
            </>
          );
        }
      })}
    </>
  );
};

export default SuSideBarMobile;
