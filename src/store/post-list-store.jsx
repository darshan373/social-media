import { useReducer } from "react";
import { createContext } from "react";
import { useState } from "react";


export const Postlistapi=createContext({
    postlist:[],
    addPost:() => {},
    deletePost:() => {}
});

const postlistReducer=(currpostlist,action)=>{
    let newpostlist=currpostlist;
    if (action.type === "ADD") {
     
    } else if (action.type === "DELETE") {
        newpostlist=currpostlist.filter((item) => item.Id!==action.payload.postid)
        
    }
    return newpostlist;

}

const PostlistProvider=({children})=>{
    const [postlist,dispatchpostlist]=useReducer(postlistReducer,DEFAULT_POSTLIST);
    const addPost=()=>{
        const Itemaction={
            type: "ADD",
            payload:{

            }
        }
        dispatchpostlist(Itemaction)
    }
    const deletePost=(postid)=>{
        const Itemaction={
            type: "DELETE",
            payload:{
                postid
            }
        }
        dispatchpostlist(Itemaction);
        }
    return <Postlistapi.Provider value={{postlist,addPost,deletePost}}>
        {children}
    </Postlistapi.Provider>
}

const DEFAULT_POSTLIST=[{
    Id: '1',
    title : "going to udupi",
    body: 'going to udupi to enjoy a weather,hope I may have a great day',
    reactions: 2,
    userid: "user-dkn",
    tags:['vacation','bangalore','enjoying']
},
{
    Id: '2',
    title : "pass the exam",
    body: 'finally passed the exam,next moving towards the important step in my carrier',
    reactions: 15,
    userid: "user-9",
    tags:['pass','bangalore','enjoying']
}]
export default PostlistProvider;