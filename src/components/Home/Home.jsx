import React from 'react'
import { Link } from 'react-router-dom'
import myPhoto1 from '../../assets/images/img_bg_1-PzvG2r05.jpg'
import myPhoto2 from '../../assets/images/img_bg_2-DzCs5o-0.jpg'


export default function Home() {
  return (
<>

<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause={false} style={{ width: `calc(100% - 255px)`, marginLeft:255}}>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000" >
      <img src={myPhoto1} className="d-block w-100 img-slide" alt="..."/>
      <div className="carousel-caption custom-caption heroSection text-lg-start text-center ">
    <h1 className='text-lg-start text-center'> Hi  <br/> Im Jackson</h1>
  <p className='text-lg-start text-center'>100% html5 bootstrap templates Made <br />By <a href="#">Colorlib.com</a></p>
  <button type="button" class="btn btn-transparent">DOWNLOAD CV <i class="fa-solid fa-download"></i></button>
</div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={myPhoto2} className="d-block w-100 img-slide"  alt="..." />
      <div className="carousel-caption custom-caption heroSection text-lg-start text-center">
  <h1>I am <br />a Designer</h1>
  <p class="text-lg-start text-center">100% html5 bootstrap templates Made <br /> By <a href="#">Colorlib.com</a></p>
  <button type="button" class="btn btn-transparent">VIEW PORTFOLIO <i class="fa-solid fa-briefcase"></i></button>
</div>

    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


   </>

    )
    }

