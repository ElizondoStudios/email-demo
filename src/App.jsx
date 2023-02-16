import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import EmailForm from './components/EmailForm';

function App() {
  const form= useRef()
  const [FormSent, setFormSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'test_template', form.current, '7wB4UiuC8mbnhh7UD')
      .then((result) => {
          console.log(result.text);
          setFormSent(true)
      }, (error) => {
          console.log(error.text);
          alert("No se envió la form 😢")
      });
  }

  return ( 
    <div className="App">
      {
        !FormSent? 
        <EmailForm form={form} sendEmail={sendEmail}/>:
        <div className='success-message'>
          <h1>¡La información se envió de forma exitosa! 🥳</h1>
          <button onClick={() => {setFormSent(false)}}>Volver al form</button>
        </div>
      }
    </div>
   )
}

export default App;
