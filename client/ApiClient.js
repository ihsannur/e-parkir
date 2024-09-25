import { Axios } from "./Axios";
import { camelizeKeys, decamelizeKeys } from "humps";

export const API_URL = "https://pkss-server.smarteschool.net";
export const DOWNLOAD_URL = "https://storage.ptpkss.com";
export const EXPORT_URL = "https://pkss-server.temancoding.my.id";

const client = (
  host,
  endpoint,
  { body, method, headers, params, responseType } = {}
) => {
  headers = {
    ...headers,
    "content-type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const config = {
    url: `${
      host == "download"
        ? DOWNLOAD_URL
        : host == "data"
        ? API_URL
        : host == "export"
        ? EXPORT_URL
        : ""
    }/${endpoint}`,
    headers: {
      ...headers,
    },
    responseType: "json",
    method: method || "GET",
  };

  if (params) {
    config.params = decamelizeKeys(params);
  }

  if (body) {
    config.data = decamelizeKeys(body);
  }

  if (responseType) {
    config.responseType = responseType;
  }

  const onSuccess = (res) => {
    let data = res?.data || null;

    if (res.headers["content-type"].split(";")[0] !== "application/json") {
      return {
        isSuccess: true,
        error: false,
        data,
        fileName: res.headers["content-disposition"].split("filename=")[1],
        status: res?.status,
      };
    }

    data = camelizeKeys(data);
    return {
      isSuccess: true,
      error: false,
      data,
      status: res?.status,
    };
  };

  const onError = (err) => {
    let error = err?.response?.data;
    error = camelizeKeys(error);

    return {
      isSuccess: false,
      data: err?.data,
      error,
      status: err?.response?.status,
    };
  };

  return Axios(config).then(onSuccess).catch(onError);
};

export default client;
