// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;
}
* {
  transition: all 0.455s linear 0.1s !important;
}

.desc {
  padding: 4px 12px;
 background: #F1F1F2;
 color: #5f5f5f;
 font-weight: 400;
 display: inline-block;
 border-radius: 28px;
 opacity: 0.85;
 transition: all 0.25s linear;
   }


  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  body.dark-mode {
    .desc {
      padding: 4px 12px;
     background: #404040;
     color: #b5b5b5;
     font-weight: 400;
     display: inline-block;
     border-radius: 28px;
     opacity: 0.85;
       }
  }


  body.light-mode {

  background-color: #fff;
  color: #333;
  transition: background-color 0.3s ease;

  body::selection {
    background-color: blue;
    color: white;
  }

  .bubble {
    background: white;
    color: black;
    border: 1px solid #474747;
    svg {
      g {
        fill: #474747;
      }
    }
  }

  .yemen .button {
    background: #F9C701 !important;
    color: black !important;
    &:hover {
      background: #F9C701 !important;
      opacity: 1;
      border-color: #FAC800;
    }

   .desc {
  padding: 4px 12px;
 background: #F1F1F2 !important;
 color: #5f5f5f !important;
 font-weight: 400;
 display: inline-block;
 border-radius: 28px;
 opacity: 0.85;
   }

  }


  .afganistan-refugees .button {
    background: #D5AE39 !important;
    color: white !important;
    &:hover {
      background: #D5AE39 !important;
      opacity: 1;
      border-color: #D5AE39;
    }

  }

  .endsars .button {
    background: #008850 !important;
    color: white !important;
  }

  .blacklivesmatter .button {
    background: #ce4b49 !important;
    border: 1px solid #ce4b49;
    color: black;
    opacity: 1;
  }

  .stopasianhate .button {
    background: #561985 !important;
    color: white !important;
  }

  .endviolenceagainstwomen .button {
    background: #BB0243 !important;
    color: white !important;
  }

  .myanmar .button {
    background: #EB7239 !important;
    color: white !important;
  }

  span {
    font-size: 80%;
  }

  .cause.blm {
    &:after {
      background: #ce4b49;
    }

  }

  .cause.stopasianhate {
    &:after {
      background: #561985;
    }
  }

  .cause.endviolenceagainstwomen {
    &:after {
      background: #BB0243;
    }
  }

  .cause.yemen {
    &:after {
      background: #F9C701;
    }
  }

  .cause.endsars {
    &:after {
      background: #008850;
    }
  }

  .cause.myanmar {
    &:after {
      background: #EB7239;
    }
  }

  .cause.afganistan-refugees {
    &:after {
      background: #D5AE39;
    }
  }

}


  body.dark-mode {
    background-color: #1a1919;
    color: #999;

    a,
    a:visited {
        color: white !important;
      }

    .alert {
      background: black;
      color: white;
    }

     p, h2, .footer {
       color: white;
     }

     .bubble {
       background: #474747;
       border: 1px solid #474747;
       // &:hover {
       //     background: #61a54b;
       // }
       svg {
         g {
           fill: white;
         }
       }
     }

     .yemen .button {
       background: #F9C701 !important;
       color: black !important;
       &:hover {
         background: #F9C701 !important;
         opacity: 1;
         border-color: #FAC800;
       }
     }
  }


  .headroom {
  will-change: transform;
  transition: all 0.5s ease-in-out 0s !important;
}
.headroom--pinned {
  transform: translateY(0%);
}
.headroom--unpinned {
  transform: translateY(-100%);
}

.headroom {
  background: #000;
    width: 100%;
    position: fixed !important;
    z-index: 10;
    top: 0;
    left: 0;
}





  `
