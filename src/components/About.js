import React,{ useState } from 'react'
import { motion } from "framer-motion";
import imgUser from   "../img/user.jpg"; 
import about1 from   "../img/about-1.jpg"; 
import about2 from   "../img/about-2.jpg"; 
import about3 from   "../img/about-3.jpg"; 
import aboutimg from   "../img/aboutimg.jpg"; 

const About = () => {

       
       return (

              <div>






<motion.div 
              initial={{x:300,scale:0.5}} animate={{x:0,scale:1}} transition={{duration:2}}
              >


{/* <!-- About Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="bg-light rounded">
                    <div class="row g-0">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s"  style={{minHeight:400}} >
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded" src={aboutimg}  style={{objectFit:'cover'}}/>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div class="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 class="mb-4">Who We Are</h1>
                                <h4 class="mb-4">We Create Something New</h4>
                                <p class="mb-4">Ragersville is a unique pre school chain ventured by Ragersville Learning and Accessories Pvt. Ltd. ,an organization pioneer in education. The organization is managed by a team of highly qualified, dedicated and experienced educationists and professionals who have taken initiative in making Ragersville a dream place for little champs. We believe that children need a safe,clean and hygienic environment in which they can grow them-self.
                                </p>

                                <p class="mb-4">As the name goes, RAGERSVILLE prepares the child for a full school by providing the right environment for the child to make its transition. “We started in Delhi-NCR with the simple goal of making the lives of families with young children better and easier. By offering high-quality studies along with music, art, and enrichment classes and a variety of services all under one roof.
                                </p>

                                <a class="btn btn-primary py-3 px-5" href="">Get Started Now<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}





              </motion.div>






              <motion.div 
              initial={{x:300,scale:0.5}} animate={{x:0,scale:1}} transition={{duration:2}}
              >
             
 
             {/* <!-- About Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6" >
                        <h1 class="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                        <div class="row g-4 align-items-center">
                            <div class="col-sm-6">
                                <a class="btn btn-primary rounded-pill py-3 px-5" href="">Read More</a>
                            </div>
 
                        </div>
                    </div>
                    <div class="col-lg-6 about-img" >
                        <div class="row">
                            <div class="col-12 text-center">
                                <img class="img-fluid w-75 rounded-circle bg-light p-3" src={about1} alt=""/>
                            </div>
                            <div class="col-6 text-start" style={{marginTop:-150}}>
                                <img class="img-fluid w-100 rounded-circle bg-light p-3" src={about2} alt=""/>
                            </div>
                            <div class="col-6 text-end" style={{marginTop:-150}}>
                                <img class="img-fluid w-100 rounded-circle bg-light p-3" src={about3} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


              </motion.div>

 


              </div>




       )
}

export default About
