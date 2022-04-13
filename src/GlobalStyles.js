import { createGlobalStyle } from 'styled-components';
import TheBoldFont from './assets/fonts/theboldfont.ttf';
const GlobalStyle = createGlobalStyle`
        
        @font-face{
            font-family: 'the bold font';
            src: url(${TheBoldFont}) format('truetype');
        };
    `;
export default GlobalStyle;
