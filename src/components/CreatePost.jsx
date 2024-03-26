import { useContext } from "react";
import { useRef } from "react";
import { Postlistapi } from "../store/post-list-store";

const CreatePost = () => {

    const userid=useRef();
    const title=useRef();
    const caption=useRef();
    const reactions=useRef();
    const tags=useRef();
    const {addPost}=useContext(Postlistapi);
   const  handleaddbutton=(event)=>{
        event.preventDefault();
        const userid1=userid.current.value;
        const title1=title.current.value;
        const caption1=caption.current.value;
        const reactions1=reactions.current.value;
        const tags1=tags.current.value;
        const id=Math.floor(Math.random()*100);
        addPost(id,title1,caption1,reactions1,userid1,tags1);
        userid.current.value="";
        title.current.value="";
        caption.current.value="";
        reactions.current.value="";
        tags.current.value="";

        
    }
  return (
    <form className="createpost" onSubmit={handleaddbutton}>
          <div className="mb-3">
        <label htmlFor="user_id" className="form-label">
         UserName
        </label>
        <input
          type="text"
          ref={userid}
          className="form-control"
          id="user_id"
          placeholder="enter your user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={title}
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="enter the title"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Caption
        </label>
        <input
        ref={caption}
          type="text"
          className="form-control"
          id="body"
          placeholder="enter how you are feeling"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No of reactions
        </label>
        <input
          type="text"
          ref={reactions}
          className="form-control"
          id="reactions"
          aria-describedby="emailHelp"
          placeholder="enter how many people this post reached"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tags}
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
          placeholder="enter the tags with space"
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
