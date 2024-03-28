import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Postlist from "./components/Postlist";
import Signup from "./components/Signup";
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
          <Header selectedtab={selectedtab}
          setselectedtab={setselectedtab}></Header>
         
          {selectedtab === "Create Post" &&  <CreatePost></CreatePost>}
          {selectedtab === "Home" && <Postlist></Postlist>}
          {selectedtab === "Login" && <Login selectedtab={selectedtab}
          setselectedtab={setselectedtab}></Login>}
          {selectedtab === "Signup" && <Signup selectedtab={selectedtab}
          setselectedtab={setselectedtab}></Signup>}

          <Footer></Footer>
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
