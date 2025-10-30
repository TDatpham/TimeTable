import React from 'react';

function TimetableStats({ subjects }) {
  if (!subjects || subjects.length === 0) {
    return null;
  }

  // Calculate statistics
  const totalSubjects = subjects.length;
  
  // Count subjects by day
  const subjectsByDay = subjects.reduce((acc, subject) => {
    const day = subject.dayOfWeek || subject.time.split(',')[0]?.trim();
    if (day) {
      acc[day] = (acc[day] || 0) + 1;
    }
    return acc;
  }, {});

  // Count unique rooms
  const uniqueRooms = new Set(subjects.map(subject => subject.room)).size;

  // Calculate total hours per week
  const totalHours = subjects.reduce((total, subject) => {
    if (subject.startTime && subject.endTime) {
      const start = new Date(`2000-01-01T${subject.startTime}`);
      const end = new Date(`2000-01-01T${subject.endTime}`);
      const hours = (end - start) / (1000 * 60 * 60);
      return total + hours;
    }
    return total;
  }, 0);

  const statsStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    marginBottom: '20px'
  };

  const titleStyle = {
    margin: '0 0 15px 0',
    color: '#495057',
    fontSize: '18px',
    fontWeight: '600'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px'
  };

  const statItemStyle = {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '6px',
    border: '1px solid #e9ecef',
    textAlign: 'center'
  };

  const statValueStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007bff',
    margin: '0 0 5px 0'
  };

  const statLabelStyle = {
    fontSize: '14px',
    color: '#6c757d',
    margin: '0'
  };

  const dayStatsStyle = {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '6px',
    border: '1px solid #e9ecef',
    marginTop: '15px'
  };

  const dayGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px',
    marginTop: '10px'
  };

  const dayItemStyle = {
    textAlign: 'center',
    padding: '8px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px',
    border: '1px solid #dee2e6'
  };

  const dayValueStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#28a745',
    margin: '0'
  };

  const dayLabelStyle = {
    fontSize: '12px',
    color: '#6c757d',
    margin: '0'
  };

  return (
    <div style={statsStyle}>
      <h3 style={titleStyle}>📊 Thống Kê Thời Khóa Biểu</h3>
      
      <div style={gridStyle}>
        <div style={statItemStyle}>
          <div style={statValueStyle}>{totalSubjects}</div>
          <div style={statLabelStyle}>Tổng số môn học</div>
        </div>
        
        <div style={statItemStyle}>
          <div style={statValueStyle}>{uniqueRooms}</div>
          <div style={statLabelStyle}>Số phòng học</div>
        </div>
        
        <div style={statItemStyle}>
          <div style={statValueStyle}>{totalHours.toFixed(1)}h</div>
          <div style={statLabelStyle}>Tổng giờ học/tuần</div>
        </div>
        
        <div style={statItemStyle}>
          <div style={statValueStyle}>{(totalHours / 5).toFixed(1)}h</div>
          <div style={statLabelStyle}>Trung bình/ngày</div>
        </div>
      </div>

      {Object.keys(subjectsByDay).length > 0 && (
        <div style={dayStatsStyle}>
          <h4 style={{ margin: '0 0 10px 0', color: '#495057', fontSize: '16px' }}>
            📅 Số môn học theo thứ
          </h4>
          <div style={dayGridStyle}>
            {Object.entries(subjectsByDay).map(([day, count]) => (
              <div key={day} style={dayItemStyle}>
                <div style={dayValueStyle}>{count}</div>
                <div style={dayLabelStyle}>{day}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TimetableStats;