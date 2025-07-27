import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false); // Assuming you want to manage admin state

  const login = (username) => {

    const token = `fake-token-${username}`;
    if (username === 'administrador@gmail.com') {
      setAdmin(true);
    }

    localStorage.setItem('authToken', token);
    setUser(username);
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setAdmin(false); 
  };

//varificar logueo

const verificacionLog = () => {
  const userToken = localStorage.getItem('authToken');

  if (userToken && userToken === `fake-token-administrador@gmail.com`) {
    setAdmin(true);
    setUser('administrador@gmail.com');
  } else if (userToken) {
    const username = userToken.replace('fake-token-', '');
    setUser(username);
  }
};
  return (
    <AuthContext.Provider value={{ user, login, logout, admin,verificacionLog }}>
      {children}
    </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);
