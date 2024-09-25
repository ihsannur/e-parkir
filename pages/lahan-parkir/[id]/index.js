import React, { useState } from "react";
import Layout from "../../../components/Layout";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import ModalPesanan from "../../../components/Modal/ModalPesanan";
import { useEffect } from "react";
import Swal from "sweetalert2";

const index = ({ id }) => {
  const [modalPesanan, setModalPesanan] = useState(false);
  const listTipe = [
    {
      id: 1,
      name: "Sedan/Jeep/Pick Up (Kendaraan Kecil) - Rp. 5.000",
    },
    {
      id: 1,
      name: "Bus dan Truk (Kendaraan Besar) Rp. 7.000",
    },
  ];
  const listLocationAeon = [
    {
      id: 1,
      name: "B1 - 01",
    },
    {
      id: 1,
      name: "B1 - 02",
    },
    {
      id: 1,
      name: "B1 - 03",
    },
    {
      id: 1,
      name: "B1 - 04",
    },
    {
      id: 1,
      name: "B1 - 05",
    },
  ];

  const listLocationCp = [
    {
      id: 1,
      name: "D1 - 01",
    },
    {
      id: 1,
      name: "D1 - 02",
    },
    {
      id: 1,
      name: "D1 - 03",
    },
    {
      id: 1,
      name: "D1 - 04",
    },
    {
      id: 1,
      name: "D1 - 05",
    },
  ];

  const listLocationSency = [
    {
      id: 1,
      name: "C1 - 01",
    },
    {
      id: 1,
      name: "C1 - 02",
    },
    {
      id: 1,
      name: "C1 - 03",
    },
    {
      id: 1,
      name: "C1 - 04",
    },
    {
      id: 1,
      name: "C1 - 05",
    },
  ];
  const listLocationSpark = [
    {
      id: 1,
      name: "A1 - 01",
    },
    {
      id: 1,
      name: "A1 - 02",
    },
    {
      id: 1,
      name: "A1 - 03",
    },
    {
      id: 1,
      name: "A1 - 04",
    },
    {
      id: 1,
      name: "A1 - 05",
    },
  ];

  return (
    <Layout isIndex>
      <div
        className="container"
        style={{ marginTop: "105px", marginBottom: "105px" }}
      >
        <div className="mb-4">
          <Link href={"/"}>
            <div
              className="d-flex align-items-center text-primary-main fw-bold "
              style={{ cursor: "pointer" }}
            >
              <FaChevronLeft className="me-2" />
              <div>Kembali</div>
            </div>
          </Link>
        </div>
        <div className="row">
          <div className="col-md-3 d-flex justify-content-md-start justify-content-center align-items-center mb-md-0 mb-4">
            <Image
              className="img-fit-cover"
              src={
                id == 1
                  ? "/assets/aeon-mall-jgc.jpg"
                  : id == 2
                  ? "/assets/cp-mall.jpg"
                  : id == 3
                  ? "/assets/sency-mall.jpg"
                  : "/assets/spark-mall.jpg"
              }
              alt={"mall"}
              style={{ borderRadius: "10px" }}
              width={300}
              height={300}
            />
          </div>
          <div className="col-md-9 align-items-center">
            <h4 className="text-primary-main fw-bold mb-4 text-center text-md-start">
              {id == 1
                ? "AEON MALL JGC"
                : id == 2
                ? "Central Park"
                : id == 3
                ? "Senayan City Mall"
                : "Senayan Park Mall"}
            </h4>
            <div className="d-flex justify-content-between align-itmes-center">
              <div className="col-md-6 col-5">
                <div className="fw-bold fs-16">Alamat</div>
              </div>
              <div className="col-md-6 col-5">
                <div className="fw-bold fs-16 text-end clamp-2">
                  {id == 1
                    ? " Jl. Jkt Garden City Boulevard No.1, RT.8/RW.6, Cakung Tim., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910"
                    : id == 2
                    ? "Letjen S. Parman St No.Kav. 28, North Tanjung Duren, Grogol petamburan, West Jakarta City, Jakarta 11470"
                    : id == 3
                    ? "Jl. Asia Afrika No.Lot 19, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270"
                    : "Jl. Gerbang Pemuda No.3, Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10270"}
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-itmes-center">
              <div className="col-md-6 col-5">
                <div className="fw-bold fs-16">Waktu</div>
              </div>
              <div className="col-md-6 col-5">
                <div className="fw-bold fs-16 text-end clamp-2">
                  {id == 1
                    ? "10:00 - 22:00"
                    : id == 2
                    ? "09:00 - 22:00"
                    : id == 3
                    ? "09:00 - 22:00"
                    : "10:00 - 21:00"}
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-itmes-center">
              <div className="col-md-6 col-5">
                <div className="fw-bold fs-16">Kuota Parkir</div>
              </div>
              <div className="col-md-6 col-5">
                <div className="fw-bold fs-16 text-end clamp-2">
                  {id == 1 ? "300" : id == 2 ? "150" : id == 3 ? "50" : "10"}{" "}
                  tersedia
                </div>
              </div>
            </div>
            <hr />
            <div
              className=" d-flex align-items-md-start align-items-center justify-content-md-start justify-content-center"
              onClick={() => setModalPesanan(true)}
            >
              <div className="btn btn-primary fs-5" target="_blank">
                Pesan
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalPesanan
        modalPesanan={modalPesanan}
        setModalPesanan={setModalPesanan}
        listLokasi={
          id == 1
            ? listLocationAeon
            : id == 2
            ? listLocationCp
            : id == 3
            ? listLocationSency
            : listLocationSpark
        }
        listTipe={listTipe}
        id={id}
      />
    </Layout>
  );
};

export async function getServerSideProps({ params: { id } }) {
  return {
    props: {
      id: id,
    }, // will be passed to the page component as props
  };
}

export default index;
