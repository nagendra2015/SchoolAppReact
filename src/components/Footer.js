import React from 'react'
import classes1 from   "../img/classes-1.jpg"; 
import classes2 from   "../img/classes-2.jpg"; 
import classes3 from   "../img/classes-3.jpg"; 
import classes4 from   "../img/classes-4.jpg"; 
import classes5 from   "../img/classes-5.jpg"; 
import classes6 from   "../img/classes-6.jpg"; 
import footerImg from   "../img/footer.png"; 

const Footer = () => {

    var sectionStyle = {
        width: "100%",
        height: "300px",
        backgroundImage: footerImg
      };
      

       return (
              <div style={sectionStyle} >

{/* <!-- Footer Start --> */}
        <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s"  >
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Get In Touch</h3>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Bestech Park View City 1, Sohna Road, Sector 48, Gurugram, 
                        Haryana</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91-9667953900</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>ragersvillepreschool@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fa fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fa fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fa fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Quick Links</h3>
                        <a class="btn btn-link text-white-50" href="">About Us</a>
                        <a class="btn btn-link text-white-50" href="">Contact Us</a>
                        <a class="btn btn-link text-white-50" href="">Our Services</a>
                        <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Photo Gallery</h3>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={classes1} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={classes2} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={classes3} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={classes4} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={classes5} alt=""/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src={classes6} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Newsletter</h3>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div class="position-relative mx-auto" style={{maxWidth:400}}  >
                            <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="https://ragersville.in/">RagersVille</a>, All Right Reserved. 
							
				Designed By <a class="border-bottom" href="https://ragersville.in/">Ragersville</a>
                            
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}




              </div>
       )
}

export default Footer