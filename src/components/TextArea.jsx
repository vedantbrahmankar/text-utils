import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../redux/textSlice';

function TextArea() {
  const text = useSelector((state) => state.text.content);
  const dispatch = useDispatch();

  const handleChange = (e) => dispatch(setText(e.target.value));

  const actions = {
    toUpper: () => dispatch(setText(text.toUpperCase())),
    toLower: () => dispatch(setText(text.toLowerCase())),
    clear: () => dispatch(setText('')),

    joinHyphen: () => {
      const words = text.trim().split(/\s+/);
      dispatch(setText(words.join('-')));
    },

    removeHyphen: () => {
      dispatch(setText(text.replace(/-/g, ' ')));
    },

    removeDoubleSpace: () => {
      dispatch(setText(text.replace(/\s+/g, ' ').trim()));
    },

    extractEmails: () => {
      const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi);
      dispatch(setText(emails?.join('\n') || 'No emails found.'));
    },

    download: () => {
      const blob = new Blob([text], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'output.txt';
      a.click();
    },
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Enter your Text to Analyze below</h2>

      <textarea
        value={text}
        onChange={handleChange}
        className="w-full h-40 p-4 border border-gray-300 dark:border-gray-600 rounded shadow bg-white dark:bg-gray-800 dark:text-white resize-none"
        placeholder="Enter your Text to Analyze below"
      />


      <div className="flex flex-wrap gap-2 justify-center sm:flex-row flex-col items-center">
  {Object.entries(actions).map(([key, func]) => (
    <button
      key={key}
      onClick={func}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition w-full sm:w-auto text-center"
    >
      {key.replace(/([A-Z])/g, ' $1')}
    </button>
  ))}
</div>

    </div>
  );
}

export default TextArea;
