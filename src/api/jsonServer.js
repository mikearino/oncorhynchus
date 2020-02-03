import Axios from "axios";

export default Axios.create({
  //Have to update this every 7 hours.
  baseURL: "http://a81c5ca9.ngrok.io"
});
