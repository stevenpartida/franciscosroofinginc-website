"use client";
import React from "react";
import { LuPhone, LuMail } from "react-icons/lu";
import { LuClock } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactInfo() {
  return (
    <main>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
      >
        <div>
          <h3 className="text-black font-manrope uppercase mb-2 text-base sm:text-lg tracking-widest font-light">
            Get in touch
          </h3>
          <h1 className="text-4xl font-roboto font-bold mb-4 uppercase text-black">
            Contact Us
          </h1>
          <p className="text-base mb-8 text-black">
            Have roofing questions or need assistance? Contact us today! We're
            here to help at every step and offer free, no-obligation estimates
            to ensure your project starts with confidence.
          </p>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="font-manrope mb-8">
          <a
            href="tel:#"
            className="text-black mb-4 flex items-center space-x-2"
          >
            <LuPhone size={20} />
            <span>+1 (323) 253-5146</span>
          </a>
          <a
            href="mailto:#"
            className="text-black mb-4 flex items-center space-x-2"
          >
            <LuMail size={20} />
            <span>info@franciscosroofinginc.co</span>
          </a>
          <a
            href="maito:#"
            className="text-black mb-4 flex items-center space-x-2"
          >
            <VscTools size={20} />
            <span>support@franciscosroofinginc.co</span>
          </a>
        </div>
        <div>
          <p className="font-manrope">License No. #1086198</p>
        </div>
      </motion.section>
      <motion.section
        className="mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <h1 className="flex items-center space-x-2 font-bold text-2xl text-black">
          <LuClock size={25} />
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
      </motion.section>
    </main>
  );
}

export default ContactInfo;
