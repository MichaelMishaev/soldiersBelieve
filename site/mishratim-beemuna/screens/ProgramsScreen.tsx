import React from 'react';
import { Screen, Program } from '../types';

interface ProgramsScreenProps {
  onNavigate: (screen: Screen) => void;
}

const programs: Program[] = [
  {
    id: '1',
    title: 'מכינה קדם-צבאית',
    description: 'שנה של צמיחה אישית, לימוד מעמיק והכנה פיזית ומנטלית לשירות קרבי משמעותי.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbHSJiSaO0D5PcD0sBVLsiS1SLr9dPfF-u_cPFmv9aqi4SXJwx6cGN_3PTsvqRPIAtqYp7PIZuZsqcgG3SeRa56NEBVTIiIPEc4Ws7CV-r8mF81HDVwp68ZxhSEPeF2rXblPYj5jOhg2E4IyFIjgomwOkg43IzJvRpGKiOLooPHhlhSAcMOOG81GF4Niigp6Bk4BEYNOBUq7eSDyPW7EF9Ph8yZi-tJAvHTUswSJ5L1at2onkIRCSe2-6EVW4C-R49-olf7dW8zjg',
    tag: 'קדם-צבאי',
    features: ['בוגרי כיתה י"ב', 'הכנה לגיבושים', 'לימוד אמונה']
  },
  {
    id: '2',
    title: 'פרויקט "קודש"',
    description: 'שילוב טכנולוגי עילית עם סדר יום תורני. מיועד לבעלי יכולות אנליטיות גבוהות.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0dunkf3og8FapfHfxioNIlpre0o9zj8K5FUKRJgd4bTkW7lhahpMsBXWKi-L8G1DZFG7-zdZwIa2mN08y7Ic1qp8l5Y2YGsjnWPc5Id3hW5vVeQwHLwD8xgLmijWgX4banBZeEW8VAQC1xnJcHA6wlAomMnQKqajavYVYMhm5wSRO4jeTndb_xQ81kuhkwExUeyFipUqk3v5H4XQYp2ZBrzYVnNzELrLnKsh24MfgkHS3Toc-V1Rxa_g9BkLMBryS8ZZN1azhD0g',
    tag: 'טכנולוגי',
    features: ['פרופיל 64+', '5 יח"ל מתמטיקה', 'סייבר וטכנולוגיה']
  },
  {
    id: '3',
    title: 'ישיבת ההסדר',
    description: 'שילוב קלאסי של שירות צבאי מלא עם לימוד תורה ברמה גבוהה בישיבה.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW8HQdF4Gi15P8CRmLARn3pbgGKVC_2zLUrVelU8rM6x6TLoqMppFsgFOUhe4XL2z4RjDTKNWM9EgyCNlL7GkjJAGWX5LLZFo8JRV49iK7oFt0Mfmg8VwJz3nkhMNyh9lTWPlszXct4U85FjswOe_wozedkeKtWARedQCrtrSI6fPZpoyjw0PImhTJTmncOTX8N_5da1boTxAkR23QD1xYL97SSzuQSIO010pZ-ivMvOAfKjy3t_wJ6oYf_uUBypPzmvrOx1eFO38',
    tag: 'מסלול הסדר',
    features: ['שירות משולב', 'ליווי רוחני צמוד', 'קהילה חזקה']
  }
];

const ProgramsScreen: React.FC<ProgramsScreenProps> = ({ onNavigate }) => {
  return (
    <div class="px-4 pt-6 pb-24 animate-fadeIn">
      <div class="mb-6">
        <h2 class="text-2xl font-black text-white mb-2">המסלולים שלנו</h2>
        <p class="text-gray-400 text-sm">מגוון מסלולים ייחודיים המשלבים שירות משמעותי ולימוד תורה.</p>
      </div>

      <div class="flex gap-2 overflow-x-auto hide-scrollbar mb-6 pb-2">
        <button class="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold whitespace-nowrap shadow-lg shadow-primary/30">הכל</button>
        <button class="px-4 py-2 bg-navy-card border border-white/10 text-gray-300 rounded-full text-xs font-bold whitespace-nowrap">קדם-צבאי</button>
        <button class="px-4 py-2 bg-navy-card border border-white/10 text-gray-300 rounded-full text-xs font-bold whitespace-nowrap">במהלך שירות</button>
        <button class="px-4 py-2 bg-navy-card border border-white/10 text-gray-300 rounded-full text-xs font-bold whitespace-nowrap">בוגרים</button>
      </div>

      <div class="space-y-6">
        {programs.map((program) => (
          <div key={program.id} class="bg-navy-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group">
            <div class="relative h-48 overflow-hidden">
              <img src={program.image} alt={program.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-card via-transparent to-transparent"></div>
              <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <span class="text-xs font-bold text-white uppercase tracking-wider">{program.tag}</span>
              </div>
            </div>
            
            <div class="p-6">
              <h3 class="text-2xl font-black text-white mb-2">{program.title}</h3>
              <p class="text-gray-400 text-sm mb-6 leading-relaxed">{program.description}</p>
              
              <div class="bg-white/5 rounded-xl p-4 mb-6">
                <ul class="space-y-2">
                  {program.features?.map((feature, idx) => (
                    <li key={idx} class="flex items-center gap-2 text-sm text-gray-300">
                      <span class="material-symbols-outlined text-secondary text-base">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => onNavigate(Screen.CONTACT)} class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                <span>לפרטים והרשמה</span>
                <span class="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsScreen;