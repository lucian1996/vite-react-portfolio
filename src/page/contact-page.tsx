import Fireflies from "../components/interface/fireflies";
import Header from "../components/interface/header";
import { motion } from "framer-motion";
import '../utility/style/page/contact.css'
import ContactCard from "../components/contact-card";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm('service_1dv3bdm', 'template_y0bovyn', form.current, '4det7y_L2a0fApovP')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="layout">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="main"
      >
        <div id="Contact" className="layout">
          <div className="frame">
            <ContactCard />
            <form ref={form} autoComplete='false' onSubmit={sendEmail}>
              <label>name</label>
              <input type="text" name="user_name" />
              <label>email</label>
              <input type="email" name="user_email" />
              <label>message</label>
              <textarea name="message" />
              <input type="submit" value="Send" onClick={() => { console.log('clicked') }} className='button' />
            </form>
          </div>
        </div>
      </motion.div >
      <Fireflies />
    </div>
  )
}
