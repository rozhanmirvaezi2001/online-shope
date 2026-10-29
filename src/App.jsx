import Header from "./components/Header";
import Footer from "./components/Fooder";
import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
