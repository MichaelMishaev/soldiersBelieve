import React from 'react';
import { Screen } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div class="animate-fadeIn pb-24">
      {/* Hero Section */}
      <section class="relative w-full aspect-[4/3] max-h-[450px] overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOdyfaK3zWLp8R-WSAY-q073XphVbZxmm2CY79hsrBl1LxSaj7P55g9D5TweweDPi6nkPcCKUvHojyQwnWsVeDGvA2HXsZnAWaa9gF9srpOPdvuraSj54LgeMn3dOrDB5X0-ob32R0HpvtikU16-yfwAt8I_lPwoDPBVhRtwzwTXasrNlMJNrbTQZQ5YnXXiEj8gn3-WUkdw5KM0FB-34hFXSvIsClD8r0Pp0fUrQhLn33DgkxjjvPcSUpuF1b9YTPTjayIniB3-o")' }}></div>
        <div class="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent"></div>
        
        <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
          <div class="self-start bg-primary/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            ההרשמה פתוחה
          </div>
          <h1 class="text-white text-4xl font-black leading-tight tracking-tight font-display">
            תורה, עוצמה,<br />
            <span class="text-primary">פיקוד עילית.</span>
          </h1>
          <p class="text-gray-300 text-base font-normal leading-relaxed max-w-[90%]">
            הגשר בין מצוינות תורנית להובלה ביחידות המובחרות של צה"ל מתחיל כאן.
          </p>
          <div class="flex gap-3 mt-2">
            <button onClick={() => onNavigate(Screen.PROGRAMS)} class="flex-1 bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
              <span>הצטרפו לנבחרת</span>
              <span class="material-symbols-outlined text-sm">arrow_back</span>
            </button>
            <button onClick={() => onNavigate(Screen.ABOUT)} class="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3.5 rounded-xl hover:bg-white/20 transition-all active:scale-95">
              מי אנחנו
            </button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section class="px-6 py-8">
        <div class="bg-navy-card border border-white/5 rounded-2xl p-6 grid grid-cols-2 gap-y-8">
          <div class="text-center border-l border-white/5">
            <div class="text-3xl font-black text-primary mb-1">5K+</div>
            <div class="text-gray-500 text-[10px] font-bold uppercase tracking-widest">בוגרים</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-black text-secondary mb-1">85%</div>
            <div class="text-gray-500 text-[10px] font-bold uppercase tracking-widest">קצונה ופיקוד</div>
          </div>
          <div class="text-center border-l border-white/5 pt-4 border-t">
            <div class="text-3xl font-black text-white mb-1">12</div>
            <div class="text-gray-500 text-[10px] font-bold uppercase tracking-widest">שנות פעילות</div>
          </div>
          <div class="text-center pt-4 border-t border-white/5">
            <div class="text-3xl font-black text-primary mb-1">100%</div>
            <div class="text-gray-500 text-[10px] font-bold uppercase tracking-widest">ליווי אישי</div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section class="px-6 pb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-white flex items-center gap-2">
            <span class="w-1 h-5 bg-secondary rounded-full block"></span>
            עדכונים מהשטח
          </h2>
          <button onClick={() => onNavigate(Screen.ARTICLE)} class="text-primary text-xs font-bold uppercase tracking-wider">לכל הכתבות</button>
        </div>

        <div class="flex flex-col gap-4">
          <article onClick={() => onNavigate(Screen.ARTICLE)} class="flex gap-4 bg-navy-card p-3 rounded-xl border border-white/5 active:scale-[0.98] transition-transform">
            <div class="w-24 h-24 shrink-0 rounded-lg overflow-hidden relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfhRouY7ZwFIoP46Q0VPFhZRQybotDBMZSnYiR32YqivKSCCNVWPISnWVtGOUK4-I6RGEinJHBgd7cFTqiUhB2_BnCyE_bY9wBlSIjmdaR3w_o07fUvZNtABpQlx136T_9QAL_QmE2QWnBz46o9s4cAe9OeArI5nJ-_KW7pYKOS4dUX2bq5p7v1iMAqhLIS-xOKdK1OOWFbLS4mx54cL9ZVxUw-8d1zdQTaqh1_Ny6d7St5PEqcp-Gw01sbP6YaJo1ru2EB3nt5CE" alt="Conference" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col justify-center flex-1">
              <span class="text-[10px] font-bold text-secondary mb-1">12 מרץ, 2024</span>
              <h3 class="text-sm font-bold text-white leading-tight mb-2 line-clamp-2">כנס בוגרים שנתי: בונים את המנהיגות של המחר</h3>
              <div class="flex items-center gap-2 text-gray-500 text-xs mt-auto">
                <span class="material-symbols-outlined text-[14px]">visibility</span> 1.2k
              </div>
            </div>
          </article>

          <article onClick={() => onNavigate(Screen.ARTICLE)} class="flex gap-4 bg-navy-card p-3 rounded-xl border border-white/5 active:scale-[0.98] transition-transform">
            <div class="w-24 h-24 shrink-0 rounded-lg overflow-hidden relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4DF3CG-BKsppe3jMV18L3r-ScwisILDdCf94u0PajyorlPbrjwgFgIcrUR4ki1UjLU6KZoXbT4YXUKvrU9QjSiepI6gKyyuRoE53nTr6FAaR7hxWEmNzaNrHNoJeQMRWhj2aiEswya0IJiF9YH4r170-UWPCuqH02PU49_f1Iq5PQYnwCSeE56Aqdykj-A8zEnh4MYsDJ5n3QjXECHcKZfnFrqalELfGh_PmJ-X5GbGlb7yHvqkukL6q7KOyh-rdVdD9l-7uwHP4" alt="Torah" class="w-full h-full object-cover" />
            </div>
            <div class="flex flex-col justify-center flex-1">
              <span class="text-[10px] font-bold text-secondary mb-1">05 מרץ, 2024</span>
              <h3 class="text-sm font-bold text-white leading-tight mb-2 line-clamp-2">סדרת שיעורים חדשה: הלכה ומעשה בשירות הקרבי</h3>
              <div class="flex items-center gap-2 text-gray-500 text-xs mt-auto">
                <span class="material-symbols-outlined text-[14px]">visibility</span> 850
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section class="px-6 py-8">
        <div class="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-8 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJvJKtrO4BXVq1r6q3cjVaBY3vU-NxIiO2eoCytaebpxsGt3wzVEnVs4P5MS8QDEZbE2N0urOxC0iF27zILS6cPx7q93qnfTsL5ESlklLqCroKl6bpCrnJ2924kXMikLGuh09oAga3F0JuVfhW4F02UVwrHrrrIl8ssu7tsu4cLBF7ZDNnkD6FAlGpsBcJIm57xYg6GkL-KAcPL9zPelLQ2dkwMgyNhDu6pxVx8CNcJHNEUwFyMomeeHF8wbb6COBngjwF46atVzM')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div class="relative z-10">
            <span class="material-symbols-outlined text-secondary text-5xl mb-4">rocket_launch</span>
            <h2 class="text-2xl font-black text-white mb-2">מוכנים לצעד הבא?</h2>
            <p class="text-white/80 text-sm mb-6 max-w-[250px] mx-auto">אל תתפשרו על השירות שלכם. הצטרפו לנבחרת שמובילה את הערכים במדינה.</p>
            <button onClick={() => onNavigate(Screen.CONTACT)} class="w-full bg-white text-primary font-black py-4 rounded-xl shadow-xl active:scale-95 transition-transform">
              דברו איתנו עכשיו
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;