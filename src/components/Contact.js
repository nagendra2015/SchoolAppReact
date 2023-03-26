import React,{ Component } from 'react'

import WOW from 'wowjs';


    class Contact extends Component {
  // Defining WOW 
  componentDidMount() {
    new WOW.WOW({
      live: false
  }).init();
  }

  render() {
       return (
              <div>





                     {/* <!-- Facilities Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                    <h1 class="mb-3">Contact Us</h1>
                 
                </div>
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="facility-item">
                            <div class="facility-icon bg-primary">
                                <span class="bg-primary"></span>
                                <i class="fa fa-home fa-3x text-primary"></i>
                                <span class="bg-primary"></span>
                            </div>
                            <div class="facility-text bg-primary">
                                <h3 class="text-primary mb-3">Corporate Office</h3>
                                <p class="mb-0">1/2/3, 3rd Floor, Nanjappa Mansion, Dattatreya Temple Road , 8th Cross Malleswaram, Bangalore-560003 INDIA</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="facility-item">
                            <div class="facility-icon bg-success">
                                <span class="bg-success"></span>
                                <i class="fa fa-home fa-3x text-success"></i>
                                <span class="bg-success"></span>
                            </div>
                            <div class="facility-text bg-success">
                                <h4 class="text-success mb-1">Registered/Head Office</h4>
                                <p class="mb-0">Ragersville Learning and Accessories Private Limited</p>
<p>Bestech Park View City 1, Sohna Road, Sector 48, Gurugram, Haryana
+91-9667953900

ragersvillepreschool@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="facility-item">
                            <div class="facility-icon bg-warning">
                                <span class="bg-warning"></span>
                                <i class="fa fa-home fa-3x text-warning"></i>
                                <span class="bg-warning"></span>
                            </div>
                            <div class="facility-text bg-warning">
                                <h3 class="text-warning mb-3">Regional Office</h3>
                                <p class="mb-0">66/5 , Unit No. 3/4, Sonal Mansion, Babutala Nagarbazar Dumdum, Kolkata – 700 028</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="facility-item">
                            <div class="facility-icon bg-info">
                                <span class="bg-info"></span>
                                
                                <i class="fa fa-home fa-3x text-info"></i>
                                <span class="bg-info"></span>
                            </div>
                            <div class="facility-text bg-info">
                                <h3 class="text-info mb-3">Regional Office</h3>
                                <p class="mb-0">Plot No 169,Ganesan Street, ,Janaki Nagar,Valasaravakkam Chennai – 600087</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Facilities End --> */}


              </div>
       );
}
    }
export default Contact
