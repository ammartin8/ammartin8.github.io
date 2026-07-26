import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { contactLinks } from "../../data/content";
import { Section } from "../ui";

export default function Contact() {
  return (
    <Section id="contact" className="pt-16 md:pt-20 lg:pt-24 py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 xl:px-24 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div id="contact-heading" className="mb-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)]">
              Get In Touch
            </h2>
          </div>
          <p className="font-serif text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or interesting projects.
          </p>
        </motion.div>

        {/* Contact Links with Icons */}
        <div className="mt-8 flex flex-row justify-center items-center gap-6" style={{ display: 'flex', alignItems: 'center' }}>
          {contactLinks.map((link) => {
            // Map icon names to actual react-icons components
            const Icon = link.icon === "FaEnvelope" ? FaEnvelope :
                        link.icon === "FaLinkedin" ? FaLinkedin :
                        link.icon === "FaGithub" ? FaGithub : React.Fragment;
            
            return (
              <div style={{ width: '200px', height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {/* Icon - centered in the flex column */}
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 link-hover"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
                
                {/* Label (EMAIL, LINKEDIN, GITHUB) */}
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 font-mono text-xs uppercase tracking-widest link-hover flex-shrink-0"
                >
                  {link.label}
                </motion.a>
                
                {/* Description (For opportunities & questions, Connect with me, View my code) */}
                <p className="text-[var(--text-secondary)]/70 text-[10px] mt-2 font-mono text-center flex-shrink-0">
                  {link.description}
                </p>
              </div>
            );
          })}
        </div>


      </div>
    </Section>
  );
}
