import { 
  getTimetables, 
  addTimetable, 
  updateTimetable as updateTimetableStorage, 
  deleteTimetable as deleteTimetableStorage,
  getCurrentUser,
  getToken,
  saveUser,
  getUserByEmail,
  setCurrentUser,
  clearCurrentUser
} from '../utils/localStorage';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Timetable functions
export const fetchTimetables = async () => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error('No authentication token found');
    }
    
    const currentUser = getCurrentUser();
    if (!currentUser) {
      throw new Error('No current user found');
    }
    
    await delay(500); // Simulate network delay
    const timetables = getTimetables(currentUser.id);
    return timetables;
  } catch (error) {
    console.error('Error fetching timetables:', error);
    throw error;
  }
};

export const createTimetable = async (timetableData) => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error('No authentication token found');
    }
    
    const currentUser = getCurrentUser();
    if (!currentUser) {
      throw new Error('No current user found');
    }
    
    await delay(300); // Simulate network delay
    const newTimetable = addTimetable(currentUser.id, timetableData);
    return newTimetable;
  } catch (error) {
    console.error('Error creating timetable:', error);
    throw error;
  }
};

export const updateTimetable = async (id, timetableData) => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error('No authentication token found');
    }
    
    const currentUser = getCurrentUser();
    if (!currentUser) {
      throw new Error('No current user found');
    }
    
    await delay(300); // Simulate network delay
    const updatedTimetable = updateTimetableStorage(currentUser.id, id, timetableData);
    return updatedTimetable;
  } catch (error) {
    console.error('Error updating timetable:', error);
    throw error;
  }
};

export const deleteTimetable = async (id) => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error('No authentication token found');
    }
    
    const currentUser = getCurrentUser();
    if (!currentUser) {
      throw new Error('No current user found');
    }
    
    await delay(300); // Simulate network delay
    deleteTimetableStorage(currentUser.id, id);
    return { success: true };
  } catch (error) {
    console.error('Error deleting timetable:', error);
    throw error;
  }
};

// Auth functions
export const login = async (credentials) => {
  try {
    await delay(500); // Simulate network delay
    
    const { email, password } = credentials;
    const user = getUserByEmail(email);
    
    if (!user) {
      throw new Error('Email không tồn tại');
    }
    
    if (user.password !== password) {
      throw new Error('Mật khẩu không đúng');
    }
    
    // Set current user and token
    setCurrentUser(user);
    
    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: user.id || user.email
    };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    await delay(500); // Simulate network delay
    
    const { name, email, password } = userData;
    
    // Check if user already exists
    const existingUser = getUserByEmail(email);
    if (existingUser) {
      throw new Error('Email đã được sử dụng');
    }
    
    // Create new user
    const newUser = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: password,
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    // Save user
    saveUser(newUser);
    
    // Set current user and token
    setCurrentUser(newUser);
    
    return {
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      },
      token: newUser.id
    };
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
};

export const logout = () => {
  clearCurrentUser();
  return { success: true };
};