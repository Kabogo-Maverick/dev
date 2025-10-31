import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5 pt-5">
        <h1 className="display-6 mt-5 fw-semibold fst-italic text-dark">
          Welcome to <span className="text-success">MaverickDev</span> 🚀
        </h1>
        <p className="lead text-muted fst-italic">
          Crafting clean code and intelligent solutions.
        </p>
      </div>
    </>
  );
}

export default App;
