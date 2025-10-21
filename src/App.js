import React, { Activity } from 'react';
import Form from './form';
import Todo from './components/todoo';
import Tabledata from './components/tabledata';

function App() {
  const [showForm, setShowForm] = React.useState(true);

  return (
    <div>
      <button onClick={() => setShowForm(s => !s)}>
        {showForm ? 'Hide' : 'Show'} Form
      </button>

      <Activity mode={showForm ? 'visible' : 'hidden'}>
        <Form />
      </Activity>
      <Todo />
      <Tabledata />
 
    </div>
  );
}
export default App;
