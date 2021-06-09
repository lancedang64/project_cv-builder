import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './components/ReactPDF';

const App = () => (
  <PDFViewer width="100%" height="100">
    <MyDocument />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
