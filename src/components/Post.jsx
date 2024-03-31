import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Postlistapi } from "../store/post-list-store";

const Post=({postlist}) => {
 
    const {deletePost}=useContext(Postlistapi)
    return (<div key={postlist.id} className="card post-card" style={{width: "18rem"}}>
  
    <div className="card-body"> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete onClick={() => {deletePost(postlist.id);}}/>
    
  </span>
      <h5 className="card-title">{postlist.title}  
  </h5>
      <p className="card-text">{postlist.body}</p>
     {
     postlist.tags.map((item)=> <span key={item}className="badge text-bg-primary tags-post">{item}</span>)}
    </div>
    <div className="alert alert-success reactions-post" role="alert">
  This post is liked by {postlist.reactions} people
</div>
  </div>);
}
export default Post;
/* <a href="#" className="btn btn-primary">Go somewhere</a>
<img src="..." className="card-img-top" alt="..."/>*/