import React from 'react';
import { Screen } from '../types';

interface TopBarProps {
  currentScreen: Screen;
  onBack?: () => void;
  onMenuClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ currentScreen, onBack, onMenuClick }) => {
  const getTitle = () => {
    switch (currentScreen) {
      case Screen.HOME: return 'משרתים באמונה';
      case Screen.PROGRAMS: return 'תכניות העמותה';
      case Screen.STORIES: return 'סיפורי הצלחה';
      case Screen.CONTACT: return 'צור קשר';
      case Screen.ARTICLE: return 'מאמר מחקר';
      case Screen.ABOUT: return 'אודות וחזון';
      default: return 'משרתים באמונה';
    }
  };

  return (
    <header class="sticky top-0 z-50 bg-navy-deep/80 backdrop-blur-md border-b border-white/10">
      <div class="flex items-center p-4 justify-between max-w-md mx-auto h-16">
        <div class="flex items-center gap-2">
          {currentScreen !== Screen.HOME ? (
            <button onClick={onBack} class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
              <span class="material-symbols-outlined text-white">arrow_forward</span>
            </button>
          ) : (
            <button onClick={onMenuClick} class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
              <span class="material-symbols-outlined text-white">menu</span>
            </button>
          )}
        </div>
        
        <h1 class="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
          {getTitle()}
        </h1>

        <div class="flex items-center justify-end w-10">
          <button class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
            <span class="material-symbols-outlined text-white">search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;