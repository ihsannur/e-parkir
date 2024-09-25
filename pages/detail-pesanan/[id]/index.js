import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Link from "next/link";
import { FaChevronLeft, FaWhatsapp } from "react-icons/fa";
import moment from "moment";
import { currencyFormatter } from "../../../utils/format";
import ModalShowQr from "../../../components/Modal/ModalShowQr";

const index = () => {
  const [dataDetail, setDataDetail] = useState({});
  const [modalShowQr, setModalShowQr] = useState(false);

  const masuk = `${moment(dataDetail?.tanggal).format("YYYY-MM-DD")}T${moment(
    dataDetail?.jam_masuk
  ).format("HH:mm:ss")}.000+07:00`;
  const keluar = `${moment(dataDetail?.tanggal).format("YYYY-MM-DD")}T${moment(
    dataDetail?.jam_keluar
  ).format("HH:mm:ss")}.000+07:00`;

  const durasi = moment(keluar).diff(moment(masuk), "hours");

  useEffect(() => {
    localStorage.getItem("submit") == null
      ? ""
      : setDataDetail(JSON.parse(localStorage.getItem("submit")));
  }, []);

  return (
    <Layout isIndex>
      <div
        className="container"
        style={{ marginTop: "105px", marginBottom: "105px" }}
      >
        <div className="row justify-content-center mb-5 mx-4">
          <div
            className="col-md-10 bg-primary-main "
            style={{ borderRadius: "16px" }}
          >
            <div className="p-4">
              <div className="text-center">
                <h1 className="fw-bold fst-italic text-white mb-5">
                  Bukti Pemesanan
                </h1>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 mb-4">
                      <div className="d-flex align-items-center w-100 position-relative">
                        <h3 className="text-white fw-bold fst-italice mb-0 ms-2">
                          Lokasi Parkir
                        </h3>
                      </div>
                    </div>
                    <div className="col-12 mt-0">
                      <label class="form-label text-white">Nama Tempat</label>
                      <p className="mb-0 fs-lg">
                        {dataDetail?.nama_tempat || "-"}
                      </p>
                    </div>
                    <div className="col-12 mt-4">
                      <label class="form-label text-white">
                        Posisi Tempat Parkir
                      </label>
                      <p className="mb-0 fs-lg">
                        {" "}
                        {dataDetail?.nama_lokasi || "-"}
                      </p>
                      <hr
                        className="m-0 w-100 mt-5 bg-white"
                        style={{ border: "2px solid white" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="d-flex align-items-center w-100 position-relative">
                        <h3 className="text-white fw-bold fst-italice mb-0 ms-2">
                          Detail Pesanan
                        </h3>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-itmes-center">
                      <div className="col-md-6 col-5">
                        <label className="form-label">Nama</label>
                      </div>
                      <div className="col-md-6 col-5">
                        <p className="mb-0 fs-lg text-end">
                          {dataDetail?.nama || "-"}
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr
                        className="m-0 w-100 bg-white"
                        style={{ border: "2px solid white" }}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-itmes-center">
                      <div className="col-md-6 col-5">
                        <label className="form-label">Nomor Kendaraan</label>
                      </div>
                      <div className="col-md-6 col-5">
                        <p className="mb-0 fs-lg text-end">
                          {dataDetail?.tipe || "-"}
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr
                        className="m-0 w-100 bg-white"
                        style={{ border: "2px solid white" }}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-itmes-center">
                      <div className="col-md-6 col-5">
                        <label className="form-label">Nomor Kendaraan</label>
                      </div>
                      <div className="col-md-6 col-5">
                        <p className="mb-0 fs-lg text-end">
                          {dataDetail?.nomor_kendaraan || "-"}
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr
                        className="m-0 w-100 bg-white"
                        style={{ border: "2px solid white" }}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-itmes-center">
                      <div className="col-md-6 col-5">
                        <label className="form-label">Tanggal</label>
                      </div>
                      <div className="col-md-6 col-5">
                        <p className="mb-0 fs-lg text-end">
                          {" "}
                          {moment(dataDetail?.tanggal).format("DD MMMM YYYY") ||
                            "--_--"}
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr
                        className="m-0 w-100 bg-white"
                        style={{ border: "2px solid white" }}
                      />
                    </div>

                    <div className="d-flex justify-content-between align-itmes-center">
                      <div className="col-md-6 col-5">
                        <label className="form-label">Jam Masuk</label>
                      </div>
                      <div className="col-md-6 col-5">
                        <p className="mb-0 fs-lg text-end">
                          {moment(dataDetail?.jam_masuk).format("HH:mm") ||
                            "--_--"}
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr
                        className="m-0 w-100 bg-white"
                        style={{ border: "2px solid white" }}
                      />
                    </div>

                    <div className="d-flex justify-content-between align-itmes-center">
                      <div className="col-md-6 col-5">
                        <label className="form-label">Jam Keluar</label>
                      </div>
                      <div className="col-md-6 col-5">
                        <p className="mb-0 fs-lg text-end">
                          {moment(dataDetail?.jam_keluar).format("HH:mm") ||
                            "--_--"}
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr
                        className="m-0 w-100 bg-white"
                        style={{ border: "2px solid white" }}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-itmes-center">
                      <div className="col-md-6 col-5">
                        <label className="form-label">Durasi Parkir</label>
                      </div>
                      <div className="col-md-6 col-5">
                        <p className="mb-0 fs-lg text-end">
                          {moment(keluar).diff(moment(masuk), "hours")} Jam
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr
                        className="m-0 w-100 bg-white"
                        style={{ border: "2px solid white" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="row g-4">
                    <div className="d-flex justify-content-between align-itmes-center">
                      <div className="col-md-6 col-5">
                        <label className="form-label fs-20 fw-bold">
                          Total
                        </label>
                      </div>
                      <div className="col-md-6 col-5">
                        <p className="mb-0 fs-lg text-end fs-20 fw-bold">
                          {dataDetail?.tipe ==
                          "Sedan/Jeep/Pick Up (Kendaraan Kecil) - Rp. 5.000"
                            ? currencyFormatter(5000 * durasi)
                            : currencyFormatter(7000 * durasi)}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr
                        className="m-0 w-100 bg-white"
                        style={{ border: "2px solid white" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <a
                    onClick={() => setModalShowQr(true)}
                    target="_blank"
                    className="btn btn-reverse-primary fs-5 w-100"
                  >
                    Tampilkan QR Code Parkir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalShowQr modalShowQr={modalShowQr} setModalShowQr={setModalShowQr} />
    </Layout>
  );
};

export default index;
