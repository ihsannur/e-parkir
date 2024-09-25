import { DatePicker, message, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { FaCalendar, FaClock, FaTimes } from "react-icons/fa";
import SelectShared from "../Shared/SelectShared";
import { useRouter } from "next/router";
import moment from "moment";
import Swal from "sweetalert2";

const initialFormData = {
  nama: "",
  nama_lokasi: "",
  nomor_kendaraan: "",
  tanggal: moment(),
  jam_masuk: "",
  jam_keluar: "",
  nama_tempat: "",
  tipe: "",
};

const ModalPesanan = ({
  setModalPesanan,
  modalPesanan,
  editData,
  listLokasi,
  listTipe,
  id,
}) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e, uploadedFile) => {
    setFormData({
      ...formData,
      [e.target.name]: uploadedFile || e.target.value,
    });
  };

  const handlesubmit = () => {
    localStorage.setItem("submit", JSON.stringify(formData));
    if (formData) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Parkiranmu berhasil dibooking",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    router.push(`/detail-pesanan/${id}`);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      nama_tempat:
        id == 1
          ? "AEON MALL JGC"
          : id == 2
          ? "Central Park"
          : id == 3
          ? "Senayan City Mall"
          : "Senayan Park Mall",
    });
  }, []);

  return (
    <Modal
      style={{ borderRadius: "4px" }}
      closeIcon={<FaTimes size={24} />}
      centered
      visible={modalPesanan}
      onOk={() => {
        handleClickSwal();
      }}
      onCancel={() => setModalPesanan(false)}
      width={700}
      footer={null}
      okText="Simpan"
      cancelText="Batal"
      title={
        <>
          <h5 className="fw-black modal-title text-neutral-100 fs-20">
            Buat Pesanan
          </h5>
        </>
      }
    >
      <Spin spinning={loading}>
        <form action="">
          <div className="mb-4">
            <label className="fw-600 fs-12 text-neutral-100 mb-2">
              Pilih Posisi Tempat Parkir
            </label>
            <div>
              <SelectShared
                required
                isClearable
                placeholder="Pilih posisi tempat parkir"
                options={listLokasi?.map((e) => {
                  return {
                    label: e?.name,
                    value: e?.name,
                  };
                })}
                name={"nama_lokasi"}
                handleChangeSelect={(e, name) => {
                  setFormData({
                    ...formData,
                    nama_lokasi: e?.value,
                  });
                }}
                value={
                  formData?.nama_lokasi == undefined
                    ? ""
                    : formData?.nama_lokasi || ""
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="fw-600 fs-12 text-neutral-100 mb-2">Nama</label>
            <div>
              <input
                id="nama"
                className="form-control input-login fs-12"
                name="nama"
                placeholder="Masukkan nama anda"
                autoFill="off"
                autocomplete="off"
                value={formData?.nama || ""}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="fw-600 fs-12 text-neutral-100 mb-2">
              Pilih Jenis Kendaraan
            </label>
            <div>
              <SelectShared
                required
                isClearable
                placeholder="Pilih jenis kendaraan"
                options={listTipe?.map((e) => {
                  return {
                    label: e?.name,
                    value: e?.name,
                  };
                })}
                name={"tipe"}
                handleChangeSelect={(e, name) => {
                  setFormData({
                    ...formData,
                    tipe: e?.value,
                  });
                }}
                value={formData?.tipe == undefined ? "" : formData?.tipe || ""}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="fw-600 fs-12 text-neutral-100 mb-2">
              Nomor Kendaraan
            </label>
            <div>
              <input
                id="nomor_kendaraan"
                className="form-control input-login fs-12"
                name="nomor_kendaraan"
                placeholder="Masukkan nomor kendaraan anda"
                autoFill="off"
                autocomplete="off"
                value={formData?.nomor_kendaraan || ""}
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="fw-600 fs-12 text-neutral-100 mb-2">
              Pilih Tanggal
            </label>
            <div className="month-dates">
              <DatePicker
                // locale={locale}
                suffixIcon={<FaCalendar color="#b4b7c5" />}
                picker="day"
                className="d-block"
                id="tanggal"
                name="tanggal"
                format={"DD MMMM YYYY"}
                placeholder="Pilih tanggal"
                value={formData?.tanggal ? moment(formData?.tanggal) : ""}
                onChange={(date, dateString) =>
                  handleChangeInput({
                    target: {
                      name: "tanggal",
                      value: dateString,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-6 mb-md-0 mb-4">
              <label className="fw-600 fs-12 text-neutral-100 mb-2">
                Pilih Jam Masuk
              </label>
              <DatePicker
                id="jam_masuk"
                picker="time"
                format={"HH:mm"}
                placeholder="Pilih jam masuk"
                name="jam_masuk"
                className="form-control"
                style={{ borderRadius: "8px" }}
                suffixIcon={<FaClock color="#b4b7c5" />}
                value={formData?.jam_masuk ? moment(formData?.jam_masuk) : ""}
                onChange={(date, dateString) =>
                  handleChangeInput({
                    target: {
                      name: "jam_masuk",
                      value: date,
                    },
                  })
                }
              />
            </div>
            <div className="col-md-6">
              <label className="fw-600 fs-12 text-neutral-100 mb-2">
                Pilih Jam Keluar
              </label>
              <DatePicker
                id="jam_keluar"
                picker="time"
                format={"HH:mm"}
                placeholder="Pilih jam keluar"
                name="jam_keluar"
                className="form-control"
                style={{ borderRadius: "8px" }}
                suffixIcon={<FaClock color="#b4b7c5" />}
                value={formData?.jam_keluar ? moment(formData?.jam_keluar) : ""}
                onChange={(date, dateString) =>
                  handleChangeInput({
                    target: {
                      name: "jam_keluar",
                      value: date,
                    },
                  })
                }
              />
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-end mb-4 mt-5">
            <button
              type="button"
              className="btn btn-outline-secondary me-3"
              onClick={() => setModalPesanan(false)}
            >
              Batal
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handlesubmit}
              // onClick={() => router.push("/detail-pesanan/1")}
            >
              Simpan
            </button>
          </div>
        </form>
      </Spin>
    </Modal>
  );
};

export default ModalPesanan;
