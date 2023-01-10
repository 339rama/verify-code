import React from 'react'
import ReactDOM from 'react-dom'
import VerifyCode from '339rama-react-verify-code'
import '339rama-react-verify-code/dist/index.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Example 1</h1>
      <VerifyCode count={3} onComplete={(value) => console.log(value)} />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
)
