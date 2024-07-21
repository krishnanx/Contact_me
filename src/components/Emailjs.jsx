import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

export const sendEmail = (name,phone,email,subject) => {
    
    var params = {
        from_name:name,
        message:subject,
        phone:phone,
        email:email
    }

    emailjs
    .send('service_wdxqqnp', 'template_t11fmsl', params, {
        publicKey: 'L_VFIshAgbF7oPgWM',
      })
    .then(
        () => {
        //console.log('SUCCESS!');
        },
        (error) => {
        //console.log('FAILED...', error);
        },
    );
};
const Emailjs = () => {
    
    
    
}

export default Emailjs