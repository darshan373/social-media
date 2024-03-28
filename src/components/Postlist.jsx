import { useContext } from "react";
import Post from "./Post";
import { Postlistapi } from "../store/post-list-store";
const Postlist=() =>{
    const { postlist}=useContext( Postlistapi);

return <>
<div className="grid">{ postlist.map((item) => <Post key={item.Id} postlist={item}></Post>)}</div>


</>
}
export default Postlist;