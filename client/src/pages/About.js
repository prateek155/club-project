import React from 'react'
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us- Ecommerce app"}>
       <div className="row contactus">
              <div className="col-md-6">
                <img src="/image/about.jpeg"
                alt="contactus"
                style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-4">
                <h1 className="bg-dark p-2 text-white text-center">ABOUT</h1>
                <p className="text-justify mt-2">
                Welcome to our website! We are dedicated to providing top-quality products and services 
                tailored to meet your unique needs. With a commitment to excellence and a passion for 
                innovation, our team strives to deliver exceptional value and customer satisfaction. 
                Explore our offerings and discover why we are the trusted choice for so many.
                </p>
               
              </div>
             </div>
    </Layout>
  );
};

export default About;
