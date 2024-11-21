import { useState } from 'react';
import './App.scss';

function App() {
  const [input, setInput] = useState('');

  const handleBtn = (value) => {
    if(value === '='){
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    }else if(value === 'AC'){
      setInput('');
    }else if(value === 'Del'){
      setInput((prevInput) => {
        if(typeof prevInput === 'string') return prevInput.slice(0, -1);
        return '';
      });
    }else{
      setInput((prevInput) => prevInput + value);
    }
  }

  const btnData = [
    { rowClass: 'acDel', values: [{ label: 'AC', className: '' }, { label: 'Del', className: '' }, { label: '/', className: 'btns divisionBtn' }, { label: '*', className: 'btns addition' }] },
    { rowClass: 'numLine numLine1', values: [{ label: '7', className: '' }, { label: '8', className: '' }, { label: '9', className: '' }, { label: '-', className: 'btns' }] },
    { rowClass: 'numLine numLine2', values: [{ label: '4', className: '' }, { label: '5', className: '' }, { label: '6', className: '' }, { label: '+', className: 'btns' }] },
    { rowClass: 'numLine numLine3', values: [{ label: '1', className: '' }, { label: '2', className: '' }, { label: '3', className: '' }, { label: '=', className: 'btns' }] },
    { rowClass: 'numLine numLine4', values: [{ label: '0', className: '' }, { label: '.', className: '' }] }
  ];

  return (
    <div className="App">
      <div className="fatherDiv">

        <div className="countedNums">
          <input value={input ? input : '0'} className='answerNum'/>
        </div>

        <div className='operationsNums'>

          {btnData.map((row) => (
            <div className={`${row.rowClass}`}>
              {row.values.map((btnValue) => (

                <button className={`${btnValue.className}`} onClick={() => handleBtn(btnValue.label)}>
                  {btnValue.label}
                </button>

              ))}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
