import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";

import Postlist from "./components/Postlist";
import "./App.css";
import { useState } from "react";
import PostlistProvider from "./store/post-list-store";
function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <PostlistProvider>
      {" "}
      <div className="app-container">
        <Sidebar
          selectedtab={selectedtab}
          setselectedtab={setselectedtab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedtab === "Home" ? (
            <Postlist></Postlist>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
