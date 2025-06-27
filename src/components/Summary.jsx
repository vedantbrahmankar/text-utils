import React from 'react';
import { useSelector } from 'react-redux';

function Summary() {
  const text = useSelector((state) => state.text.content);
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  const charsWithoutSpaces = text.replace(/\s+/g, '').length;
  const readTime = (words / 200).toFixed(2);

  return (
    <div className="space-y-1 text-sm">
      <h2 className="text-lg font-semibold mb-2">Text Summary</h2>
      <p><strong>Words:</strong> {words}</p>
      <p><strong>Characters:</strong> {chars}</p>
      <p><strong>Characters (no spaces):</strong> {charsWithoutSpaces}</p>
      <p><strong>Estimated Reading Time:</strong> {readTime} minutes</p>
    </div>
  );
}

export default Summary;
