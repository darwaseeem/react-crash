import React, { useState } from 'react';

function Tabledata() {
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });

  const employees = [
    { id: 1, name: 'Alice Johnson', department: 'HR', position: 'Manager', email: 'alice.johnson@example.com', salary: '$60,000', hireDate: '2022-05-10' },
    { id: 3, name: 'Charlie Brown', department: 'Finance', position: 'Accountant', email: 'charlie.brown@example.com', salary: '$70,000', hireDate: '2020-09-22' },
    { id: 2, name: 'Bob Smith', department: 'Engineering', position: 'Software Developer', email: 'bob.smith@example.com', salary: '$85,000', hireDate: '2021-03-14' },
    { id: 4, name: 'David Green', department: 'Sales', position: 'Sales Lead', email: 'david.green@example.com', salary: '$75,000', hireDate: '2019-01-18' },
  ];

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const headerCell = (label, key) => {
    const isActive = sortConfig.key === key;
    const arrow = isActive ? (sortConfig.direction === 'asc' ? ' ↑' : ' ↓') : '';
    return (
      <th
        key={key}
        onClick={() => requestSort(key)}
        style={{ border: '1px solid black', padding: '6px', cursor: 'pointer', userSelect: 'none', backgroundColor: isActive ? 'lightblue' : 'lightblue', border:"none" }}
        title={`Sort by ${label}`}
      >
        {label}{arrow}
      </th>
    );
  };

  return (
    <div style={{ padding: '40px' }}>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '80%',
          border: '1px solid black',
          margin: '0 auto',
        }}
      >
        <thead>
          <tr>
            {headerCell('Id', 'id')}
            {headerCell('Name', 'name')}
            {headerCell('Department', 'department')}
            {headerCell('Position', 'position')}
            {headerCell('Email', 'email')}
            {headerCell('Salary', 'salary')}
            {headerCell('Hire Date', 'hireDate')}
          </tr>
        </thead>

        <tbody>
          {sortedEmployees.map((emp) => (
            <tr key={emp.id}>
              <td style={{ border: '1px solid black', padding: '4px' }}>{emp.id}</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>{emp.name}</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>{emp.department}</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>{emp.position}</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>{emp.email}</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>{emp.salary}</td>
              <td style={{ border: '1px solid black', padding: '4px' }}>{emp.hireDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabledata;
