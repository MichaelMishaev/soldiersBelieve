import React from 'react';
import { Screen } from '../types';

const ArticleScreen: React.FC = () => {
  return (
    <div class="pb-24 animate-fadeIn">
      {/* Hero */}
      <div class="relative h-[40vh] w-full overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKHe1OZSH0B-KKSGzWrPSjtLlRw_LF8LaWatJIAwAJG7DDQHtFxjv8cxVnuIUvWVX2VWl4RstspnRBd1iCp3ulD2zll4rG4Xs-Sm3mElOTCnAnqPWsU7IZ2_K0_E16VCfAfHAu1Vr55-6AOD70o76vLwwdt7E189boSGAVyo63wJcVOYJolK70N0RnDFDAhFV_v-XLiEt6odIHnaHGQb65Mmm9cn3KG9thD0E-KsZBj9BKi903rxDl8sh6UWm8Gwh0_9ZISy5XAj4")' }}></div>
        <div class="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6">
          <div class="flex gap-2 mb-3">
            <span class="bg-primary/20 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase">חברה ופוליטיקה</span>
          </div>
          <h1 class="text-3xl font-black text-white leading-tight mb-4 font-display">השפעת החברה האזרחית על עתיד המדינה: מבט אקדמי</h1>
          
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border border-white/20">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAexvCkePM3jg5Rrf1R9NODpxB__DOl2B5KwZCmEEkNzc8QqxcTYbDXu2-T-P8eBu6QznQMUyCwUn0jK6H7P2WKujTBfJkkdGjgQ82guOPSLiJc05E6xPvAqzRpMnWBO9K4xCxZCy2amjM2HOYjEsBATzJBVDfVA7rL_tP1yLgSwrTVndtW0PtP6dnQQJX8vewU0W782Gn_JMxz6Q0I-JOvJSEbH_DmeWgA7FsPlobjWpYeGa4tAaCViaBfbKJOlnPCdCh_H9XCWU0" alt="Author" class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="text-white font-bold text-sm">ד"ר ארנון לוי</p>
              <p class="text-gray-400 text-xs">12 באוקטובר 2023 • 8 דקות קריאה</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article class="px-6 py-8 text-gray-200 leading-relaxed text-lg font-serif">
        <p class="mb-6 drop-cap">
          החברה האזרחית בישראל מהווה את אחד מעמודי התווך המרכזיים של הדמוקרטיה המקומית. בשנים האחרונות אנו עדים לשינוי משמעותי במבנה הפעילות של עמותות וארגונים ללא מטרת רווח, אשר עוברים תהליך של התמקצעות ודיגיטציה.
        </p>
        
        <p class="mb-8">
          המחקר המעמיק שנערך במכון למדיניות ציבורית חושף כי השפעת המגזר השלישי אינה מצטמצמת רק לסיוע הומניטרי, אלא מהווה כוח מניע בשינויי חקיקה ועיצוב סדר יום חברתי-כלכלי.
        </p>

        <div class="my-8 p-6 bg-navy-card border-r-4 border-secondary rounded-l-xl relative">
          <span class="material-symbols-outlined absolute -top-3 -right-3 text-secondary bg-navy-deep rounded-full text-3xl">format_quote</span>
          <p class="text-xl font-bold text-white italic">
            "עתידה של ישראל תלוי ביכולתנו לבנות גשרים בין המגזרים השונים, כאשר החברה האזרחית משמשת כמלט המחבר ביניהם."
          </p>
        </div>

        <p class="mb-6">
          תהליכי העומק המתרחשים כיום דורשים מאיתנו חשיבה מחודשת על יחסי הגומלין בין המדינה לאזרח. האם המודל הנוכחי מספק את המענה הנדרש לאתגרי המאה ה-21? נראה כי התשובה טמונה בשיתופי פעולה רב-מגזריים.
        </p>
        
        <p>
          לא ניתן להתעלם מהעלייה במעורבות של דור ה-Z בפעילות חברתית דיגיטלית. בניגוד לדורות קודמים, פעילות זו אינה דורשת נוכחות פיזית אלא מתבססת על רשתות השפעה רחבות.
        </p>
      </article>

      {/* Related */}
      <section class="px-6 pt-8 border-t border-white/10 mt-4">
        <h3 class="text-lg font-bold text-white mb-4">מאמרים נוספים</h3>
        <div class="space-y-4">
          <div class="flex gap-4 items-center group">
            <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHDFAOJ8k1xaivruNcJ8XaOHoY9mPwB6Rks-a9OziGHuxhg1AjhFLxJ7-P03lCabKB1kg7YWWLjzyJ3rxhjTyxkGk8E1gEFuF_gRQXOJh5KRj7_m-7A-X1xGA5RAp09cAnDLyzYd_SgRZaa8pdWca7k1RTxddmNOX6dOuf5ZFlhrK4ceyxW3dtBqpFI5IF-dHAoDygP4ymWLb8-C_VHJsP6Pd0dFA7zL6988Ul1UG34n-7gR-JPZtSiQiuD7MkuM_SCSnJTKkPHGU" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 class="text-white font-bold leading-tight mb-1">צדק חברתי בשנת 2024: לאן פנינו?</h4>
              <p class="text-gray-500 text-xs">מאת פרופ׳ שרה כהן</p>
            </div>
          </div>
          
          <div class="flex gap-4 items-center group">
            <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtAf9-4-ne0IHwFg5ykLme2b0rzdNvy8Z2QmuuzWLapnDU7vg3PAwAULexJOb8IDQov111y8pdwG933VfAfpAowOXetG6lDQcSn4IFNQBAeEVz4z-6YBZpMZawzd2PGP5rpNU29TPDgBXKsBSV3vWxfoVcr9-t5rVeWN2EbrXdV54Tr7hj8bqP15OV0_3q_LCR9hd3kFiH25pVjOhrydnT19Jc1Supth_LWsRrSWXs1vjBB_XPhjLsJ_rxegAoE89sTIilibmMXjE" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h4 class="text-white font-bold leading-tight mb-1">תפקיד העמותות בעיצוב מדיניות הרווחה</h4>
              <p class="text-gray-500 text-xs">מאת עו״ד מיכאל לוי</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleScreen;