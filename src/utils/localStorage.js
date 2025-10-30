// Utility functions for local storage management
export const STORAGE_KEYS = {
  USERS: 'timetable_users',
  CURRENT_USER: 'timetable_current_user',
  TIMETABLES: 'timetable_data',
  TOKEN: 'timetable_token'
};

// User management functions
export const saveUser = (user) => {
  const users = getUsers();
  const existingUserIndex = users.findIndex(u => u.email === user.email);
  
  if (existingUserIndex >= 0) {
    users[existingUserIndex] = { ...users[existingUserIndex], ...user };
  } else {
    users.push(user);
  }
  
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  return user;
};

export const getUsers = () => {
  const users = localStorage.getItem(STORAGE_KEYS.USERS);
  return users ? JSON.parse(users) : [];
};

export const getUserByEmail = (email) => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

export const setCurrentUser = (user) => {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  localStorage.setItem(STORAGE_KEYS.TOKEN, user.id || user.email);
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return user ? JSON.parse(user) : null;
};

export const clearCurrentUser = () => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(STORAGE_KEYS.TOKEN);
};

// Timetable management functions
export const saveTimetables = (userId, timetables) => {
  const allTimetables = getAllTimetables();
  allTimetables[userId] = timetables;
  localStorage.setItem(STORAGE_KEYS.TIMETABLES, JSON.stringify(allTimetables));
  return timetables;
};

export const getTimetables = (userId) => {
  const allTimetables = getAllTimetables();
  return allTimetables[userId] || [];
};

export const getAllTimetables = () => {
  const timetables = localStorage.getItem(STORAGE_KEYS.TIMETABLES);
  return timetables ? JSON.parse(timetables) : {};
};

export const addTimetable = (userId, timetable) => {
  const timetables = getTimetables(userId);
  const newTimetable = {
    ...timetable,
    _id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    userId: userId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  const updatedTimetables = [...timetables, newTimetable];
  saveTimetables(userId, updatedTimetables);
  return newTimetable;
};

export const updateTimetable = (userId, timetableId, updates) => {
  const timetables = getTimetables(userId);
  const index = timetables.findIndex(t => t._id === timetableId);
  
  if (index >= 0) {
    timetables[index] = {
      ...timetables[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    saveTimetables(userId, timetables);
    return timetables[index];
  }
  
  throw new Error('Timetable not found');
};

export const deleteTimetable = (userId, timetableId) => {
  const timetables = getTimetables(userId);
  const filteredTimetables = timetables.filter(t => t._id !== timetableId);
  saveTimetables(userId, filteredTimetables);
  return true;
};

// Initialize default data if needed
export const initializeDefaultData = () => {
  const users = getUsers();
  if (users.length === 0) {
    // Create a default admin user
    const defaultUser = {
      id: 'admin',
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123', // In real app, this should be hashed
      role: 'admin',
      createdAt: new Date().toISOString()
    };
    saveUser(defaultUser);
  }
};

