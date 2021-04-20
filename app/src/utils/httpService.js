const { default: axios } = require("axios");

export const post = (url, body) => {
  let headers = {
    "Content-Type": "application/json",
  };
  delete body.headers;
  try {
    return axios.post(url, body, {
      headers,
    });
  } catch (e) {
    return null;
  }
};

function get(url, ip) {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    return axios.get(url, { headers: headers });
  } catch (error) {
    return null;
  }
}
