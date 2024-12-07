import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {

  return (
   <>
<div className="container-fluid">
  <div className="row">
    <div className="p-0 col-md-2">
      <nav className="mb-3 position-fixed top-0 start-0 end-0 d-block d-lg-none navbar navbar-light" style={{zIndex: 1000}}>
  <div className="container-fluid">
  <button aria-controls="offcanvasNavbar-expand-false" type="button" aria-label="Toggle navigation" className="navbar-toggler collapsed"><span className="navbar-toggler-icon"></span></button>
<div id="offcanvasNavbar-expand-false" className="offcanvas offcanvas-start" aria-labelledby="offcanvasNavbarLabel-expand-false">
  <div className="offcanvas-header">
     <div className="offcanvas-title h5" id="offcanvasNavbarLabel-expand-false"></div>
      <button type="button" className="btn-close" aria-label="Close"></button>
  </div>
      <div className="_sidebar_7gfnp_4 bg-white position-relative w-auto px-4 py-5 ">
        <div className="_sidebarImage_7gfnp_15"></div>
        <h1 className="_sidebarUsername_7gfnp_27"><Link to="/">Jackson Ford</Link></h1>
        <p className="_sidebarUserinfo_7gfnp_39"><Link to="/">UI/UX/Designer</Link> in Philippines</p>
          <ul className="_sidebarList_7gfnp_54">
            <li className="_active_7gfnp_89"><Link data-nav-section="/home" to="/home">Home</Link></li>
            <li className=""><Link data-nav-section="about" to="/about">About</Link></li>
            <li className=""><Link data-nav-section="skills" to="/skills">Skills</Link></li>
            <li className=""><Link data-nav-section="experience" to="/experience">Experience</Link></li>
            <li className=""><Link data-nav-section="work" to="/work">Work</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    <div className="_sidebar_7gfnp_4 px-4 py-5 d-none d-lg-block">
      <div className="_sidebarImage_7gfnp_15">
      </div>
         <h1 className="_sidebarUsername_7gfnp_27"><Link to="#">Jackson Ford</Link></h1>
         <p className="_sidebarUserinfo_7gfnp_39"><Link to="#">UI/UX/Designer</Link> in Philippines</p>
          <ul className="_sidebarList_7gfnp_54">
              <li className="_active_7gfnp_89"><Link data-nav-section="/home" to="/home">Home</Link></li>
              <li className=""><Link data-nav-section="about" to="/about">About</Link></li>
              <li className=""><Link data-nav-section="skills" to="/skills">Skills</Link></li>
             <li className=""><Link data-nav-section="experience" to="/experience">Experience</Link></li>
             <li className=""><Link data-nav-section="work" to="/work">Work</Link></li>
          </ul>
        </div>
     </div>
   </div>
 </div>
                                       
    </>    
  )
}
