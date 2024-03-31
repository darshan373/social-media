import { useContext, useState } from "react";
import Post from "./Post";
import { Postlistapi } from "../store/post-list-store";
import Welcome from "./Welcome";
import { useEffect } from "react";
import Loader from "./Loader";
const Postlist=() =>{
    const { postlist,fetching}=useContext( Postlistapi);
   
return <>
{fetching && <Loader/>}
{!fetching && postlist.length === 0 && <Welcome></Welcome>}
<div className="grid">{!fetching && postlist.map((item) => <Post key={item.id} postlist={item}></Post>)}</div>


</>
}
export default Postlist;
/*    const controller=new AbortController();
    const signal=controller.signal;
     controller.abort();
     ,{signal}*/