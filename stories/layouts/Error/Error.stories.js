import Error404 from "./Error404.html";
import Error500 from "./Error500.html";
import Footer from "../Footer/Footer.html";

export default {
  title: "layouts/Error",
  tags: ["autodocs"],
};

export const error404 = () => Error404 + Footer;
export const error500 = () => Error500 + Footer;
