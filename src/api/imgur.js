import qs from "qs";

const CLIENT_ID = "4cbf12c50780b3f";
const ROOT_URL = "https://api.imgur.com";

const login = () => {
  const queryString = {
    client_id: CLIENT_ID,
    response_type: "token",
    state: "APPLICATION_STATE"
  };

  window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
};
export default {
  login,
};
