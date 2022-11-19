import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import InputMask from "react-input-mask";
import { width } from "@mui/system";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
//Custom Components
import MiniDrawer from "./MiniDrawer";
const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
   
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
	const { onChange, ...other } = props;
	return (
		<IMaskInput
			{...other}
			mask="(00) 00000-0000"
			definitions={{
				"#": /[1-9]/,
			}}
			inputRef={ref}
			onAccept={(value) =>
				onChange({ target: { name: props.name, value } })
			}
            label='0000000000'
            placeholder='0000000000'
			overwrite
		/>
	);
});

TextMaskCustom.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
export default function RequestPage() {
	const [values, setValues] = React.useState({
		textmask: "(XX) XXXXX-XXXX",
		numberformat: "1320",
	});
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};
	return (
		<Box sx={{ display: "flex" }}>
			<MiniDrawer />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Grid container spacing="1">
					<Box
						sx={{
							width: 1 / 3,
							height: 100,
						}}
					>
						<Input
							value={values.textmask}
							onChange={handleChange}
							name="textmask"
							id="formatted-text-mask-input"
							inputComponent={TextMaskCustom}
					        // label="teste"
							variant="outlined"
                           
							md={12}
							sx={{
								width: 1 / 1,
								minWidth: 210,
							}}
						/>
						<ButtonGroup
							variant="contained"
							aria-label="outlined primary button group"
							md={12}
							sx={{
								width: 1 / 1,
								minWidth: 210,
							}}
						>
							<Button
								sx={{
									width: 1 / 2,
								}}
							>
								Buscar Pedido
							</Button>
							<Button
								sx={{
									width: 1 / 2,
								}}
							>
								Realizar Pedido
							</Button>
						</ButtonGroup>
					</Box>
				</Grid>
			</Box>
		</Box>
	);
}
