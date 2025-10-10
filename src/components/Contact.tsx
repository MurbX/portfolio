'use client'

import { useEffect } from 'react'
import { Mail, Phone, Linkedin, Github, Twitter, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://cal.com"});
      
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view"},
        calLink: "brian-mutuku-dev/30min",
      });
      
      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h3>
                
                <div className="space-y-4">
                  {/* Email Card */}
                  <a
                    href="mailto:brianmurb22@gmail.com"
                    className="group flex items-center gap-4 p-6 bg-white hover:bg-gray-50 rounded-2xl transition-all duration-300 border border-gray-200 hover:border-gray-900 hover:shadow-lg"
                  >
                    <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-gray-900 transition-colors duration-300">
                      <Mail size={24} className="text-gray-900 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">brianmurb22@gmail.com</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>

                  {/* Phone Card */}
                  <a
                    href="tel:+254794921010"
                    className="group flex items-center gap-4 p-6 bg-white hover:bg-gray-50 rounded-2xl transition-all duration-300 border border-gray-200 hover:border-gray-900 hover:shadow-lg"
                  >
                    <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-gray-900 transition-colors duration-300">
                      <Phone size={24} className="text-gray-900 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm">+254 794 921 010</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="font-bold mb-6 text-gray-900 text-lg">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/brian-mutuku-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://github.com/MurbX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    <Github size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://x.com/MurbBrian_ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    <Twitter size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg"
            >
              <div className="p-6 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-900 rounded-xl">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Schedule a Call</h3>
                    <p className="text-sm text-gray-600">Pick a time that works for you</p>
                  </div>
                </div>
              </div>
              <div
                id="my-cal-inline"
                style={{ width: '100%', height: '600px', overflow: 'auto' }}
              ></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
