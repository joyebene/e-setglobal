"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Instagram, MailIcon, LocationEditIcon } from "lucide-react";

interface SocialLinksProps {
  title: string,
  icon: React.ReactNode,
  text: string
}

const SocialLinks = ({title, icon, text}: SocialLinksProps) => {
  return( 
    <div className="flex gap-1 items-center mb-4">
      <div className="bg-green-700 text-white p-2 rounded-lg">{icon}</div>
      <div className="flex flex-col justify-center"><h2 className="font-semibold text-gray-900">{title}</h2> <p className="text-[13px] lg:text-sm text-gray-600">{text}</p></div>
    </div>
  )
}

const page = () => {

   const [formData, setFormData] = useState({
          name: "",
          email: "",
          phone: "",
          message: "",
      });
  
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  
      const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
  
          const response = await fetch("https://formspree.io/f/xblopvkr", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
              },
              body: JSON.stringify(formData),
          });
  
          if (response.ok) {
              alert("Message sent successfully!");
              setFormData({ name: "", email: "", phone: "", message: "" });
          } else {
              alert("Failed to send message.");
          }
      };
  

  return (
    <div>
      <div>
          <div className='h-[calc(35vh-2rem)] lg:h-[calc(50vh-2rem)] w-full pt-[6rem] lg:pt-[7rem] bg-cover bg-center bg-no-repeats bg-[url("/assets/hero3-img.png")]'>
        <div className='bg-black/50 h-full flex items-center justify-center'>
            <div>
                <h1 className='text-3xl md:text-5xl xl:text-6xl text-center text-white'>Our Services</h1>
            </div>
        </div>
    </div>
        <div className="bg-white py-12 px-6 pr-9 md:px-24 xl:px-60 flex flex-col justify-center gap-6 lg:gap-10">
          <div className="flex items-center justify-between">

            {/* Get In Touch Section */}
            <div>
              <h1 className="font-bold md:text-lg xl:text-xl">Get In Touch</h1>
              <p className="text-gray-600 text-[14px] lg:text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia laboriosam omnis veritatis amet delectus quasi.</p>
              <div className="grid grid-cols-2">
                <SocialLinks title="Phone" icon={<Phone />} text="+2348035047852" />
                <SocialLinks title="Email" icon={<MailIcon />} text="esetgloballtd@gmail.com" />
                <SocialLinks title="Address" icon={<LocationEditIcon />} text="Area 11, Garki, Abuja, Nigeria" />
                <SocialLinks title="Instagram" icon={<Instagram />} text="insta.com" />
              </div>
            </div>

            {/* Form Section */}
            <div>
               <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-3"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-3"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-3"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-3 h-34"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-green-700 to-blue-300 text-white font-semibold px-6 py-3 rounded-md"
                    >
                        Send Message
                    </button>
                </form>

            </div>
          </div>
          {/* Map Section */}
          <div className="space-y-5 mt-6 w-full">
                    {/* Map */}
                    <div className="overflow-hidden flex items-center lg:items-start justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31521.70521774573!2d7.478486648475849!3d9.044311783988913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSuite%2020%2C%20Mangal%20Plaza%2C!5e0!3m2!1sen!2sng!4v1747204218492!5m2!1sen!2sng" width="700" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-xl md:rounded-2xl"></iframe>
                    </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default page;