import React from 'react';
import '@styles/windowFrame.css'
interface Props {
  children?: React.ReactNode; // Make sure to include this line
}

const WindowFrame: React.FC<Props> = ({ children }) => {
  return (
    <div className="windowFrame">
      {children}
    </div>
  );
};

export default WindowFrame;
