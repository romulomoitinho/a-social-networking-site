import React, { ReactNode, createContext, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { api } from "../../api";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (usuario: string, password: string) => Promise<boolean>;
  logout: () => boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: async () => false,
  logout: () => false,
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setIsAuthenticated(true);
      console.log("o que eu tô fazendo da minha vida");
    }
  }, []);

  const login = async (usuario: string, password: string) => {
    const url: string = "/login";
    const data: { usuario: string; password: string } = {
      usuario,
      password,
    };

    await api
      .post(url, JSON.stringify(data))
      .then((response: AxiosResponse) => {
        console.log(response);

        const {
          data: { token },
        } = response;
        if (token) {
          console.log(token);
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setUs
          api.defaults.headers.Authorization = `Bearer ${token}`;
          setIsAuthenticated(true);
          return true;
        } else {
          return false;
        }
      })
      .catch((error: unknown) => {
        console.error(error);
        return false;
      });

    return false;
  };

  const logout = () => {
    console.log("used");
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = '';
    return true;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
