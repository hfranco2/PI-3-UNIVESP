import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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

		navigate("/");
	};

	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
			}}
		>
			<Box
				sx={{
					width: 300,
					height: "auto",
					margin: "auto",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<FormLabel>SISTEMA DE LOGIN</FormLabel>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						my: "1rem",
					}}
				>
					<TextField
						type="email"
						placeholder="Digite seu E-mail"
						value={email}
						onChange={(e) => [
							setEmail(e.target.value),
							setError(""),
						]}
						sx={{
							mb: "0.5rem",
						}}
					/>
					<TextField
						type="password"
						placeholder="Digite sua Senha"
						value={senha}
						onChange={(e) => [
							setSenha(e.target.value),
							setError(""),
						]}
					/>
					<FormLabel>{error}</FormLabel>
					<Button
						variant="contained"
						size="large"
						onClick={handleLogin}
						sx={{
							mt: "2rem",
						}}
					>
						Entrar
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Signin;
