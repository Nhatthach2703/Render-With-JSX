import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './slot2/UIStructure/App';
// import App from './slot2/Dynamic-property-values-and-text/App';
import App from './slot2/Mapping-collections-to-elements/App';
import MyComponent from './slot2/create-jsx-elements/MyComponent'; 
import reportWebVitals from './reportWebVitals';
import MySection from './slot2/create-jsx-elements/MySection';
import MyButton from './slot2/create-jsx-elements/MyButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <MyComponent /> */}

    {/* <MySection>
      <MyButton>My Button</MyButton>
    </MySection> */}
    
    {/* <MyComponent>
      <MyComponent.First />
      <MyComponent.Second />
    </MyComponent> */}

    {/* <App /> */}

    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
