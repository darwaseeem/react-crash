import React, { Activity } from 'react';
import Form from './form';

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
    </div>
  );
}
export default App;
