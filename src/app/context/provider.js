"use client";
import { useEffect, useState } from "react";
import UserContext from "./context";
import { Current } from "../servies/Signup";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const currentUser = await Current();
      setUser(currentUser);
    } catch (error) {
      console.error("Error fetching current user:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();

    const handleFocus = () => {
      fetchUser();
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, refetchUser: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
