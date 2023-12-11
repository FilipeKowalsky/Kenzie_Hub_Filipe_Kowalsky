import { useEffect, useState, useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const ContextApi = createContext({});

export const UserProvider = ({children}) =>{
  const [user, setUser] = useState(null);
  const [showModalError, setShowModalError] = useState(false);
  const [showModalApproved, setShowModalApproved] = useState(false);
  const navigate = useNavigate();
  
  const onCloseModalError = () => {
    setShowModalError(false);
  };

  const onCloseModalApproved = () => {
    setShowModalApproved(false);
  };
  
  useEffect(() => {
    const checkUser = async () =>{
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@USERID");

      if(token && id){
        try{
          const {data} = await api.get(`/profile`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setUser(data)
          navigate("/dashboard")
          console.log(user);
        } catch (error){
          console.log(error);
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
        }
      }
    }
    checkUser()
  }, [])
  
  const loginUser = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      setUser(data.user);
      setShowModalApproved(true);
      console.log(user);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      setShowModalError(true);
    }
  };

  const createUser = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      setShowModalApproved(true);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setShowModalError(true);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return(
    <ContextApi.Provider value={{user, loginUser, onCloseModalError, onCloseModalApproved, showModalError, showModalApproved, createUser, userLogout}}>
      {children}
    </ContextApi.Provider>
  )
}

export const useUserContext = () => useContext(ContextApi)