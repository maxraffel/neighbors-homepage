"use client";

import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Tagline } from "@/components/tagline";
import { useState } from "react";

export function ContactSection4() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');
    
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  return (
    <section
      className="bg-background py-16 md:py-0"
      aria-labelledby="contact-heading"
      id="contact"
    >
      <div className="flex flex-col gap-8 md:flex-row md:gap-0">
        {/* Left Column */}
        <div className="flex flex-1 items-center justify-center px-6 py-0 md:py-24">
          <div className="flex max-w-md flex-col gap-8">
            {/* Section Title */}
            <div className="section-title-gap-lg mx-auto flex flex-col">
              {/* Tagline */}
              <Tagline>Contact us</Tagline>
              {/* Main Heading */}
              <h1 id="contact-heading" className="heading-lg">
                Get in touch
              </h1>
              {/* Description */}
              <p className="text-muted-foreground">
                Let&apos;s start a conversation about your financial future. Whether you&apos;re planning for retirement, growing your investments, or simply looking for clarity, we&apos;re here to listen and understand your unique goals.
                <br></br><br></br>At Neighbors Wealth Management, we believe every client deserves guidance that feels personal and approachable. Reach out today, and together we&apos;ll take the first step toward building lasting wealth and peace of mind.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col gap-4">
              {/* Phone Link */}
              <Link href="tel:+18632247471" className="flex items-start gap-3 hover:underline">
                <div className="pt-0.5">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <span className="text-card-foreground text-base leading-6 font-medium">
                  (863) 224-7471
                </span>
              </Link>

              {/* Email Link */}
              <Link href="mailto:scott@neighborswealthmgmt.com" className="flex items-start gap-3 hover:underline">
                <div className="pt-0.5">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <span className="text-card-foreground text-base leading-6 font-medium">
                  scott@neighborswealthmgmt.com
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Separator */}
        <Separator className="block md:hidden" />

        {/* Right Column */}
        <div className="md:bg-muted flex flex-1 flex-col items-center justify-center px-6 py-0 md:py-24">
          {/* Contact Form */}
          <form
            className="flex w-full max-w-md flex-col gap-5 md:gap-6"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name"
                required
                aria-required="true"
                className="bg-background"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                aria-required="true"
                className="bg-background"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message"
                className="bg-background min-h-[106px]"
                required
                aria-required="true"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="text-green-600 text-sm font-medium">
                Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="text-red-600 text-sm font-medium">
                Error sending message. Please try again.
              </div>
            )}

            {/* Privacy Policy Checkbox */}
            {/* <div className="flex items-center gap-2">
              <Checkbox
                id="privacy"
                required
                aria-required="true"
                className="bg-background"
              />
              <Label
                htmlFor="privacy"
                className="text-muted-foreground inline leading-tight font-normal"
              >
                By selecting this you agree to our{" "}
                <Link href="#" className="text-foreground underline">
                  Privacy Policy
                </Link>
                .
              </Label>
            </div> */}

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
