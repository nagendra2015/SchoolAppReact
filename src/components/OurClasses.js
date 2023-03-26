import React, { useState } from "react";
import { motion } from "framer-motion";

import class1 from "../img/classes-1.jpg";
import class2 from "../img/classes-2.jpg";
import class3 from "../img/classes-3.jpg";
import class4 from "../img/classes-4.jpg";
import class5 from "../img/classes-5.jpg";
import class6 from "../img/classes-6.jpg";

import imgUser from   "../img/user.jpg"; 
const OurClasses = () => {
  return (
    <div>
      <motion.div
        initial={{ x: 300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 2 }}
      >

{/* <!-- Classes Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth : 600}}   >
                    <h1 class="mb-3">Our Classes</h1>
                    <p>Professional team that aims to respect your child’s feelings, to give them responsibility,
independence and freedom to make choices.</p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="classes-item">
                            <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                <img class="img-fluid rounded-circle" src={class1} alt="" />
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <a class="d-block text-center h3 mt-3 mb-4" href="">Playgroup</a>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="d-flex align-items-center">
                                        
                                        <div class="ms-3">
                                            <h6 class="text-primary mb-1 text-center">Admission Open</h6>
                                           
                                        </div>
                                    </div>

                                </div>
                                <div class="row g-1">
                                    <div class="col-6">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Year Old</h6>
                                            <small>2.5-3.5 Year</small>
                                        </div>
                                    </div>
                                    
                                    <div class="col-6">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Class Size</h6>
                                            <small>12</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="classes-item">
                            <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                <img class="img-fluid rounded-circle" src={class2} alt=""/>
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <a class="d-block text-center h3 mt-3 mb-4" href="">Pre Nursery and Nursery</a>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="d-flex align-items-center">

                                        <div class="ms-3">
                                            <h6 class="text-primary mb-1">We keep things interactive and engaging</h6>
                                           
                                        </div>
                                    </div>

                                </div>
                                <div class="row g-1">
                                    <div class="col-6">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Years Old</h6>
                                            <small>3.5-4.5</small>
                                        </div>
                                    </div>
                                   
                                    <div class="col-6">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Class Size</h6>
                                            <small>12</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="classes-item">
                            <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                <img class="img-fluid rounded-circle" src={class3} alt=""/>
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <a class="d-block text-center h3 mt-3 mb-4" href="">Kindergarten</a>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="d-flex align-items-center">

                                        <div class="ms-3">
                                            <h6 class="text-primary mb-1">We let them dream and help them dream</h6>
                                            
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="row g-1">
                                    <div class="col-4">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Years Old</h6>
                                            <small>4.5-5.5</small>
                                        </div>
                                    </div>
                                    
                                    <div class="col-4">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Class Size</h6>
                                            <small>12</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="classes-item">
                            <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                <img class="img-fluid rounded-circle" src={class4} alt=""/>
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <a class="d-block text-center h3 mt-3 mb-4" href="">Daycare</a>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="d-flex align-items-center">

                                        <div class="ms-3">
                                            <h6 class="text-primary mb-1">Learns the basic etiquettes of life</h6>
                                            
                                        </div>
                                    </div>
 
                                </div>
                                <div class="row g-1">
                                    <div class="col-6">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Years Old</h6>
                                            <small>9 month - 6 year</small>
                                        </div>
                                    </div>
                                   
                                    <div class="col-6">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Class Size</h6>
                                            <small>10</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="classes-item">
                            <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                <img class="img-fluid rounded-circle" src={class5} alt=""/>
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <a class="d-block text-center h3 mt-3 mb-4" href="">Day Care or Child Care</a>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="d-flex align-items-center">

                                        <div class="ms-3">
                                            <h6 class="text-primary mb-1">It is a Home away from Home.</h6>
                                            
                                        </div>
                                    </div>

                                </div>
                                <div class="row g-1">
                                    <div class="col-6">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Years Old</h6>
                                            <small>.6-12</small>
                                        </div>
                                    </div>
                                    
                                    <div class="col-6">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Class Size</h6>
                                            <small>24</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="classes-item">
                            <div class="bg-light rounded-circle w-75 mx-auto p-3">
                                <img class="img-fluid rounded-circle" src={class6} alt=""/>
                            </div>
                            <div class="bg-light rounded p-4 pt-5 mt-n5">
                                <a class="d-block text-center h3 mt-3 mb-4" href="">After School Academy</a>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="d-flex align-items-center">

                                        <div class="ms-3">
                                            <h6 class="text-primary mb-1">Innovative after school programs</h6>
                                            
                                        </div>
                                    </div>

                                </div>
                                <div class="row g-1">
                                    <div class="col-6">
                                        <div class="border-top border-3 border-primary pt-2">
                                            <h6 class="text-primary mb-1">Years Old</h6>
                                            <small>--</small>
                                        </div>
                                    </div>
                                  
                                    <div class="col-6">
                                        <div class="border-top border-3 border-warning pt-2">
                                            <h6 class="text-warning mb-1">Class Size</h6>
                                            <small>24</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                





                </div>
            </div>
        </div>
        {/* <!-- Classes End --> */}

      </motion.div>

      <motion.div
        initial={{ x: 300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  );
};

export default OurClasses;
