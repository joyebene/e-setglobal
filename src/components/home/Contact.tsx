"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";


const Contact = () => {
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
        <div className="w-full min-h-screen bg-green-700/60 px-6 md:px-24 lg:px-40 xl:px-60 py-16 text-gray-900">
            <div className="my-4 md:my-6 pb-3 md:pb-6">
                <h1 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl">Contact Us</h1>
            </div>
            <div className="w-full md:max-w-10xl bg-white rounded-xl shadow-sm md:shadow-md px-2 py-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

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
                        className="w-full border border-gray-300 rounded-md p-3 h-34 md:h-60 lg:h-80"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-green-700 to-blue-300 text-white font-semibold px-6 py-3 rounded-md"
                    >
                        Send Message
                    </button>
                </form>

                {/* Right: Map and Contact Info */}
                <div className="space-y-5 mt-6">
                    {/* Map */}
                    <div className="overflow-hidden flex items-center lg:items-start justify-center">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31521.70521774573!2d7.478486648475849!3d9.044311783988913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSuite%2020%2C%20Mangal%20Plaza%2C!5e0!3m2!1sen!2sng!4v1747204218492!5m2!1sen!2sng" width="700" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-[300px] md:w-[600px] lg:w-[700px] h-[250px] md:h-[350px] lg:h-[450px] rounded-xl md:rounded-2xl"></iframe>
                    </div>

                    {/* Address Info */}
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <MapPin className="text-green-700 mt-1" />
                            <div>
                                <p className="font-semibold">Suite 20, Mangal Plaza</p>
                                <p>Area 11, Garki, Abuja, Nigeria </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-green-700" />
                            <p>+2348035047852, +2347051220509 </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="text-green-700" />
                            <p>esetgloballtd@gmail.com </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;



