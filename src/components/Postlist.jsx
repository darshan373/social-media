import { useContext, useState } from "react";
import Post from "./Post";
import { Postlistapi } from "../store/post-list-store";
import Welcome from "./Welcome";
import { useEffect } from "react";
import Loader from "./Loader";
const Postlist=() =>{
    const { postlist,addinitialPost}=useContext( Postlistapi);
    const [fetching,setfetching]=useState(false);
  

  
  useEffect(()=>{
    setfetching(true);
    fetch("https://dummyjson.com/posts")
    .then(res => res.json())
    .then((data) => {addinitialPost(data.posts);
    setfetching(false);});

    return ()=>{
       
    };
  },[]);
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