// Demo data for testing sorting functionality
export const createDemoTimetables = () => {
  return [
    {
      _id: 'demo1',
      subject: 'Toán học',
      time: 'Thứ 2, 08:00 - 09:30',
      room: 'A101',
      dayOfWeek: 'Thứ 2',
      startTime: '08:00',
      endTime: '09:30',
      userId: 'demo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      _id: 'demo2',
      subject: 'Vật lý',
      time: 'Thứ 3, 14:00 - 15:30',
      room: 'B205',
      dayOfWeek: 'Thứ 3',
      startTime: '14:00',
      endTime: '15:30',
      userId: 'demo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      _id: 'demo3',
      subject: 'Hóa học',
      time: 'Thứ 5, 10:00 - 11:30',
      room: 'Lab 3',
      dayOfWeek: 'Thứ 5',
      startTime: '10:00',
      endTime: '11:30',
      userId: 'demo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      _id: 'demo4',
      subject: 'Sinh học',
      time: 'Thứ 2, 13:00 - 14:30',
      room: 'C301',
      dayOfWeek: 'Thứ 2',
      startTime: '13:00',
      endTime: '14:30',
      userId: 'demo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      _id: 'demo5',
      subject: 'Lịch sử',
      time: 'Thứ 4, 09:00 - 10:30',
      room: 'D102',
      dayOfWeek: 'Thứ 4',
      startTime: '09:00',
      endTime: '10:30',
      userId: 'demo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      _id: 'demo6',
      subject: 'Địa lý',
      time: 'Thứ 6, 15:00 - 16:30',
      room: 'E205',
      dayOfWeek: 'Thứ 6',
      startTime: '15:00',
      endTime: '16:30',
      userId: 'demo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      _id: 'demo7',
      subject: 'Văn học',
      time: 'Thứ 7, 08:30 - 10:00',
      room: 'F103',
      dayOfWeek: 'Thứ 7',
      startTime: '08:30',
      endTime: '10:00',
      userId: 'demo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      _id: 'demo8',
      subject: 'Tiếng Anh',
      time: 'Chủ nhật, 14:30 - 16:00',
      room: 'G201',
      dayOfWeek: 'Chủ nhật',
      startTime: '14:30',
      endTime: '16:00',
      userId: 'demo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];
};

// Function to add demo data to localStorage
export const addDemoData = () => {
  const demoData = createDemoTimetables();
  const allTimetables = JSON.parse(localStorage.getItem('timetable_data') || '{}');
  allTimetables['demo'] = demoData;
  localStorage.setItem('timetable_data', JSON.stringify(allTimetables));
  return demoData;
};

// Function to clear demo data
export const clearDemoData = () => {
  const allTimetables = JSON.parse(localStorage.getItem('timetable_data') || '{}');
  delete allTimetables['demo'];
  localStorage.setItem('timetable_data', JSON.stringify(allTimetables));
};

