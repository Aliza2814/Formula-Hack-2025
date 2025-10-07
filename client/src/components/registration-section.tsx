'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    teamName: '',
    teamSize: '1',
    email: '',
    members: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-24 bg-card-light" id="register">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold text-accent">
            Join the <span className="text-primary">Grid</span>
          </h2>
          <p className="mt-4 text-lg text-text-light/70 max-w-2xl mx-auto">
            Assemble your crew and secure your spot. Teams can have up to 4 members.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-background-light p-8 md:p-12 rounded-xl shadow-2xl border border-secondary-light">
          <h3 className="font-display text-2xl font-bold text-accent mb-6">
            Your Registration Progress
          </h3>
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm font-semibold text-accent">
              <span>Progress: 75% Complete</span>
              <span>Step 3 of 4</span>
            </div>
            <div className="w-full bg-secondary-light rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-xs mt-2 text-text-light/70">
              <span>Team Info</span>
              <span>Contact Info</span>
              <span>Member Details</span>
              <span>Confirmation</span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-accent mb-2" htmlFor="team-name">
                  Team Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:ring-primary focus:border-primary transition"
                  id="teamName"
                  placeholder="e.g., Red-Bullish Coders"
                  type="text"
                  value={formData.teamName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-accent mb-2" htmlFor="team-size">
                  Team Size
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:ring-primary focus:border-primary transition"
                  id="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold text-accent mb-2" htmlFor="email">
                Team Captain&apos;s Email
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:ring-primary focus:border-primary transition"
                id="email"
                placeholder="you@example.com"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-bold text-accent mb-2" htmlFor="members">
                Team Member Emails (comma separated)
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-secondary-light focus:ring-primary focus:border-primary transition"
                id="members"
                placeholder="member1@example.com, member2@example.com"
                rows={3}
                value={formData.members}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg text-lg hover:opacity-90 transition-opacity flex items-center justify-center"
              type="submit"
            >
              <Send className="mr-2" size={20} />
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}