import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Circle, GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Layout from "../components/Layout";

const Home = () => {
  const router = useRouter();
  const dataLokasi = [
    {
      id: 1,
      img: "/assets/aeon-mall-jgc.jpg",
      nama: "Aeon Mall JGC",
      lat: -6.1719749547605485,
      long: 106.95215652559185,
      tersedia: false,
    },
    {
      id: 2,

      img: "/assets/cp-mall.jpg",
      nama: "Central Park",
      lat: -6.176891956688926,
      long: 106.79098952759054,
      tersedia: true,
    },
    {
      id: 3,
      img: "/assets/sency-mall.jpg",
      nama: "Senayan City Mall",
      lat: -6.226971311195168,
      long: 106.79697951216518,
      tersedia: false,
    },
    {
      id: 4,
      img: "/assets/spark-mall.jpg",
      nama: "Senayan Park Mall",
      lat: -6.211790602093977,
      long: 106.80539272782613,
      tersedia: true,
    },
  ];

  const MyMapComponent = withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{
        lat: -6.195375272981385,
        lng: 106.82142568872266,
      }}
    >
      {props.isMarkerShown && (
        <>
          {dataLokasi?.map((d) => {
            return (
              <Marker
                onClick={() => router.push(`/lahan-parkir/${d?.id}`)}
                icon={<FaMapMarkerAlt color="#ff6600" />}
                position={{
                  lat: d?.lat,
                  lng: d?.long,
                }}
              />
            );
          })}
        </>
      )}
      {dataLokasi?.map((d) => {
        return (
          <Circle
            options={{
              fillColor: "#ff6600",
              strokeColor: "#ff6600",
            }}
            center={{
              lat: d?.lat,
              lng: d?.long,
            }}
            onClick={() => router.push(`/lahan-parkir/${d?.id}`)}
            radius={100}
          />
        );
      })}
    </GoogleMap>
  ));

  return (
    <Layout bgPrimaryPressed={true}>
      <section
        className="vh-100"
        style={{
          backgroundImage: "url('/assets/bg-maps.jpeg')",
          backgroundColor: "rgba(17, 17, 17, 0.7)",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(17, 17, 17, 0.7)",
          }}
        >
          <div className="container">
            <div className="row d-flex align-items-center vh-100">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center mt-5"
                data-aos="fade-right"
              >
                <h1
                  className="text-white fw-bold mb-0 text-md-start text-center fs-title-jumbotron"
                  style={{
                    fontStyle: "italic",
                    textTransform: "uppercase",
                  }}
                >
                  Layanan Parkir Online Nomor 1 di Indonesia
                </h1>
                <h3
                  className="mb-4 mt-2 text-md-start text-center text-white fw-bold"
                  style={{ textTransform: "uppercase" }}
                >
                  pesan parkir sekarang, tanpa khawatir tidak mendapatkan lahan
                  parkir
                </h3>
                <div className=" d-flex align-items-md-start align-items-center justify-content-md-start justify-content-center mb-4">
                  <Link href={"/#pesan-parkir"}>
                    <div className="btn btn-primary fs-5" target="_blank">
                      Pesan Sekarang
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center"
                data-aos="fade-left"
              >
                <Image
                  src="/img/e-parkir-illustration.svg"
                  alt="e-parkir illustration"
                  className="d-lg-block d-none"
                  srcset=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="d-lg-flex justify-content-between fitur-keunggulan">
                <div className="d-flex align-items-center">
                  <div
                    className="bg-white d-flex justify-content-center align-items-center me-2 p-2"
                    style={{ borderRadius: "100%" }}
                  >
                    <FaCheck color="#ff6600" size={15} />
                  </div>
                  <p className="fw-bold mb-0">Parkir Cepat, Bebas Macet!</p>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="bg-white d-flex justify-content-center align-items-center me-2 p-2"
                    style={{ borderRadius: "100%" }}
                  >
                    <FaCheck color="#ff6600" size={15} />
                  </div>
                  <p className="fw-bold mb-0">
                    Smart Park, Solusi Parkir Masa Kini!
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="bg-white d-flex justify-content-center align-items-center me-2 p-2"
                    style={{ borderRadius: "100%" }}
                  >
                    <FaCheck color="#ff6600" size={15} />
                  </div>
                  <p className="fw-bold mb-0">
                    Parkir Mudah, Hanya Sekali Sentuh!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="pesan-parkir" style={{ height: "48px" }}></div>
      <section>
        <div className="container p-4 mt-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-10 mb-4">
              <h3
                className="text-primary-main fw-bold mb-5 text-center"
                data-aos="fade-up"
              >
                Yuk Cari Tempat Parkirmu
              </h3>
              <div className="row">
                <div className="col-lg-12 mb-4 ">
                  <div className="d-flex flex-column my-lg-4 py-lg-0 py-4">
                    <div className="dropdown">
                      <div
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-joyride="dropdown-perpustakaan"
                      >
                        <a
                          id="doubleOnClick"
                          className={`fs-6 md-fs-6 fw-bold form-control text-primary-main pointer text-decoration-none d-flex align-items-lg-center mt-lg-1`}
                        >
                          Pilih Lokasimu
                        </a>
                      </div>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {dataLokasi?.map((d, idx) => {
                          return (
                            <li key={idx}>
                              <a
                                className={`dropdown-item  ${
                                  d?.tersedia == "false" && "active"
                                }`}
                                href="#"
                                onClick={() => {
                                  d?.tersedia == false
                                    ? Swal.fire({
                                        position: "center",
                                        icon: "error",
                                        title:
                                          "Lokasi yang kamu pilih sudah penuh, cari lokasi lainnya",
                                        showConfirmButton: false,
                                        timer: 1500,
                                      })
                                    : router.push(`lahan-parkir/${d?.id}`);
                                }}
                              >
                                {d?.nama}{" "}
                                {d?.tersedia == false && (
                                  <span className="fw-bold text-danger">
                                    (tidak tersedia)
                                  </span>
                                )}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center ratio ratio-16x9">
                <MyMapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaoqkOMCgJ0YcjudoqK3PeCZFt_uC0REw"
                  loadingElement={<div style={{ height: "100%" }} />}
                  containerElement={<div className="h-map" />}
                  mapElement={<div style={{ height: "100%" }} />}
                />
              </div>
            </div>
            <div className="row">
              {dataLokasi?.map((d, idx) => {
                return (
                  <div
                    className="col-lg-3 col-md-6 mb-4 mt-md-0 mt-5 d-flex flex-column justify-content-center"
                    data-aos="zoom-in"
                    key={idx}
                  >
                    <Link href={`/lahan-parkir/${d?.id}`}>
                      <div>
                        <Image
                          className="img-fit-cover"
                          src={d?.img}
                          alt={d?.nama}
                          style={{ borderRadius: "16px" }}
                          width={300}
                          height={300}
                        />
                        <h5 className="text-center fw-bold text-primary-main">
                          {d?.nama}
                        </h5>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div id="tentang" style={{ height: "48px" }}></div>
      <section>
        <div className="container p-4">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-10">
              <h3 className="text-primary-main fw-bold mb-5" data-aos="fade-up">
                Tentang Kami
              </h3>
              <p className="text-primary-main fs-16" data-aos="fade-up">
                Aplikasi kami hadir untuk memberikan solusi praktis dalam
                mengelola parkir di kota-kota besar yang seringkali penuh
                tantangan. Dengan platform yang mudah digunakan, pengguna dapat
                memesan tempat parkir secara real-time, memastikan ketersediaan
                spot parkir sebelum tiba di lokasi. Kami berkomitmen untuk
                memberikan pengalaman parkir yang lebih nyaman, aman, dan
                efisien melalui integrasi teknologi terkini, serta mendukung
                pengelola parkir dalam meningkatkan manajemen dan operasional
                mereka. Tujuan kami adalah membantu mengurangi kemacetan dan
                stres dalam mencari tempat parkir, sehingga pengguna dapat fokus
                pada hal-hal yang lebih penting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
