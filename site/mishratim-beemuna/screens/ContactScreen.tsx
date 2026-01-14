import React, { useState } from 'react';
import { Screen } from '../types';

interface ContactScreenProps {
  onSuccess: () => void;
}

const ContactScreen: React.FC<ContactScreenProps> = ({ onSuccess }) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'donate'>('contact');
  const [amount, setAmount] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div class="pb-24 animate-fadeIn px-4 pt-6">
      <div class="flex bg-navy-card p-1 rounded-xl mb-8 border border-white/5">
        <button 
          onClick={() => setActiveTab('contact')}
          class={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${activeTab === 'contact' ? 'bg-primary text-white shadow-lg' : 'text-gray-400'}`}
        >
          צור קשר
        </button>
        <button 
          onClick={() => setActiveTab('donate')}
          class={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${activeTab === 'donate' ? 'bg-primary text-white shadow-lg' : 'text-gray-400'}`}
        >
          תרומה
        </button>
      </div>

      {activeTab === 'contact' ? (
        <div class="space-y-6">
          <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-white mb-2">צור איתנו קשר</h1>
            <p class="text-gray-400 text-sm">אנחנו כאן בשבילך לכל שאלה ועניין. מענה תוך 24 שעות.</p>
          </div>

          <form onSubmit={handleSubmit} class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-300">שם מלא</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute right-3 top-3.5 text-gray-500">person</span>
                <input type="text" required class="w-full bg-navy-card border border-white/10 rounded-xl py-3 pr-10 pl-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="ישראל ישראלי" />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-300">טלפון נייד</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute right-3 top-3.5 text-gray-500">smartphone</span>
                <input type="tel" required class="w-full bg-navy-card border border-white/10 rounded-xl py-3 pr-10 pl-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="050-0000000" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-300">נושא הפנייה</label>
              <div class="relative">
                <select class="w-full bg-navy-card border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                  <option>בירור זכויות חיילים</option>
                  <option>תמיכה רוחנית</option>
                  <option>רישום לתכנית</option>
                  <option>אחר</option>
                </select>
                <span class="material-symbols-outlined absolute left-3 top-3.5 text-gray-500 pointer-events-none">expand_more</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-300">כיצד נוכל לעזור?</label>
              <textarea rows={4} class="w-full bg-navy-card border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600" placeholder="כתוב כאן את הודעתך..."></textarea>
            </div>

            <button type="submit" class="w-full bg-secondary hover:bg-yellow-600 text-navy-deep font-black text-lg py-4 rounded-xl shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 mt-4">
              <span>שלח הודעה</span>
              <span class="material-symbols-outlined rtl:rotate-180">send</span>
            </button>
          </form>
        </div>
      ) : (
        <div class="space-y-6">
          <div class="relative h-40 rounded-xl overflow-hidden mb-6">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKzp-QFbNLgnpXHcxBqhT0YP-jGQ3pKtT4LSxyZEsayZqo33hfJsry1VUUKdpvAqLYq6Sl6w0lXyA2itC-oSJukQgPMVb-Zj80X299usoORjR_cEkAwIcCG0B6yJwgPZfsKc74nQcVVKmZQZg7g68BmH7HqoCOofHeQeDm8THD8ZIXvHYXS5kbJxJ_fIexCaClYYVyTzU26h2SotbImAlq8YJ-_CoQ54cWkZWebpULNXDHtdSQbBogE7BnVfalpRrGRliyq-ob7V0" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
              <h2 class="text-2xl font-bold text-white text-center px-4">מחזקים את הרוח בקו הראשון</h2>
            </div>
          </div>

          <div class="bg-navy-card p-4 rounded-xl border border-white/5">
            <div class="flex justify-between items-end mb-2">
              <span class="text-gray-400 text-xs">יעד: ₪100,000</span>
              <span class="text-primary font-bold text-lg">₪65,000</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5 mb-2">
              <div class="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p class="text-xs text-gray-500">נותרו עוד 35,000 ₪ להשלמת היעד</p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            {[100, 200, 500, 1000].map((val) => (
              <button 
                key={val}
                onClick={() => setAmount(val)}
                class={`p-4 rounded-xl border flex flex-col items-center gap-1 transition-all ${amount === val ? 'border-primary bg-primary/10 text-white' : 'border-white/10 bg-navy-card text-gray-300 hover:border-white/30'}`}
              >
                <span class="text-xl font-bold">₪{val}</span>
                <span class="text-[10px] text-gray-500">תרומה חד פעמית</span>
              </button>
            ))}
          </div>

          <button onClick={onSuccess} class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 mt-4">
            <span>לתרומה מאובטחת</span>
            <span class="material-symbols-outlined">favorite</span>
          </button>
          
          <div class="flex justify-center gap-4 text-gray-500 opacity-60">
             <span class="material-symbols-outlined text-2xl">lock</span>
             <span class="text-xs self-center">SSL מאובטח</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactScreen;