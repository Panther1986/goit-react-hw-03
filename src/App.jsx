import React from "react";
import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default App;
