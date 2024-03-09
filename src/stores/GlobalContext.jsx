import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [fullName, setFullName] = useState("");
  const [nickName, setNickName] = useState("");
  const [age, setAge] = useState(0);
  const [show, setShow] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const addItemCart = () => {
    if (fullName && nickName) {
      const newItem = { id: new Date().getTime(), fullName, nickName, age };
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      setFullName("");
      setNickName("");
      setAge("");
    }
  };

  const openModal = (item) => {
    setShow(true);
    setEditedItem(item);
  };

  const closeModal = () => {
    setShow(false);
    setEditedItem(null);
  };

  const removeAllItems = () => {
    setCartItems([]);
    localStorage.removeItem("cartItem");
  };

  const removeItemFromCart = (id) => {
    const deletedItem = cartItems.filter((cart) => cart.id !== id);
    setCartItems(deletedItem);
    localStorage.setItem("cartItem", JSON.stringify(deletedItem));
  };

  const saveEdit = () => {
    const updatedItem = cartItems.map((cart) =>
      cart.id === editedItem.id ? { ...editedItem } : cart
    );
    setCartItems(updatedItem);
    localStorage.setItem("cartItem", JSON.stringify(updatedItem));
    closeModal();
  };

  const contextValue = {
    addItemCart,
    cartItems,
    setCartItems,
    fullName,
    setFullName,
    nickName,
    setNickName,
    age,
    setAge,
    show,
    setShow,
    openModal,
    closeModal,
    editedItem,
    setEditedItem,
    removeAllItems,
    removeItemFromCart,
    saveEdit,
  };

  const Component = GlobalContext.Provider;
  return <Component value={contextValue}>{children}</Component>;
};

const useGlobalContext = () => useContext(GlobalContext);
export { useGlobalContext, GlobalProvider };
