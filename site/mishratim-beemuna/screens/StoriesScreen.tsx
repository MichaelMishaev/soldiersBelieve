import React from 'react';
import { Screen } from '../types';

interface StoriesScreenProps {
  onNavigate: (screen: Screen) => void;
}

const StoriesScreen: React.FC<StoriesScreenProps> = ({ onNavigate }) => {
  return (
    <div class="pb-24 animate-fadeIn">
      {/* Featured Video */}
      <div class="relative w-full aspect-video bg-black shadow-2xl">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-KTmsy13y9TYfRsA7OHKKEwy7slmCEG4sb50l0HVBlBb7KjVc0J1nMN0K9rsX7_oiNilR0xQHLM0enOA-qB8SAeTR9tOwJPqOWwf5X6MX-8soRCydvQ2ZxDUX6-k_C9Bwu2aCIDe4HaEfVwZcBCbua1uC2IVsdVdcOjXlOs3IREcwxTA_YkNDHT8qPdoDl8rCA8xhXiooUh0aYJv-VSxogjnCNR9SpVV67Zc7Fr5MdE6NiAts6lrG87M7Od-Ke92HqOxwKG7KtpU" alt="Featured Story" class="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div class="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <button class="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/40 hover:scale-105 transition-transform">
            <span class="material-symbols-outlined text-4xl">play_arrow</span>
          </button>
        </div>
        <div class="absolute bottom-4 right-4 text-white">
          <span class="bg-primary text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">סיפור נבחר</span>
          <h2 class="text-xl font-bold">מלוחם בשלדג להייטק: הסיפור של יובל</h2>
        </div>
      </div>

      <div class="px-6 py-8">
        <h3 class="text-xl font-bold text-white mb-6 border-r-4 border-secondary pr-3">בוגרים מספרים</h3>
        
        <div class="space-y-6">
          <div class="bg-navy-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group active:scale-[0.99] transition-transform">
            <div class="relative h-48">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvEidWg5jMRkowcX3ddkI_qGnq3EkY0QpwGt2u9AiyIXlEFTTYWCxMvQzCeSvWq7265DxIXARItIn9FSQcGWIvxopdKF5QgvOHgD-vN4g-yoiwj31N0L62XQavydSMI_PYSUXdBaGS9uZgq9jKJMNETH3vLaba1Gl9HMD0Bs0VkK7zwvPkznnYbih7bAQWVKLG0QMtNA8GSr1Et2oRekwL4hvmPG8Lz8X8a36HrRk0rHeYQevaEEcq6-DXYM1Sj12X5O55SMPTaU8" alt="Story 1" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="material-symbols-outlined text-white text-4xl">play_circle</span>
              </div>
            </div>
            <div class="p-5">
              <h4 class="text-lg font-bold text-white mb-2">עדי ל., יחידת מודיעין 8200</h4>
              <p class="text-gray-400 text-sm italic mb-4">"הליווי הצמוד של העמותה נתן לי ביטחון לעשות את הצעד הראשון בעולם היזמות."</p>
              <div class="flex items-center justify-between text-xs text-gray-500">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 3:45 דקות</span>
                <button class="text-primary font-bold">לצפייה</button>
              </div>
            </div>
          </div>

          <div class="bg-navy-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group active:scale-[0.99] transition-transform">
            <div class="relative h-48">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9wf1Q0PVH4NwwswfOdGW3Xi373UoqKAuZzMJdNKE2cHI102j_cV3Omsom6_sjZr0HswcoO6VHgNoo5YEwQvNT6o86JQmlXgYmZYqt6atwhaQVqH-qVPlvnj8zLJnQNUSHkt9lJOURGOD8feJPwUrzWOfYvIaKSEO_aV86158uEQXe-cokC_SAMmDsz5qF_8BGBHZK5gB-cK5YgZvblnQp-FwR6Qd7efSBbfLMgs_FTMM7VQSDI0adqmmYHGpYRDBAn_I9Tov_lDc" alt="Story 2" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="material-symbols-outlined text-white text-4xl">play_circle</span>
              </div>
            </div>
            <div class="p-5">
              <h4 class="text-lg font-bold text-white mb-2">רועי מ., חטיבת גולני</h4>
              <p class="text-gray-400 text-sm italic mb-4">"המעבר מהשטח למשרד היה מאתגר, אבל בזכות המנטור שלי מצאתי את הדרך שלי."</p>
              <div class="flex items-center justify-between text-xs text-gray-500">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 5:12 דקות</span>
                <button class="text-primary font-bold">לצפייה</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesScreen;