"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const containsHtmlTags = (str: string) => /[<>]/.test(str);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Client-side validation: reject HTML tag characters to prevent injection attempts
    if (containsHtmlTags(name) || containsHtmlTags(subject) || containsHtmlTags(message)) {
      setErrorMessage("Karakter HTML (< atau >) tidak diperbolehkan demi keamanan.");
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage(null);
      }, 5000);
      return;
    }

    setStatus("loading");

    const data = { name, email, subject, message };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      });
      if (response.ok) {
        setStatus("success");
        setErrorMessage(null);
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrorMessage(errorData.message || "Gagal mengirim pesan. Silakan coba lagi.");
        setStatus("error");
        setTimeout(() => {
          setStatus("idle");
          setErrorMessage(null);
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan koneksi. Silakan coba lagi nanti.");
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage(null);
      }, 5000);
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary-bg/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space mb-4 text-foreground">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-foreground/80 max-w-xl sm:max-w-2xl mx-auto font-jakarta text-sm sm:text-base">
            Have something in mind or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="lg:col-span-2 space-y-4 sm:space-y-8"
          >
            <div className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-4 border-transparent hover:border-primary/20 shadow-xl shadow-primary/5 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-foreground font-space">Contact Info</h3>

              <div className="space-y-5 sm:space-y-6 font-jakarta">
                <div className="flex items-start">
                  <div className="p-2.5 sm:p-3 bg-primary/10 text-primary rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-0.5 text-sm sm:text-base">Email</h4>
                    <p className="text-foreground/80 text-xs sm:text-sm break-all">khoerunnisautami22@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2.5 sm:p-3 bg-primary/10 text-primary rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-0.5 text-sm sm:text-base">Location</h4>
                    <p className="text-foreground/80 text-xs sm:text-sm">Surabaya, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-4 border-transparent hover:border-primary/20 shadow-xl shadow-primary/5 space-y-4 sm:space-y-6 transition-colors"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 font-jakarta">
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-foreground">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-foreground">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2 font-jakarta">
                <label htmlFor="subject" className="text-sm font-bold text-foreground">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground text-sm sm:text-base"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2 font-jakarta">
                <label htmlFor="message" className="text-sm font-bold text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-colors resize-none text-foreground text-sm sm:text-base"
                ></textarea>
              </div>

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200 text-sm font-jakarta"
                >
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-3 sm:py-4 rounded-xl font-bold font-space text-sm sm:text-base flex items-center justify-center transition-all duration-300 shadow-md shadow-primary/20
                  ${status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-primary hover:bg-primary/90 text-white group"
                  }`}
              >
                {status === "loading" ? (
                  <span className="animate-pulse">Sending...</span>
                ) : status === "success" ? (
                  <>Message Sent! <CheckCircle size={18} className="ml-2" /></>
                ) : status === "error" ? (
                  <>Error! Try Again <AlertCircle size={18} className="ml-2" /></>
                ) : (
                  <>Send Message <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
