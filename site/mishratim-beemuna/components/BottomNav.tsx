import React from 'react';
import { Screen, NavItem } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const navItems: NavItem[] = [
  { id: Screen.HOME, label: 'ראשי', icon: 'home' },
  { id: Screen.PROGRAMS, label: 'תכניות', icon: 'school' },
  { id: Screen.STORIES, label: 'סיפורים', icon: 'auto_stories' },
  { id: Screen.ABOUT, label: 'אודות', icon: 'info' },
  { id: Screen.CONTACT, label: 'צור קשר', icon: 'chat_bubble' },
];

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  return (
    <nav class="fixed bottom-0 left-0 right-0 bg-navy-deep/90 backdrop-blur-xl border-t border-white/10 pb-safe z-50">
      <div class="flex justify-around items-center px-2 py-3 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              class={`flex flex-col items-center gap-1 min-w-[60px] transition-colors ${
                isActive ? 'text-primary' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span class={`material-symbols-outlined text-[24px] ${isActive ? 'filled' : ''}`}>
                {item.icon}
              </span>
              <span class="text-[10px] font-bold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;