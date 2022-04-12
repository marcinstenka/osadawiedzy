import { createGlobalStyle } from 'styled-components';
import TheBoldFont from './assets/fonts/theboldfont.ttf';
import test from './assets/fonts/roboto-condensed.regular.ttf';
const GlobalStyle = createGlobalStyle`
        
        @font-face{
            font-family: 'the bold font';
            src: url(${TheBoldFont}) format('truetype');
        };
        @font-face{
            font-family: 'test';
            src: url(${test}) format('truetype');
        };
    `;
export default GlobalStyle;
