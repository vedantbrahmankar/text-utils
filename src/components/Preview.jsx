// import React from 'react';
// import { useSelector } from 'react-redux';

// function Preview() {
//   const text = useSelector((state) => state.text.content);

//   return (
//     <div className="space-y-2">
//       <h2 className="text-lg font-semibold">Preview</h2>
//       {text.trim() === '' ? (
//         <p className="italic text-gray-500 dark:text-gray-400">Nothing to preview!</p>
//       ) : (
//         // <div className="border border-gray-300 dark:border-gray-700 p-4 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white whitespace-pre-wrap break-words overflow-auto max-h-[400px]">
//         //   {text}
//         // </div>
//         <div className="border border-gray-500 p-4 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white whitespace-pre-wrap break-words w-full shadow">
//   {text}
// </div>

//       )}
//     </div>
//   );
// }

// export default Preview;
import React from 'react';
import { useSelector } from 'react-redux';

function Preview() {
  const text = useSelector((state) => state.text.content);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Live Preview</h2>

      {text.trim() === '' ? (
        <p className="italic text-gray-500">Nothing to preview!</p>
      ) : (
        <div className="border p-4 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white whitespace-pre-wrap shadow-sm">
          {text}
        </div>
      )}
    </div>
  );
}

export default Preview;
