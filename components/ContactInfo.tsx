import React from "react";
import { LuPhone, LuMail } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
function ContactInfo() {
  return (
    <main>
      <section>
        <div>
          <h3>Get in touch</h3>
          <h1>Contact Us</h1>
          <p>
            Have roofing questions or need assistance? Contact us today! We're
            here to help at every step and offer free, no-obligation estimates
            to ensure your project starts with confidence.
          </p>
        </div>
      </section>
      <section>
        <div>
          <a href="tel:#">
            <LuPhone />
            <span>+1 (323) 253-5146</span>
          </a>
          <a href="mailto:#">
            <LuMail />
            <span>info@franciscosroofinginc.co</span>
          </a>
          <a href="maito:#">
            <VscTools />
            <span>support@franciscosroofinginc.co</span>
          </a>
        </div>
        <div>
          <p>License No. #1086198</p>
        </div>
      </section>
      <section>
        <h1>
          <LuClock />
          <span>Open Hours</span>
        </h1>
        <div className="mt-4 space-y-2 max-w-xs">
          <p className="flex justify-between">
            <span className="font-medium">Monday - Friday:</span>
            <span>8 AM - 5 PM</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Saturday - Sunday:</span>
            <span>Closed</span>
          </p>
        </div>
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-black hover:text-black active:text-black">
            <FaFacebook size={25} />
          </a>
          <a href="#" className="text-black hover:text-black active:text-black">
            <FaInstagram size={25} />
          </a>
          <a
            href="https://g.co/kgs/fzhRzAs"
            className="text-black hover:text-black active:text-black"
          >
            <FaGoogle size={25} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default ContactInfo;
