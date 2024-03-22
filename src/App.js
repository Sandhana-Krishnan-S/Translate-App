import { useState } from 'react';
import language from './language'
import './App.css';
import translate from './axios/translate';

function App() {

  const [originalMsg , setOriginalMsg] = useState("");
  const [translatedMsg , setTranslatedMsg] = useState("");
  const [from , setFrom] = useState("auto");
  const [to , setTo] = useState("en");

  const callTranslate = async (event) => {
    event.preventDefault()
    const msg = await translate(from , to , originalMsg)
    setTranslatedMsg(msg)
  }

  return (
    <div className='head'>
      <div className='main'>
        <div className='select'>
          <div>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="">Select a language</option>
              {Object.entries(language).map(([name, value]) => (
                <option key={value} value={value}>{name}</option>
              ))}
            </select>
          </div>
          <div>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="">Select a language</option>
              {Object.entries(language).map(([name, value]) => (
                <option key={value} value={value}>{name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='textarea'>
          <div>
            <textarea onChange={(e) => setOriginalMsg(e.target.value)}></textarea>
          </div>
          <div>
            <textarea disabled value={translatedMsg} />
          </div>
        </div>
        <div>
          <button onClick={callTranslate}><span>Translate</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;
