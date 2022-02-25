import qs from "qs";
import axios from "axios";

const CLIENT_ID = "4cbf12c50780b3f";
const ROOT_URL = "https://api.imgur.com";

const login = () => {
  const queryString = {
    client_id: CLIENT_ID,
    response_type: "token",
  };

  window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
};

const fetchImages = (token) => {
  return axios.get(`${ROOT_URL}/3/account/me/images`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const uploadImages = async (images, token) => {
  const promises = Array.from(images).map((image) => {
    const formData = new FormData();
    formData.append("image", image);

    return axios.post(`${ROOT_URL}/3/upload`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });

  return Promise.all(promises);
};

export default {
  login,
  fetchImages,
  uploadImages,
};
