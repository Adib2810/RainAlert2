import "./scss/default.scss";
import "./scss/default.css";
import Header from "./js/header"
import Footer from "./js/footer"
import Main from "./js/main"
const app = document.querySelector('#app')

let contentHome = "";

contentHome += Header();
contentHome += Footer();
contentHome += Main();

app.innerHTML = contentHome;



