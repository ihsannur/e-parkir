/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use-client";
import { GiHamburgerMenu } from "react-icons/gi";
import SuSideBarSuperAdmin from "./SuSideBarSuperAdmin";
import { useEffect, useState } from "react";

const SideBarSuperAdmin = ({ minimize, handleMinimize, user, id, SuMenu }) => {
  const [menuAktif, setMenuAktif] = useState("/");

  useEffect(() => {
    setMenuAktif(window.location.pathname);
  }, [menuAktif]);

  return (
    <div
      className={` sidebar-super-admin fixed-top bg-white text-dark d-lg-block d-none ${
        minimize ? "minimize" : ""
      }`}
    >
      <div
        className={`w-100 bg-gradient-primary ${
          minimize ? "justify-content-center" : "  justify-content-between"
        }  p-4 d-flex align-items-center flex-row-reverse sesgo-hamburger`}
        style={{ height: "75px", transition: ".3s" }}
      >
        <a
          className="d-flex justify-content-end hamburger-icon"
          onClick={handleMinimize}
        >
          <GiHamburgerMenu
            style={{
              height: "30",
              width: "30",
              zIndex: "200",
            }}
          />
        </a>
        {!minimize && (
          <div
            className="d-flex justify-content-center"
            onClick={handleMinimize}
            style={{ cursor: "pointer" }}
          >
            <img
              src="/img/logo.png"
              alt="logo-satu-data"
              style={{
                objectFit: "contain",
                height: "50px",
              }}
              className="img-fluid"
            />
          </div>
        )}
      </div>
      <div
        className="scroll"
        style={{
          overflow: "auto",
          maxHeight: "100%",
          paddingBottom: "70px",
        }}
      >
        <div
          className={`${
            minimize ? "p-0 " : "p-4"
          } d-flex justify-content-center flex-column border-top1 text-neutral-70 fw-700`}
        >
          <SuSideBarSuperAdmin
            SuMenu={SuMenu}
            minimize={minimize}
            id={id}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBarSuperAdmin;
export async function getServerSideProps({ params: { id } }) {
  return {
    props: {
      id: id || null,
    },
  };
}
