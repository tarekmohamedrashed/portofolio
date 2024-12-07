// import React from 'react'
// import { Link } from 'react-router-dom'
// import myImage1 from '../../assets/images/img-1-C4nS0eD8.jpg'
// import myImage2 from '../../assets/images/img-2-D-4H1m4L.jpg'
// import myImage3 from '../../assets/images/img-3-pR2ZEVY9.jpg'
// import myImage4 from '../../assets/images/img-4-tHccITd-.jpg'
// import myImage5 from '../../assets/images/img-5-lAucr__a.jpg'
// import myImage6 from '../../assets/images/img-6-DFW03AZ3.jpg'


// export default function Work() {
//   return (
//   <>
// <div className="position-relative p-0 containerWidth col-md-10" style={{ marginLeft:250 }}>
//   <div style={{opacity: 1}}>
//     <div id="work" className="container py-5 mt-lg-0 mt-3">
//       <p className="workTitle">MY WORK</p>
//       <h2 className="workHeading">RECENT WORK</h2>
//     {/* <ul className="mb-3 nav nav-tabs" id="controlled-tab-example" role="tablist">
//        <li className="nav-item" role="presentation"><button type="button" id="controlled-tab-example-tab-graphic" role="tab" data-rr-ui-event-key="graphic" aria-controls="controlled-tab-example-tabpane-graphic" aria-selected="true" className="nav-link active">Graphic Design</button></li>
//        <li className="nav-item" role="presentation"><button type="button" id="controlled-tab-example-tab-apps" role="tab" data-rr-ui-event-key="apps" aria-controls="controlled-tab-example-tabpane-apps" aria-selected="false" tabindex="-1" className="nav-link">Apps</button></li>
//        <li className="nav-item" role="presentation"><button type="button" id="controlled-tab-example-tab-software" role="tab" data-rr-ui-event-key="software" aria-controls="controlled-tab-example-tabpane-software" aria-selected="false" tabindex="-1" className="nav-link">Software </button></li>
//     </ul> */}
//       <div className="tab-content">
//          <div role="tabpanel" id="controlled-tab-example-tabpane-graphic" aria-labelledby="controlled-tab-example-tab-graphic" className="fade tab-pane active show">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="project"  >
//               <img src={myImage1} alt="image1" style={{width:'100%', height:'100%' }} />
//                 <div className="desc pt-4">
                  
//                   <div className="con">
                    
//                     <h3><Link to="work.html">Work 02</Link></h3>
//                     <span>Animation</span>
//                     <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//                 <div className="col-md-6">
//                   <div className="project" >
//                   <img src={myImage2} alt="image2" style={{width:'100%', height:'100%' }} />
//                     <div className="desc pt-4">
                    
//                       <div className="con">
//                         <h3><Link to="work.html">Work 02</Link></h3>
//                         <span>Animation</span>
//                         <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                   <div className="col-md-6">
//                     <div className="project">
//                     <img src={myImage3} alt="image3" style={{width:'100%', height:'100%' }} />
//                       <div className="desc pt-4">
//                         <div className="con">
//                             <h3><Link to="work.html">Work 02</Link></h3>
//                            <span>Animation</span>
//                            <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                   <div className="col-md-6">
//                     <div className="project" >
//                     <img src={myImage4} alt="image4" style={{width:'100%', height:'100%' }} />
//                      <div className="desc pt-4">
                     
//                       <div className="con">
//                         <h3><Link to="work.html">Work 02</Link></h3>
//                         <span>Animation</span>
//                         <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//                     </div>
//                  </div>
//              </div>
//          </div>
//     </div>
// </div> 
//  <div role="tabpanel" id="controlled-tab-example-tabpane-apps" aria-labelledby="controlled-tab-example-tab-apps" className="fade tab-pane">
// <div className="row">
//   <div className="col-md-6">
//     <div className="project"  >
//     <img src={myImage5} alt="image5" style={{width:'100%', height:'100%' }} />
//       <div className="desc pt-4">
//         <div className="con">
//           <h3><Link to="work.html">Work 02</Link></h3>
//           <span>Animation</span>
//           <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//         </div>
//       </div>
//     </div>
//   </div>
//     <div className="col-md-6">
//       <div className="project" >
//       <img src={myImage6} alt="image6" style={{width:'100%', height:'100%' }} />
//         <div className="desc pt-4">
//           <div className="con">
//             <h3><Link to="work.html">Work 02</Link></h3>
//             <span>Animation</span>
//             <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//       <div className="col-md-6">
//         <div className="project">
//         <img src={myImage1} alt="image1" style={{width:'100%', height:'100%' }} />

//           <div className="desc pt-4">
//             <div className="con">
//               <h3><Link to="work.html">Work 02</Link></h3>
//               <span>Animation</span>
//               <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//       <div className="col-md-6">
//         <div className="project" >
//         <img src={myImage2} alt="image2" style={{width:'100%', height:'100%' }} />

//           <div className="desc pt-4">
//             <div className="con">
//               <h3><Link to="work.html">Work 02</Link></h3>
//               <span>Animation</span>
//               <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> 
//   <div role="tabpanel" id="controlled-tab-example-tabpane-software" aria-labelledby="controlled-tab-example-tab-software" className="fade tab-pane">
//     <div className="row">
//       <div className="col-md-6">
//         <div className="project" >
//         <img src={myImage3} alt="image3" style={{width:'100%', height:'100%' }} />

//           <div className="desc pt-4">
//             <div className="con">
//               <h3><Link to="work.html">Work 02</Link></h3>
//               <span>Animation</span>
//               <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//            </div>
//           </div>
//          </div>
//         </div>
//           <div className="col-md-6">
//             <div className="project" >
//             <img src={myImage4} alt="image4" style={{width:'100%', height:'100%' }} />

//               <div className="desc pt-4">
//                 <div className="con">
//                   <h3><Link to="work.html">Work 02</Link></h3>
//                   <span>Animation</span>
//                   <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//                </div>
//               </div>
//              </div>
//             </div>
//               <div className="col-md-6">
//                 <div className="project">
//                 <img src={myImage5} alt="image5" style={{width:'100%', height:'100%' }} />

//                   <div className="desc pt-4">
//                     <div className="con">
//                       <h3><Link to="work.html">Work 02</Link></h3>
//                       <span>Animation</span>
//                       <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//                   </div>
//                   </div>
//                 </div>
//                 </div>
//                   <div className="col-md-6">
//                     <div className="project" >
//                     <img src={myImage6} alt="image6" style={{width:'100%', height:'100%' }} />

//                       <div className="desc pt-4">
//                         <div className="con">
//                           <h3><Link to="work.html">Work 02</Link></h3>
//                           <span>Animation</span>
//                           <p className="icon"><span><Link to="#"><i className="fa-solid fa-share-nodes"></i></Link></span><span><Link to="#"><i className="fa-regular fa-eye"></i> 100</Link></span><span><Link to="#"><i className="fa-regular fa-heart"></i> 49</Link></span></p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//             <button type="button" className="showMoreButton btn btn-primary">Show More</button>
//         </div>
//       </div>
//     </div>
//   </>
//   )
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage1 from '../../assets/images/img-1-C4nS0eD8.jpg'
import myImage2 from '../../assets/images/img-2-D-4H1m4L.jpg'
import myImage3 from '../../assets/images/img-3-pR2ZEVY9.jpg'
import myImage4 from '../../assets/images/img-4-tHccITd-.jpg'
import myImage5 from '../../assets/images/img-5-lAucr__a.jpg'
import myImage6 from '../../assets/images/img-6-DFW03AZ3.jpg'
const MyWork = () => {
  const allImages = [
    { src: myImage1, alt: 'image1' },
    { src: myImage2, alt: 'image2' },
    { src: myImage3, alt: 'image3' },
    { src: myImage4, alt: 'image4' },
    { src: myImage5, alt: 'image5' },
    { src: myImage6, alt: 'image6' },
  ];

  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 4)); // عرض أول 4 صور

  const handleShowMore = () => {
    setVisibleImages(allImages); // عرض جميع الصور
  };

  return (
    <div className="position-relative p-0 containerWidth col-md-10" style={{ marginLeft: 250 }}>
      <div style={{ opacity: 1 }}>
        <div id="work" className="container py-5 mt-lg-0 mt-3">
          <p className="workTitle">MY WORK</p>
          <h2 className="workHeading">RECENT WORK</h2>
          <div className="tab-content">
            <div
              role="tabpanel"
              id="controlled-tab-example-tabpane-graphic"
              aria-labelledby="controlled-tab-example-tab-graphic"
              className="fade tab-pane active show"
            >
              <div className="row">
                {visibleImages.map((image, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="project">
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{ width: '100%', height: '100%' }}
                      />
                      <div className="desc pt-4">
                        <div className="con">
                          <h3>
                            <Link to="work.html">Work 02</Link>
                          </h3>
                          <span>Animation</span>
                          <p className="icon">
                            <span>
                              <Link to="#">
                                <i className="fa-solid fa-share-nodes"></i>
                              </Link>
                            </span>
                            <span>
                              <Link to="#">
                                <i className="fa-regular fa-eye"></i> 100
                              </Link>
                            </span>
                            <span>
                              <Link to="#">
                                <i className="fa-regular fa-heart"></i> 49
                              </Link>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {visibleImages.length < allImages.length && (
            <button
              type="button"
              className="showMoreButton btn btn-primary"
              onClick={handleShowMore}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyWork;