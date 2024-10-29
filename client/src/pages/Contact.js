import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
             <div className="row contactus">
              <div className="col-md-6">
                <img src="/image/contactus.jpeg" height="350" weight="138"
                alt="contactus"
                style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-4">
                <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                <p className="text-justify mt-2">
                  any query and info about product feel free to call anytime we 24*7 
                  avaialible
                </p>
                <p className="mt-3">
                  <BiMailSend /> : www.friendsgroup@gmail.com
                </p>
                <p className="mt-3">
                  <BiPhoneCall /> : 7627073230,
                </p>
                <p className="mt-3">
                  <BiSupport /> :1800-0000-0000  (toll free)
                </p>
              </div>
             </div>
    </Layout>
  );
};

export default Contact;
