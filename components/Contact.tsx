import React, { useState, useRef } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setFormStatus('sent');
            form.current?.reset();
            setTimeout(() => setFormStatus('idle'), 3000);
          },
          (error) => {
            console.error('FAILED...', error.text);
            setFormStatus('error');
            setTimeout(() => setFormStatus('idle'), 3000);
          }
        );
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">Let's Connect</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              I'm always open to discussing new AI research, engineering roles, or interesting collaboration opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-600 hover:text-blue-600 transition-colors">
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Location</h4>
                  <p className="text-slate-600">India</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-slate-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#0077b5] text-white rounded-lg hover:bg-[#006097] transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus !== 'idle' && formStatus !== 'error'}
                className={`w-full py-3.5 px-6 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${formStatus === 'sent' ? 'bg-green-600' :
                    formStatus === 'error' ? 'bg-red-600' :
                      'bg-blue-600 hover:bg-blue-700'
                  }`}
              >
                {formStatus === 'idle' && (
                  <>Send Message <Send size={18} /></>
                )}
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'sent' && 'Message Sent!'}
                {formStatus === 'error' && 'Failed to Send. Try Again.'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;