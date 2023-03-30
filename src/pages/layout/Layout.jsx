import Header from "../../components/header/Header";
import KazaRoutes from "../../routes/Routes";
import Footer from "../../components/footer/Footer";
import "./layout.css";

export default function Layout() {
  return (
    <div className="screen">
      <div className="main">
        <Header />
        <KazaRoutes />
      </div>
      <Footer />
    </div>
  );
}
