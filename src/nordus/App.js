import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Routes, RoutesBarber } from "./routes/index";
import { getUser} from "./utils/UserService";



export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isBarber, setIsBarber] = useState(false);

  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
        setIsBarber(userData.barber)
      } catch (err) {
        console.log(err);
      }
    };

    if (isUserLoggedIn) {
      fetchUser();
    }
  }, [isUserLoggedIn]);

  

  return(
   <Routes isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} isBarber={isBarber}/>
  )

}

