// src/components/Contact.jsx
import React, { useState } from 'react';

// YOUR ACTUAL FORMSPREE ENDPOINT
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbyygqa"; 

const Contact = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ message: "Success! Thank you for your message. I'll get back to you soon.", type: 'success' });
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          setStatus({ message: result.errors.map(error => error.message).join(", "), type: 'error' });
        } else {
          setStatus({ message: "Oops! There was a problem submitting your form.", type: 'error' });
        }
      }
    } catch (error) {
      setStatus({ message: "Oops! There was a network error.", type: 'error' });
    }

    setTimeout(() => {
      setStatus(null);
    }, 7000);
  };

  const getStatusClasses = () => {
    if (!status) return 'hidden';
    const base = 'mt-4 p-3 rounded-lg text-sm font-medium text-center';
    if (status.type === 'success') {
      return `${base} bg-green-900/50 text-green-300`;
    } else if (status.type === 'error') {
      return `${base} bg-red-900/50 text-red-300`;
    }
    return 'hidden';
  };

  return (
    <>
      <h3 className="section-header text-4xl font-bold text-white mb-8">Get In Touch</h3>
      <div className="bg-[#1E293B] p-8 rounded-xl shadow-2xl max-w-2xl mx-auto border border-slate-700">
          <p className="text-lg text-slate-300 mb-6 text-center">
              I am currently looking for new opportunities in the DevOps field. Feel free to send a message regarding my projects or potential roles.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">Your Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 border border-slate-600 bg-slate-800 text-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">Your Email</label>
                  <input type="email" id="email" name="_replyto" required className="mt-1 block w-full px-4 py-2 border border-slate-600 bg-slate-800 text-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                  <label htmlFor="query" className="block text-sm font-medium text-slate-300">Your Query / Message</label>
                  <textarea id="query" name="query" rows="4" required className="mt-1 block w-full px-4 py-2 border border-slate-600 bg-slate-800 text-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-[1.01]">
                  Send Message
              </button>

              {/* Status Message Box */}
              {status && (
                <div id="messageBox" className={getStatusClasses()}>
                  {status.message}
                </div>
              )}
          </form>
      </div>
      <div className="text-center mt-6 text-sm text-slate-500">
          (Note: This form uses Formspree to send email without exposing my address.)
      </div>
    </>
  );
};

export default Contact;