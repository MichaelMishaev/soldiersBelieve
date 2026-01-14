import React from 'react';
import { Screen } from '../types';

interface AboutScreenProps {
  onNavigate: (screen: Screen) => void;
}

const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  return (
    <div class="pb-24 animate-fadeIn">
      {/* Header Image */}
      <div class="relative h-64 w-full">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFFzHhS7AA7b1DSPZacBKsx4nPoXEbiJsI016lFOaYKJKoDjSgHxSvWwOkSh5tpt60EraOwmXwr7oulc73Ge-ncUFVGpDugSpFD27O587jB31OLPqDaM3I3ZczRPBGMo7FBtS4l-cAz5aPiE8gd1ITQSHQgVvmBnQUPn4d5U6JIyhlZNzllllvTEIBmX2uRxNVBnQ51EjEzcChccSGTKNph0gnWwVIG7sM8N8MRukUOX8B8CZayapKNovCrJ6lQgBpZrlRDdYGKio" alt="Vision" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent"></div>
        <div class="absolute bottom-6 right-6">
          <span class="bg-secondary text-navy-deep text-xs font-bold px-2 py-1 rounded mb-2 inline-block">החזון שלנו</span>
          <h1 class="text-3xl font-black text-white leading-tight">מחברים בין עולם התורה<br/>לשירות משמעותי</h1>
        </div>
      </div>

      <div class="px-6 py-8">
        <h2 class="text-primary text-sm font-bold uppercase tracking-widest mb-4">מי אנחנו</h2>
        <p class="text-xl font-bold text-white mb-4 leading-relaxed">
          "העמותה פועלת ליצירת גשר איתן בין הישיבה לצבא, מתוך אמונה ששירות צבאי משמעותי הוא חלק בלתי נפרד מעבודת השם."
        </p>
        <p class="text-gray-400 text-sm leading-relaxed mb-8">
          אנו מלווים את הנוער הדתי משלב ההתלבטות, דרך המיונים ועד לשירות פעיל ביחידות המובחרות, תוך שמירה על הזהות התורנית והעמקתה.
        </p>

        {/* Values Grid */}
        <div class="grid grid-cols-2 gap-4 mb-10">
          <div class="bg-navy-card p-4 rounded-xl border border-white/5">
            <div class="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-3">
              <span class="material-symbols-outlined">menu_book</span>
            </div>
            <h3 class="font-bold text-white mb-1">תורה ועשייה</h3>
            <p class="text-xs text-gray-500">שילוב לימוד עם שירות פעיל</p>
          </div>
          <div class="bg-navy-card p-4 rounded-xl border border-white/5">
            <div class="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-3">
              <span class="material-symbols-outlined">verified_user</span>
            </div>
            <h3 class="font-bold text-white mb-1">שירות משמעותי</h3>
            <p class="text-xs text-gray-500">ליווי מקצועי לאורך הדרך</p>
          </div>
          <div class="bg-navy-card p-4 rounded-xl border border-white/5">
            <div class="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-3">
              <span class="material-symbols-outlined">military_tech</span>
            </div>
            <h3 class="font-bold text-white mb-1">מנהיגות יהודית</h3>
            <p class="text-xs text-gray-500">צמיחה פיקודית וערכית</p>
          </div>
          <div class="bg-navy-card p-4 rounded-xl border border-white/5">
            <div class="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-3">
              <span class="material-symbols-outlined">groups</span>
            </div>
            <h3 class="font-bold text-white mb-1">אחריות חברתית</h3>
            <p class="text-xs text-gray-500">תרומה לביטחון ולחוסן</p>
          </div>
        </div>

        {/* Why Here */}
        <div class="bg-white/5 rounded-2xl p-6 border-y border-white/10">
          <h2 class="text-2xl font-bold text-white mb-6">מדוע אנחנו כאן?</h2>
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">1</div>
                <div class="w-0.5 h-full bg-primary/30 mt-1"></div>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">האתגר הדתי</h4>
                <p class="text-sm text-gray-400">המעבר מהישיבה לצבא מזמן קשיים רוחניים הדורשים מענה מותאם.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">2</div>
                <div class="w-0.5 h-full bg-primary/30 mt-1"></div>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">מיצוי פוטנציאל</h4>
                <p class="text-sm text-gray-400">נוער איכותי לעיתים מוותר על יחידות שדה מחשש לאיבוד הזהות.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-8 h-8 rounded-full bg-secondary text-navy-deep flex items-center justify-center font-bold text-sm">3</div>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">הפתרון שלנו</h4>
                <p class="text-sm text-gray-400">קהילה תומכת, שיעורי תורה וליווי אישי של רבנים וקצינים.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;