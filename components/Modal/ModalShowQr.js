import { DatePicker, message, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { FaCalendar, FaClock, FaTimes } from "react-icons/fa";
import SelectShared from "../Shared/SelectShared";
import { useQRCode } from "next-qrcode";
import { useRouter } from "next/router";
import moment from "moment";
import Swal from "sweetalert2";
const ModalShowQr = ({
  setModalShowQr,
  modalShowQr,
  editData,
  listLokasi,
  listTipe,
  id,
}) => {
  const router = useRouter();
  const { Canvas } = useQRCode();
  const [loading, setLoading] = useState(false);

  return (
    <Modal
      style={{ borderRadius: "4px" }}
      closeIcon={<FaTimes size={24} />}
      centered
      visible={modalShowQr}
      onOk={() => {
        handleClickSwal();
      }}
      onCancel={() => setModalShowQr(false)}
      width={250}
      footer={null}
      okText="Simpan"
      cancelText="Batal"
      title={
        <>
          <h5 className="fw-black modal-title text-neutral-100 fs-20">
            QR Code Parkir
          </h5>
        </>
      }
    >
      <Spin spinning={loading}>
        <form action="">
          <div className="mb-4">
            <div
              className="text-center position-relative"
              style={{ marginBottom: "0.5cm" }}
            >
              <div className="position-relative">
                <img
                  src="/assets/border-qr-lokasi.png"
                  className="img-fluid"
                  style={{ width: "4cm" }}
                  alt=""
                />
              </div>
              <div
                className="position-absolute"
                style={{ left: 36.5, top: 10.5 }}
              >
                <Canvas
                  text={`Mall`}
                  options={{
                    errorCorrectionLevel: "XL",
                    margin: 0,
                    scale: 4,
                    width: 130,
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </Spin>
    </Modal>
  );
};

export default ModalShowQr;
