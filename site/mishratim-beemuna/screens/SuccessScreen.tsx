import React from 'react';
import { Screen } from '../types';

interface SuccessScreenProps {
  onNavigate: (screen: Screen) => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onNavigate }) => {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center px-6 relative animate-fadeIn bg-navy-deep">
      {/* Background Effect */}
      <div class="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDP25VeWgpdLuDWRED9mg4LoPIpPM3K48xOO5YrFTBIJam95V2MfYcIcOVB3T73eeZKh3fWJXT16-1fOcVKwQ6aSGRqFxim5CVGJ0Q6uTo0bIhklqHkahq6j5WFGL_-JudBB4PNN1XG9SF5_lP5pnHdkTdamfG7cPxkLKaM16uOKHotXMlKeCqrsUKmsnaos_yNxXvY5GQ6dblfM9E6tMMTGam6YEOSx3MuKMLlb7j0nzzALyXETOlgit_d_9QaVHOrMHkqs84bNw4')] bg-cover bg-center opacity-30"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/80 to-navy-deep"></div>

      <div class="relative z-10 w-full max-w-sm bg-navy-card/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center shadow-2xl">
        <div class="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-secondary/50">
          <span class="material-symbols-outlined text-secondary text-5xl">check_circle</span>
        </div>
        
        <h2 class="text-3xl font-black text-white mb-4">תודה רבה!</h2>
        <p class="text-gray-300 text-lg leading-relaxed mb-8">
          הפנייה שלך התקבלה בהצלחה. נציג מטעמנו יחזור אליך בהקדם האפשרי.
        </p>

        <div class="w-16 h-1 bg-secondary rounded-full mx-auto mb-8 opacity-50"></div>

        <button onClick={() => onNavigate(Screen.HOME)} class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg mb-4 transition-all active:scale-95">
          חזרה לעמוד הבית
        </button>
        
        <button onClick={() => onNavigate(Screen.ARTICLE)} class="w-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold py-4 rounded-xl transition-all active:scale-95">
          קראו עוד בבלוג
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;