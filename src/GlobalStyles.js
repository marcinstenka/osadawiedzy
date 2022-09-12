import { createGlobalStyle } from 'styled-components';
import TheBoldFont from './assets/fonts/theboldfont.ttf';
import RegisterTypeArrow from './assets/img/registerTypeArrow.svg';

const GlobalStyle = createGlobalStyle`
        
        @font-face{
            font-family: 'the bold font';
            src: url(${TheBoldFont}) format('truetype');
        };

        .register-type::before{
            background: url(${RegisterTypeArrow})
        };
    `;
export default GlobalStyle;
