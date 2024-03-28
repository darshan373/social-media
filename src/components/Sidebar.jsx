const Sidebar=({selectedtab,setselectedtab}) => {
    return <><div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebarcontainer" style={{width:"280px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Contents</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={()=> setselectedtab("Home")}>
        <a href="#" className={`nav-link link-body-emphasis ${selectedtab === "Home" && "active"}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick={()=> setselectedtab("Create Post")}>
        <a href="#" className={`nav-link link-body-emphasis ${selectedtab === "Create Post" && "active"}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </a>
      </li>
      
     
    </ul>
    <hr/>
    <div className="dropdown">
    <div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    More
  </button>
  <div class="dropdown-menu">
  <a class="dropdown-item" href="#">Query</a>
    <a class="dropdown-item" href="#">Support</a>
    <a class="dropdown-item" href="#">FAQ's</a>
  </div>
</div>
      
    </div>
  </div></>
}   


export default Sidebar;

/*<ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>*/