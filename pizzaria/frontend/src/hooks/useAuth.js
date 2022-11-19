import { useContext } from "react";

import { AuthContext } from "../context/auth";
import React, { Component } from "react";
const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;