import React, { useState } from 'react'; // Importing React and useState correctly
import emailjs from 'emailjs-com';       // Importing emailjs correctly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTiktok, faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('All fields are required.');
      return;
    }

    setErrorMessage('');

    emailjs.send(
      'service_p6o08xn',
      'template_4gdo26c',
      formData,
      'GW_cG8akOncHt1Rs_'
    )  
    .then((response) => {
      console.log('Message sent successfully!', response.status, response.text);
      setSuccessMessage('Message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      console.log('Error sending message:', error);
      setSuccessMessage('Error sending message, please try again.');
    });
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md my-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Contact Us</h2>
      <p className="text-gray-700 mb-6 text-center">
        Interested in my shelves? Reach out to us for custom designs and inquiries.
      </p>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          value={formData.name} 
          onChange={handleChange}
          placeholder="Your Name" 
          className="w-full p-2 mb-4 border border-gray-300 rounded" 
        />
        <input 
          type="email" 
          name="email"
          value={formData.email} 
          onChange={handleChange}
          placeholder="Your Email" 
          className="w-full p-2 mb-4 border border-gray-300 rounded" 
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message" 
          className="w-full p-2 mb-4 border border-gray-300 rounded" 
          rows="5"
        ></textarea>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
          Send Message
        </button>
      </form>

      {errorMessage && (
        <p className="mt-4 text-center text-red-600">{errorMessage}</p>
      )}
      {successMessage && (
        <p className="mt-4 text-center text-green-600">{successMessage}</p>
      )}

      {/* Direct Contact Section */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold">Reach Us Directly:</h3>
        <p className="text-gray-800 mt-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> +254 791 298 360
        </p>
      </div>

      {/* Social Media Links Section */}
      <h3 className="text-lg font-semibold mt-8 mb-4 text-center">Connect with us on social media:</h3>
      <div className="mt-4 flex justify-center space-x-4">
        <a 
          href="https://www.facebook.com/profile.php?id=61565205017649" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-600 hover:text-blue-800" />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/alvin-leslie-arondo-115503191" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-700 hover:text-blue-900" />
        </a>

        <a 
          href="https://wa.me/254791298360"
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="WhatsApp">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-600 hover:text-green-800" />
        </a>

        <a 
          href="https://www.tiktok.com/@les_unique_pallets" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="TikTok">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>

        <a 
          href="mailto:lesuniquepallets@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-red-600 hover:text-red-800" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
