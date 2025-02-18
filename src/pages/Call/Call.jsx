import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      {/* Header Section with a Smaller Background */}
      <div className="flex justify-center">
        <div className="bg-violet-400 text-white text-center py-4 px-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold">Contact Us</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Get in Touch Section with Background */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">
            Looking for Cheap, Reliable, and Quick Service? Feel free to reach us at these infos.
          </p>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-violet-500" />
              Mandaue, Maguikay
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-violet-500" />
              +123 456 7890
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-violet-500" />
              bnccomputech@gmail.com
            </p>
          </div>
        </div>

        {/* Send a Message Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-violet-400 text-white p-3 rounded-lg hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
