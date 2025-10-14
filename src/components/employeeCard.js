function EmployeeList({ employee }) {
  console.log(employee, "employee");
  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '4px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      width: 'calc(50% - 8px)',
      margin: '8px'
    }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: 0 }}>{employee.name}</h2>
      <p style={{ fontSize: '14px', marginBottom: '8px' }}>
        <strong style={{ fontWeight: 'bold' }}>Department:</strong> {employee.department}
      </p>
      <p style={{ fontSize: '14px', marginBottom: '8px' }}>
        <strong style={{ fontWeight: 'bold' }}>Position:</strong> {employee.position}
      </p>
      <p style={{ fontSize: '14px', marginBottom: '8px' }}>
        <strong style={{ fontWeight: 'bold' }}>Email:</strong> {employee.email}
      </p>
      <p style={{ fontSize: '14px', marginBottom: '8px' }}>
        <strong style={{ fontWeight: 'bold' }}>Salary:</strong> {employee.salary}
      </p>
      <p style={{ fontSize: '14px', marginBottom: '8px' }}>
        <strong style={{ fontWeight: 'bold' }}>Hire Date:</strong> {employee.hire_date}
      </p>
    </div>
  );
}

export default EmployeeList;