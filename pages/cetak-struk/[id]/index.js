import React, { useEffect } from "react";

const index = () => {
  useEffect(() => {
    setTimeout(function () {
      window.print();
    }, 1500);
  }, []);

  return (
    <>
      <div className="print-page">
        <div
          className=""
          style={{
            minHeight: "100vh",
          }}
        >
          {/* <img
          src="/img/kop-cetak-pembayaran.PNG"
          alt="kop-pembayaran"
          className="w-100 mb-4"
        /> */}
          <div className="text-center mb-5">
            <h5 className="fw-bold text-dark">BERKAS PENDAFTARAN</h5>
            <h5 className="fw-bold text-dark">LOMBA</h5>
            <h5 className="fw-bold text-dark">adaad</h5>
          </div>
          <table className="w-100 mb-4">
            <tr>
              <td
                style={{
                  width: "30%",
                }}
              >
                <span className="text-dark">Nama Sekolah</span>
              </td>
              <td
                style={{
                  width: "3%",
                }}
              >
                <span className="text-dark">:</span>
              </td>
              <td
                style={{
                  width: "67%",
                }}
              >
                <span className="text-dark">adadad</span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "30%",
                }}
              >
                <span className="text-dark">Nama Tim</span>
              </td>
              <td
                style={{
                  width: "3%",
                }}
              >
                <span className="text-dark">:</span>
              </td>
              <td
                style={{
                  width: "67%",
                }}
              >
                <span className="text-dark">aaadad</span>
              </td>
            </tr>
            {/* <tr>
            <td
              style={{
                width: "30%",
              }}
            >
              <span className="text-dark">Jumlah Peserta</span>
            </td>
            <td
              style={{
                width: "3%",
              }}
            >
              <span className="text-dark">:</span>
            </td>
            <td
              style={{
                width: "67%",
              }}
            >
              <span className="text-dark">
                {dataSingle?.tim?.anggota?.length}
              </span>
            </td>
          </tr> */}
          </table>
          <span className="my-4 text-dark">Biodata Pelatih</span>
          <div className="mt-4">
            <table className="w-100 mb-4">
              <tr>
                <td
                  style={{
                    width: "5%",
                    maxWidth: "5%",
                  }}
                  className="ps-3"
                >
                  <span className="text-dark"></span>
                </td>
                <td
                  style={{
                    width: "24%",
                    maxWidth: "24%",
                  }}
                >
                  <span className="text-dark">Nama Lengkap</span>
                </td>
                <td
                  style={{
                    width: "3%",
                    maxWidth: "3%",
                  }}
                >
                  <span className="text-dark">:</span>
                </td>
                <td
                  style={{
                    width: "64%",
                    maxWidth: "64%",
                  }}
                >
                  <span className="text-dark">dadad</span>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "5%",
                    maxWidth: "5%",
                  }}
                  className="ps-3"
                >
                  <span></span>
                </td>
                <td
                  style={{
                    width: "24%",
                    maxWidth: "24%",
                  }}
                >
                  <span className="text-dark">Jabatan</span>
                </td>
                <td
                  style={{
                    width: "3%",
                    maxWidth: "3%",
                  }}
                >
                  <span className="text-dark">:</span>
                </td>
                <td
                  style={{
                    width: "64%",
                    maxWidth: "64%",
                  }}
                >
                  <span className="text-dark">dawdwadwa</span>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "5%",
                    maxWidth: "5%",
                  }}
                  className="ps-3"
                >
                  <span></span>
                </td>
                <td
                  style={{
                    width: "24%",
                    maxWidth: "24%",
                  }}
                >
                  <span className="text-dark">No Telepon</span>
                </td>
                <td
                  style={{
                    width: "3%",
                    maxWidth: "3%",
                  }}
                >
                  <span className="text-dark">:</span>
                </td>
                <td
                  style={{
                    width: "64%",
                    maxWidth: "64%",
                  }}
                >
                  <span className="text-dark"> adawdda</span>
                </td>
                <td
                  style={{
                    width: "64%",
                    maxWidth: "64%",
                  }}
                ></td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "5%",
                    maxWidth: "5%",
                  }}
                  className="ps-3"
                >
                  <span></span>
                </td>
                <td
                  style={{
                    width: "24%",
                    maxWidth: "24%",
                  }}
                >
                  <span className="text-dark">Alamat Email</span>
                </td>
                <td
                  style={{
                    width: "3%",
                    maxWidth: "3%",
                  }}
                >
                  <span className="text-dark">:</span>
                </td>
                <td
                  style={{
                    width: "64%",
                    maxWidth: "64%",
                  }}
                >
                  <span className="text-dark"> adadawd@gmail.com</span>
                </td>
                <td
                  style={{
                    width: "64%",
                    maxWidth: "64%",
                  }}
                ></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
