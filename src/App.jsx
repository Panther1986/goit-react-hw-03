import React from "react";
import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import MyComponent from "./components/MyComponent";
import SearchBar from "./components/SearchBar";
import LangSwitcher from "./components/LangSwitcher";

const App = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const hadleChange = (e) => {
    setHasAccepted(e.target.checked);
  };
  const [lang, setLang] = useState("uk");
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default App;
