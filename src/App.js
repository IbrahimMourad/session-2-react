import { useState } from 'react';

import ButtonState from './ButtonState/ButtonState';
import Form from './components/Form';
import Layout from './components/Layout';
import List from './components/List';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <ButtonState count={count} setCount={setCount} />
      <ButtonState count={count} setCount={setCount} />

      <List count={count} />
    </Layout>
  );
}

export default App;
