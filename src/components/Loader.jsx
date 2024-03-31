import React from 'react';


const Loader = () => {
    return <><div className="loadcontainer"><button className="btn btn-primary loadingbutton" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>
  </button></div></>
};

export default Loader;
