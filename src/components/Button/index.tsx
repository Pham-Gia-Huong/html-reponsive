import React from 'react';
import './index.scss';
interface Button {
  text: string;
  className?: string;
}
const Button = ({text, className = ''}: Button) => {
  return (
    <a className={`btn ${className}`} href="#">
      {text}
    </a>
  );
};

export default Button;
