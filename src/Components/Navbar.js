import react from 'react';


const  Navbar=(props)=>{
    return <>

<nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg ">

  <div className="container-fluid">
    <a className="navbar-brand" href="#">CodeBlend</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Bloglist</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">AboutMe</a>
        </li>
      
      </ul>
    </div>
   
  </div>
  <form className="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
   
      </form>
  <li style={{display:'flex',justifyContent:'flex-end'}}>
       <a className="navbar-brand" href="#">
      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s---0tIF-Gk--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/304901/cb2ca02b-ab81-41d5-a38e-5d76145846f5.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
     
    </a>
       </li>
</nav>

   
       
      <div class="container-fluid">
   
  </div>  

  
    </>

    //https://dev.to/api/articles?username=shubham57396755
}

export default Navbar;