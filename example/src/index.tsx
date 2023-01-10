import React from 'react'
import ReactDOM from 'react-dom'
import VerifyCode from '339rama-react-verify-code'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Example 1</h1>
      <VerifyCode count={3} onComplete={(value) => console.log(value)} />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
)
