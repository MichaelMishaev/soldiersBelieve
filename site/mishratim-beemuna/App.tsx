import React, { useState } from 'react';
import { Screen } from './types';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import ProgramsScreen from './screens/ProgramsScreen';
import StoriesScreen from './screens/StoriesScreen';
import ContactScreen from './screens/ContactScreen';
import ArticleScreen from './screens/ArticleScreen';
import AboutScreen from './screens/AboutScreen';
import SuccessScreen from './screens/SuccessScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);

  const handleNavigate = (screen: Screen) => {
    window.scrollTo(0, 0);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <HomeScreen onNavigate={handleNavigate} />;
      case Screen.PROGRAMS:
        return <ProgramsScreen onNavigate={handleNavigate} />;
      case Screen.STORIES:
        return <StoriesScreen onNavigate={handleNavigate} />;
      case Screen.CONTACT:
        return <ContactScreen onSuccess={() => handleNavigate(Screen.SUCCESS)} />;
      case Screen.ARTICLE:
        return <ArticleScreen />;
      case Screen.ABOUT:
        return <AboutScreen onNavigate={handleNavigate} />;
      case Screen.SUCCESS:
        return <SuccessScreen onNavigate={handleNavigate} />;
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  // Screens that should hide the standard navigation bars
  const isFullScreen = currentScreen === Screen.SUCCESS;

  return (
    <div class="min-h-screen bg-navy-deep text-white font-sans selection:bg-primary/30">
      {!isFullScreen && (
        <TopBar 
          currentScreen={currentScreen} 
          onBack={() => handleNavigate(Screen.HOME)}
          onMenuClick={() => handleNavigate(Screen.ABOUT)}
        />
      )}
      
      <main class="w-full max-w-md mx-auto relative min-h-screen bg-navy-deep shadow-2xl">
        {renderScreen()}
      </main>

      {!isFullScreen && (
        <BottomNav 
          currentScreen={currentScreen} 
          onNavigate={handleNavigate} 
        />
      )}
    </div>
  );
};

export default App;