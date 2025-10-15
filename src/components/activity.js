import React, { Activity } from 'react';
import Sidebar from './Sidebar';
import './styles.css';
 function ActivityExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <main>
      <button
        onClick={() => setIsOpen(v => !v)}
        aria-expanded={isOpen}
        aria-controls="sidebar"
      >
        {isOpen ? 'Hide' : 'Show'} Sidebar
      </button>

      <Activity mode={isOpen ? 'visible' : 'hidden'}>
        <Sidebar id="sidebar" />
      </Activity>
    </main>
  );
}

export default ActivityExample
