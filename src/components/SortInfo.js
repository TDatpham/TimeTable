import React from 'react';

function SortInfo({ sortBy, sortOrder, totalItems }) {
  if (totalItems === 0) return null;

  const getSortLabel = (sortBy) => {
    switch (sortBy) {
      case 'day': return 'thứ trong tuần';
      case 'time': return 'giờ bắt đầu';
      case 'subject': return 'tên môn học';
      case 'room': return 'phòng học';
      default: return 'thứ trong tuần';
    }
  };

  const getOrderLabel = (sortOrder) => {
    return sortOrder === 'asc' ? 'tăng dần' : 'giảm dần';
  };

  const containerStyle = {
    backgroundColor: '#e3f2fd',
    border: '1px solid #bbdefb',
    borderRadius: '6px',
    padding: '10px 15px',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#1565c0'
  };

  const iconStyle = {
    fontSize: '16px'
  };

  const textStyle = {
    flex: 1
  };

  const countStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500'
  };

  return (
    <div style={containerStyle}>
      <span style={iconStyle}>📊</span>
      <span style={textStyle}>
        Đang hiển thị <strong>{totalItems}</strong> môn học, sắp xếp theo <strong>{getSortLabel(sortBy)}</strong> ({getOrderLabel(sortOrder)})
      </span>
      <span style={countStyle}>
        {totalItems} môn
      </span>
    </div>
  );
}

export default SortInfo;

