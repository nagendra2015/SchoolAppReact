import React, { Component } from "react";
import CarouselList from "./Carousel/CarouselList";
import { motion,useScroll } from "framer-motion";
import About from "./About";
import OurClasses from "./OurClasses";

import imgUser from   "../img/user.jpg"; 
import about1 from   "../img/about-1.jpg"; 
import about2 from   "../img/about-2.jpg"; 
import about3 from   "../img/about-3.jpg"; 

import WOW from 'wowjs';
class Home extends Component {


  // Defining WOW 
componentDidMount() {
  new WOW.WOW({
    live: false
}).init();
}

  render() {

    return (

<div>



        <div>
          <motion.div
            initial={{ x: -300, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <CarouselList></CarouselList>
          </motion.div>



          


          {/* <!-- Facilities start main --> */}
          <div class="container-xxl py-5">
            <div class="container">



              <div class="text-center mx-auto mb-5 wow fadeInDown" style={{ maxWidth: 600 }} data-wow-delay="0.1s">
                <h1 class="mb-3">Join the Best Preschool and Daycare in India : Ragersville
</h1>
                <p>
                Providing the right environment for the child to make its transition
                </p>
              </div>


              <div class="row g-4">
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="facility-item">
                    <div class="facility-icon bg-primary">
                      <span class="bg-primary"></span>
                      <i class="fa fa-bus-alt fa-3x text-primary"></i>
                      <span class="bg-primary"></span>
                    </div>
                    <div class="facility-text bg-primary">
                      <h3 class="text-primary mb-3">Teaching Methodology</h3>
                      <p class="mb-0">
                      Our training mechanism is designed to arm teachers with practical and effective techniques, which are best suited for kids.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div class="facility-item">
                    <div class="facility-icon bg-success">
                      <span class="bg-success"></span>
                      <i class="fa fa-futbol fa-3x text-success"></i>
                      <span class="bg-success"></span>
                    </div>
                    <div class="facility-text bg-success">
                      <h3 class="text-success mb-3">Active Learning</h3>
                      <p class="mb-0">
                      We are committed to impacting a synergy of skills, knowledge, and values in our children to lend them their inner voice for the 21st century
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div class="facility-item">
                    <div class="facility-icon bg-warning">
                      <span class="bg-warning"></span>
                      <i class="fa fa-home fa-3x text-warning"></i>
                      <span class="bg-warning"></span>
                    </div>
                    <div class="facility-text bg-warning">
                      <h3 class="text-warning mb-3">Dedicated Teachers</h3>
                      <p class="mb-0">
                      Highly dedicated and motivated who from time to time are equipped with orientation, education and training program
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div class="facility-item">
                    <div class="facility-icon bg-info">
                      <span class="bg-info"></span>
                      <i class="fa fa-chalkboard-teacher fa-3x text-info"></i>
                      <span class="bg-info"></span>
                    </div>
                    <div class="facility-text bg-info">
                      <h3 class="text-info mb-3">Partnership with Parents</h3>
                      <p class="mb-0">
                      We organize parent teacher meetings regularly when you will be invited to discuss your child’s progress. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Facilities End --> */}



          <div>
              <motion.div 
              initial={{x:300,scale:0.5}} animate={{x:0,scale:1}} transition={{duration:2}}
              >
             
 
             {/* <!-- About Start --> */}
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.7s">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6" >
                        <h1 class="mb-4">India’s Fastest Emerging Preschool & Day Care Chain</h1>
                        <p>A team of highly qualified, dedicated and experienced educationists and professionals who have taken initiative in making Ragersville a dream place for little champs. We believe that children need a safe,clean and hygienic environment in which they
                             can grow them-self.</p>
                        <p class="mb-4">
                            

                        </p>
                        <div class="row g-4 align-items-center">
                            <div class="col-sm-6">
                                <a class="btn btn-primary rounded-pill py-3 px-5" href="">Explore Ragersville</a>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle flex-shrink-0" src={about3} alt="" style={{with:45,height:45}} />
                                    <div class="ms-3">
                                        <h6 class="text-primary mb-1">RagersVille</h6>
                                        
                                    </div>
                                </div>
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

                {/* <!-- Section Start --> */}




                        {/* <!-- Section End --> */}





              </motion.div>

</div>




          <motion.div
            initial={{ x: 300, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 2 }}
          >


            <OurClasses></OurClasses>
          </motion.div>
        </div>



      </div>
    );
  }
}

export default Home;
