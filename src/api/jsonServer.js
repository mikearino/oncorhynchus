import Axios from "axios";

export default Axios.create({
  //Have to update this every 7 hours.
  baseURL: "http://897dac90.ngrok.io"
});
