import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Summary from './components/Summary';
import Preview from './components/Preview';
import { useSelector } from 'react-redux';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-all">
      <Navbar />

      {/* ✅ Section with white in light mode and gray in dark mode */}
      <div className="bg-white dark:bg-gray-800 py-8">
        <main className="max-w-4xl mx-auto px-4 space-y-6">
          <TextArea />
          <Summary />
          <Preview />
        </main>
      </div>
    </div>
  );
}

export default App;
