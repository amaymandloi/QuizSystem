
import React from "react";
import Login from "./Login";
import "./templatemo-digital-trend.css";
import "./bootstrap.min.css";
import "./owl.theme.default.min.css";
import "./font-awesome.min.css";
import Register from "./Register";
import homeimg from './working-girl.png';
class Main extends React.Component{

render()
{
    return(
<React.Fragment>

<nav class="navbar navbar-expand-lg"  style={{position:"fixed"}}>
        <div class="container">
            <a class="navbar-brand" href="#">
              <i class="fa fa-pencil-square-o"  ></i>
               Quiz
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#Login" class="nav-link smoothScroll" ><i class="fa fa-sign-in"></i> Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="#Register" class="nav-link smoothScroll"><i class="fa fa-user-plus"></i> Registration</a>
                    </li>
                    <li class="nav-item">
                        <a href="#About" class="nav-link">About Us <i class="fa fa-info-circle"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="#Contact" class="nav-link contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="hero hero-bg d-flex justify-content-center align-items-center">
               <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                              <div class="hero-text">

                                   <h1 class="text-white" data-aos="fade-up">Welcome to the Quiz Applicaton</h1>

                                   <a href="#" class="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay="100">QUIZ</a>

                                   <strong class="d-block py-3 pl-5 text-white" data-aos="fade-up" data-aos-delay="200"><i class="fa fa-smile-o"></i>   Ready for Quiz</strong>
                              </div>
                        </div>

                        <div style={{marginTop:"-5%"}} class="col-lg-6 col-12">
                          <div class="hero-image" data-aos="fade-up" data-aos-delay="300" >
                          <img src={homeimg} style={{marginLeft:"70px", borderRadius:"10%"}}  class="img-fluid" alt="working girl"/>
                          </div>
                        </div>

                    </div>
               </div>
     </section>


     <section  style={{marginTop:"-5%"}} class="about section-padding pb-0" id="Login">
          <div class="container">
               <div class="row">
                    <Login/>
                    <div class="col-lg-7 mx-auto col-md-10 col-12">
                         <div class="about-info">
                              <h2 class="mb-4" data-aos="fade-up" style={{marginLeft:"99px"}}> Login with your<strong style={{marginLeft:"19px"}}>Credentials.</strong></h2>
                         </div>
                         <div class="about-image" data-aos="fade-up" data-aos-delay="200">
                        </div>
                    </div>

               </div>
          </div>
     </section>

     <section   class="project section-padding" id="Register">
          <div class="container-fluid">
               <div class="row">
<Register/>
                    <div class="col-lg-12 col-12">

                        <h2 class="mb-5 text-center" data-aos="fade-up">
                            Register 
                            <strong>  Yourself</strong>
                        </h2>          
                   </div>           
               </div>
          </div>
     </section>


     
     <section style={{marginTop:"-5%"}}  class="testimonial section-padding" id="About">
          <div style={{marginTop:"-5%"}} class="container">
               <div  class="row">
                    <div  class="col-lg-6 col-md-5 col-12">
                        <div class="contact-image" data-aos="fade-up">

                        </div>
                    </div>
                    <div style={{marginLeft:"65%"}} class="col-lg-6 col-md-7 col-12">
                      <h4 class="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">About Us...</h4>

                      <div class="quote" data-aos="fade-up" data-aos-delay="200"></div>

                      <h2 class="mb-4" data-aos="fade-up" data-aos-delay="300">Quiz Application.</h2>

                      <p data-aos="fade-up" data-aos-delay="400">
                        <strong>Yash Team</strong>

                        <span class="mx-1"></span>

                        
                      </p>
                    </div>

               </div>
          </div>
     </section>


    <footer class="site-footer" id="Contact">
      <div class="container">
        <div class="row" >

          <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
            <h1 class="text-white" data-aos="fade-up" data-aos-delay="100">We make creative <br></br><strong>App.</strong></h1>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <h4 class="my-4" style={{color:"white"}}>Contact Info</h4>

            <p class="mb-1">
              <i class="fa fa-phone mr-2 footer-icon"></i> 
              +91-7000612604
            </p>

            <p>
              <a href="#">
                <i class="fa fa-envelope mr-2 footer-icon"></i>
                YashTechnologies@company.com
              </a>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <h4 class="my-4" style={{color:"white"}}>Our Company</h4>

            <p class="mb-1">
              <i class="fa fa-home mr-2 footer-icon"></i> 
             IT Park,YashTechnologies - Indore,(M.P)
            </p>
          </div>

          <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay="400">
            <p class="copyright-text">Copyright &copy; 2022  Company
            
            <a rel="nofollow noopener" href="https://yashtechnologies.com">Design: YashTechnologies</a></p>
          </div>

          <div class="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
            
            <ul class="footer-link">
              <li><a href="#">Stories</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
            <ul class="social-icon">
              <li><a href="#" class="fa fa-instagram"></a></li>
              <li><a href="#" class="fa fa-twitter"></a></li>
              <li><a href="#" class="fa fa-dribbble"></a></li>
              <li><a href="#" class="fa fa-behance"></a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
    </React.Fragment>

    );
}
}
export default Main;