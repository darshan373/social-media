import { createContext } from "react";
import { useState } from "react";

const Postlist=createContext({});

const PostlistProvider=({children})=>{
    return <Postlist.Provider>
        {children}
    </Postlist.Provider>
}
export default PostlistProvider;