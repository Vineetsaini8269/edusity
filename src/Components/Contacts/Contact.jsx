import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

   const [result, setResult] = React.useState("");

   const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96344419-0215-4b69-bbab-f3deaa3d64bc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
        } 
    else {
             console.log("Error", data);
            setResult(data.message);
        }

    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message  <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Nobis harum rem exercitationem, dicta quis sed facilis
                ! A similique saepe perferendis, nam sequi distinctio, 
                quaerat optio cum ducimus nemo corporis! Beatae?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, illum?</p>
                <ul>
                    <li> <img src={mail_icon} alt="" />Contact@abc.com </li>
                    <li> <img src={phone_icon} alt="" />+91 8965858715</li>
                    <li> <img src={location_icon} alt="" />77 Massachusetts Ave , Cambridge <br/>mMA 02139 , United
                    States</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your name'  required/>

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />

                <label> Write your messages here</label>
                <textarea name='message'  rows='6'placeholder='Enter your text' required ></textarea>

                <button type='submit' className='btn dark-btn'>Submit now
                    <img src={white_arrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact
