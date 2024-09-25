/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use-client";
import { Drawer } from "antd";
import { FaTimes } from "react-icons/fa";
import SuSidebarMobile from "./SuSideBarMobile";
import { useEffect, useState } from "react";
const SideBarMobile = ({
  onClose,
  visible,
  handleOnClose,
  id,
  SuMenu,
  user,
}) => {
  const [menuAktif, setMenuAktif] = useState("/");

  useEffect(() => {
    setMenuAktif(window.location.pathname);
  }, [menuAktif]);

  return (
    <div className="scroll">
      <Drawer
        className="sidebar-super-admin-collapse"
        title={
          <div className="d-flex justify-content-between align-items-center w-100">
            <img
              src="/img/logo.png"
              alt="logo-satu-data"
              onClick={handleOnClose}
              height="24px"
            />
            <a
              className="close d-flex align-items-center justify-content-center fw-bold fs-18"
              onClick={handleOnClose}
            >
              <FaTimes size={28} />
            </a>
          </div>
        }
        placement="left"
        onClose={onClose}
        visible={visible}
        style={{ zIndex: "2000" }}
      >
        <div className="p-4 h-100 border-top1">
          <SuSidebarMobile SuMenu={SuMenu} id={id} user={user} />
        </div>
      </Drawer>
    </div>
  );
};

export default SideBarMobile;
