import { createGlobalStyle } from 'styled-components';
import '../../assets/_base.scss';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 14px;
    font-family:"Inter", sans-serif;
    color: '#1111 !important';
  }
`;
