# Simple verify code component

## Installation

```
npm install 339rama-react-verify-code
```

## Usage

```ts
import VerifyCode from '339rama-react-verify-code'

const App = () => {
  return <VerifyCode count={3} onComplete={(value) => console.log(value)} />
}
```

## With default styles

```
import '339rama-react-verify-code/dist/index.css'
```
