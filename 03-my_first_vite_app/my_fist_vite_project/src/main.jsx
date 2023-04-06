import React from 'react' //imports react
import ReactDOM from 'react-dom/client' //imports react dom to renderize in web
import App from './App' //to access to the App.jsx
import './index.css'  //to access to the index.css which is being used

ReactDOM.createRoot(document.getElementById('root')).render( //renderize the element
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
