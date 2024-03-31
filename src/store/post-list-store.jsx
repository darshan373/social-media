import { useCallback, useReducer ,useEffect} from "react";
import { createContext } from "react";
import { useState } from "react";


export const Postlistapi=createContext({
    postlist:[],
    addPost:() => {},
    deletePost:() => {},
   
    fetching: false
});

const postlistReducer=(currpostlist,action)=>{
    let newpostlist=currpostlist;
    if (action.type === "ADD") {
       
        newpostlist=[action.payload.post,...currpostlist]
     
    } else if (action.type === "DELETE") {
        newpostlist=currpostlist.filter((item) => item.id!=action.payload.postid)
        
    }else if (action.type === "ADD-INITIAL"){
        const newpost=action.payload.posts;
newpostlist=[...newpost];

    }
    return newpostlist;

}

const PostlistProvider=({children})=>{
    const [fetching,setfetching]=useState(false);
    const [postlist,dispatchpostlist]=useReducer(postlistReducer,[]);
    const addPost=(post)=>{
       /* const tagarray=tags.split(" ");*/
     /*   console.log(post)*/
        const Itemaction={
            type: "ADD",
            payload:{
post
            }
        }
        dispatchpostlist(Itemaction)
    }
    const addinitialPost=(posts)=>{
        
        
        const Itemaction={
            type: "ADD-INITIAL",
            payload:{
posts
            }
        }
        dispatchpostlist(Itemaction)
    }/*
    const deletePost=(postid)=>{
        const Itemaction={
            type: "DELETE",
            payload:{
                postid
            }
        }
        dispatchpostlist(Itemaction);
        }*/
    const deletePost=useCallback((postid)=>{
        dispatchpostlist({
            type: "DELETE",
            payload:{
                postid
            }
        })
    },[dispatchpostlist])
    useEffect(()=>{
        setfetching(true);
        fetch("https://dummyjson.com/posts")
        .then(res => res.json())
        .then((data) => {addinitialPost(data.posts);
        setfetching(false);});
    
        return ()=>{
           
        };
      },[]);
    return <Postlistapi.Provider value={{postlist,addPost,deletePost,fetching}}>
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
},{
    Id: '5',
    title : "family reunion",
    body: 'having a great time at the family reunion, catching up with everyone',
    reactions: 20,
    userid: "user-family",
    tags:['family','reunion','happy']
},
{
    Id: '6',
    title : "birthday celebration",
    body: 'celebrating my birthday with friends and loved ones, feeling grateful',
    reactions: 30,
    userid: "user-birthday",
    tags:['birthday','celebration','grateful']
},
{
    Id: '7',
    title : "new hobby",
    body: 'started a new hobby, enjoying the learning process',
    reactions: 5,
    userid: "user-hobby",
    tags:['hobby','learning','enjoying']
},
{
    Id: '8',
    title : "volunteering experience",
    body: 'had a rewarding experience volunteering, making a difference in the community',
    reactions: 12,
    userid: "user-volunteer",
    tags:['volunteering','community','rewarding']
},  {
    Id: '9',
    title : "graduation day",
    body: 'finally graduated, a new chapter begins',
    reactions: 25,
    userid: "user-graduate",
    tags:['graduation','newbeginning']
},
{
    Id: '10',
    title : "travel adventure",
    body: 'embarking on a travel adventure, exploring new places',
    reactions: 18,
    userid: "user-travel",
    tags:['travel','adventure','exploring']
}]
export default PostlistProvider;