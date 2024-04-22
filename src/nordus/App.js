import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./routes/index";


export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <Routes isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />
  );
}

