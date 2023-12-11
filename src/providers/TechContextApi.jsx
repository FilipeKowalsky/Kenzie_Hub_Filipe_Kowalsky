import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import "react-toastify/dist/ReactToastify.css";

export const TechContextApi = createContext({});

export const TechProvider = ({ children }) => {
  const [showModalTech, setShowModalTech] = useState(false);
  const [showModalUpdateTech, setshowModalUpdateTech] = useState(false);
  const [tech, setTech] = useState([]);
  const token = localStorage.getItem("@TOKEN");
  const id = localStorage.getItem("@USERID");
  const [list, setList] = useState([])

  const openModal = () => {
    setShowModalTech(true);
  };

  const closeModal = () => {
    setShowModalTech(false);
  };

  const openModalUpdate = (item) => {
    setshowModalUpdateTech(true);
    setList(item);
    console.log(list);
  };

  const closeModalUpdate = () => {
    setshowModalUpdateTech(false);
  };

  const createTech = async (formData) => {
    try {
      const { data } = await api.post(`/users/techs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      searchTech();
    } catch (error) {
      toast.error("Erro ao cadastrar tecnologia.");
    }
  };

  const searchTech = async () => {
    try {
      const { data } = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTech(data.techs);
    } catch (error) {
      toast.error("Erro ao buscar tecnologias.");
    }
  };

  // const updateTech = async () => {
  //   try {
  //     const { data } = await api.put(`/users/techs/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setTech(data.techs);
  //   } catch (error) {
  //     toast.error("Erro ao buscar tecnologias.");
  //   }
  // };

  useEffect(() => {
    searchTech();
  }, []);

  return (
    <TechContextApi.Provider
      value={{
        showModalTech,
        openModal,
        closeModal,
        openModalUpdate,
        closeModalUpdate,
        showModalUpdateTech,
        tech,
        createTech,
      }}
    >
      {children}
    </TechContextApi.Provider>
  );
};
