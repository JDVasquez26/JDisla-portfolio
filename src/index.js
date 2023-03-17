import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
//StrictMode renders components twice, (on dev but not production) in order to detect any 
//problems with your code and warn you about them (which can 
//be quite useful), but it was messing with the iTYPE in intro
// root.render(
//   <React.StrictMode>
//     <ThemeProvider>
//        <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );


root.render(
  <ThemeProvider>
     <App />
  </ThemeProvider>
 
);



