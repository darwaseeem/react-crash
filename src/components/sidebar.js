import React from 'react';

export default function Sidebar({ onChange }) {
  const [value, setValue] = React.useState('');

  const handleChange = (e) => {
    const v = e.target.value;
    setValue(v);
  };

  return (
    <aside style={{ width: 220, border: '1px solid #ddd', padding: 12 }}>
      <h3 style={{ marginTop: 0 }}>Sidebar</h3>

      <label
        htmlFor="sidebar-dropdown"
        style={{ display: 'block', fontSize: 12, marginBottom: 6 }}
      >
        Navigate
      </label>

      <select
        id="sidebar-dropdown"
        value={value}
        onChange={handleChange}
        style={{ width: '100%', padding: 8 }}
      >
        <option value="" disabled>Choose…</option>
        <option value="home">Home</option>
        <option value="projects">Projects</option>
        <option value="settings">Settings</option>
      </select>
    </aside>
  );
}

