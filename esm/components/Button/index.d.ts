/// <reference types="react" />
import './index.scss';
interface Button {
    text: string;
    className?: string;
}
declare const Button: ({ text, className }: Button) => JSX.Element;
export default Button;
