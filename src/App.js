import "./App.css";
import BlogsList from "./components/BlogsList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h2>Online Blog Portal Using Redux</h2>
      </div>
      <BlogsList />
      <Footer />
    </div>
  );
}

export default App;
