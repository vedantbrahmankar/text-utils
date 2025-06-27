// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleTheme } from '../redux/themeSlice';

// function Navbar() {
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.theme.darkMode);

//   return (
//     <nav className="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700">
//       <h1 className="text-xl font-bold">Text Utils</h1>
//       <button
//         onClick={() => dispatch(toggleTheme())}
//         className="btn"
//       >
//         {darkMode ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center gap-6 text-lg font-semibold">
        <span className="text-xl font-bold text-blue-400">TextUtils</span>
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About us</a>
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => dispatch(toggleTheme())}
          className="toggle-checkbox hidden"
        />
        <span className="text-sm">Enable Light mode</span>
        <div className="w-10 h-5 bg-gray-600 rounded-full p-1 flex items-center">
          <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${darkMode ? 'translate-x-5' : ''}`}></div>
        </div>
      </label>
    </nav>
  );
}

export default Navbar;
