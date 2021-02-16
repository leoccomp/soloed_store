import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: Montserrat;
    }

    body{
      position: absolute;
      width: 1440px;
      height: 1024px;
      left: 0px;
      top: 0px;
      right: 0;
      bottom: 0;

      background: #F9F9F9;

      -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 14px Arial, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
