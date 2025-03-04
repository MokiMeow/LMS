"use client"; // Only if you're using Next.js App Router and need client-side code

import { FormEvent, useState } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaCheckCircle } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    // Implement your real subscription logic here (e.g., API call)
    // If successful:
    setShowToast(true);
    setEmail("");

    // Hide the toast automatically after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  return (
    <footer className="relative border-t border-border bg-background text-foreground pt-10 pb-6">
      {/* Toast Notification (appears on successful subscribe) */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-3 rounded-md bg-foreground px-4 py-3 text-background shadow-lg animate-in fade-in slide-in-from-bottom-2">
          <FaCheckCircle className="h-5 w-5 text-background" />
          <span className="text-sm font-medium">Subscribed successfully!</span>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Top: 4 columns on medium+ screens */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1: Brand & Description */}
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-3">CourseFlow</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We empower learners with expert-led courses and hands-on projects
              to unlock their full potential. Learn, grow, and excel with
              CourseFlow.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Subscribe to our newsletter for updates on new courses, offers,
              and more!
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 sm:mb-0 sm:mr-2 flex-1 rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors duration-200 hover:bg-foreground/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Bottom row: Social icons + copyright */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CourseFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
