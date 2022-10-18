import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      Hello world!
    </RecoilRoot>
  );
}

export default App;
