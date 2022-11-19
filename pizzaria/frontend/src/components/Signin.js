import React, { useState } from "react";
import  Input  from "@mui/material/Input";
import Button from '@mui/material/Button';
import FormLabel from "@mui/material/FormLabel";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Box } from "@mui/system";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <Box>
      <FormLabel>SISTEMA DE LOGIN</FormLabel>
      <Box>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <FormLabel>{error}</FormLabel>
        <Button text="Entrar" onClick={handleLogin} />
      </Box>
    </Box>
  );
};

export default Signin;