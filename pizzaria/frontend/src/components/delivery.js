import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import { ListItemSecondaryAction } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
//Custom Components
import MiniDrawer from "./MiniDrawer";

const RequestEdit = ({ index }) => {
	const handleEditClick = () => {
		handleClickOpen(index);
	};
	return (
		<FormControlLabel
			control={
				<div>
					<IconButton color="primary" onClick={handleEditClick}>
						<SendIcon style={{ color: "#000000" }} />
					</IconButton>
				</div>
			}
		/>
	);
};
const columns = [
	{ field: "id", headerName: "Código", width: 90 },
	{
		field: "nomeDoCliente",
		headerName: "Nome do Cliente",
		width: 150,
		editable: false,
	},
	{
		field: "endereco",
		headerName: "Endereço",
		width: 300,
		editable: false,
	},
	{
		field: "telefone",
		headerName: "Telefone",
		type: "number",
		width: 120,
		editable: false,
	},
	{
		field: "hora",
		headerName: "Horário do Pedido",
		width: 100,
		editable: false,
	},
	{
		field: "pago",
		headerName: "Pedido Pago",
		type: "boolean",
		width: 150,
		editable: false,
	},
	{
		field: "valorTotal",
		headerName: "Valor Total",
		type: "number",
		width: 110,
		editable: false,
	},
	{
		field: "metodoPagamento",
		headerName: "Método Pagamento",
		width: 110,
	},
	{
		field: "observacoes",
		headerName: "Observações",
		width: 100,
		editable: false,
	},
	{
		field: "actions",
		headerName: "Ações",
		sortable: false,
		width: 140,
		disableClickEventBubbling: true,
		renderCell: (params) => {
			return (
				<div
					className="d-flex justify-content-between align-items-center"
					style={{ cursor: "pointer" }}
				>
					<RequestEdit index={params.row} />
				</div>
			);
		},
	},
];

const rows = [
	{
		id: 1,
		nomeDoCliente: "Geraldo da Silva",
		status: "Criado",
		endereco: "Rua dos bobos, 0",
		telefone: "19963521478",
		hora: "12:00",
		pago: true,
		valorTotal: 80,
		metodoPagamento: "cartão",
		observacoes: "",
		entrega: true,
	},
	{
		id: 2,
		nomeDoCliente: "Geraldo da Silva",
		status: "Criado",
		endereco: "Rua dos bobos, 0",
		telefone: "19963521478",
		hora: "12:00",
		pago: true,
		valorTotal: 80,
		metodoPagamento: "cartão",
		observacoes: "",
		entrega: true,
	},
	{
		id: 3,
		nomeDoCliente: "Geraldo da Silva",
		status: "Criado",
		endereco: "Rua dos bobos, 0",
		telefone: "19963521478",
		hora: "12:00",
		pago: true,
		valorTotal: 80,
		metodoPagamento: "cartão",
		observacoes: "",
		entrega: true,
	},
	{
		id: 4,
		nomeDoCliente: "Geraldo da Silva",
		status: "Criado",
		endereco: "Rua dos bobos, 0",
		telefone: "19963521478",
		hora: "12:00",
		pago: true,
		valorTotal: 80,
		metodoPagamento: "cartão",
		observacoes: "",
		entrega: true,
	},
	{
		id: 5,
		nomeDoCliente: "Geraldo da Silva",
		status: "Criado",
		endereco: "Rua dos bobos, 0",
		telefone: "19963521478",
		hora: "12:00",
		pago: true,
		valorTotal: 80,
		metodoPagamento: "cartão",
		observacoes: "",
		entrega: true,
	},
	{
		id: 6,
		nomeDoCliente: "Geraldo da Silva",
		status: "Criado",
		endereco: "Rua dos bobos, 0",
		telefone: "19963521478",
		hora: "12:00",
		pago: true,
		valorTotal: 80,
		metodoPagamento: "cartão",
		observacoes: "",
		entrega: true,
	},
	{
		id: 7,
		nomeDoCliente: "Geraldo da Silva",
		status: "Criado",
		endereco: "Rua dos bobos, 0",
		telefone: "19963521478",
		hora: "12:00",
		pago: true,
		valorTotal: 80,
		metodoPagamento: "cartão",
		observacoes: "",
		entrega: true,
	},
	{
		id: 8,
		nomeDoCliente: "Geraldo da Silva",
		status: "Criado",
		endereco: "Rua dos bobos, 0",
		telefone: "19963521478",
		hora: "12:00",
		pago: true,
		valorTotal: 80,
		metodoPagamento: "cartão",
		observacoes: "",
		entrega: true,
	},
];

function refreshMessages() {
	const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

	return Array.from(new Array(50)).map(
		() => messageExamples[getRandomInt(messageExamples.length)]
	);
}
const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",

	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));
export default function Delivery() {
	const [value, setValue] = React.useState(0);
	const ref = React.useRef(null);

	const [filteredList, setFilteredList] = React.useState(rows);

	return (
		<Box sx={{ display: "flex" }}>
			<MiniDrawer />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Grid container spacing="1">
					<Box
						sx={{
							pb: 7,
							overflowY: "scroll",
							maxHeight: "100vh",
							width: "100%",
						}}
						ref={ref}
					>
						<CssBaseline />
						<Box sx={{ height: "50vh" }}>
							<DataGrid
								rows={filteredList}
								columns={columns}
								pageSize={100}
                                disableExtendRowFullWidth= {true}
                                hideFooter={true}
								localeText={{
									columnMenuLabel: "Menu",
									columnMenuShowColumns:
										"Visualização de Colunas",
									columnMenuFilter: "Filtrar",
									columnMenuHideColumn: "Esconder",
									columnMenuUnsort: "Desfazer Ordenação",
									columnMenuSortAsc: "Ordenar Asc",
									columnMenuSortDesc: "Ordenar Desc",
									columnHeaderSortIconLabel: "Ordenar",
									toolbarFiltersTooltipActive: (count) =>
										count !== 1
											? `${count} filtros`
											: `${count} filtro`,
									filterPanelAddFilter: "Adicionar Filtro",
									filterPanelDeleteIconLabel: "Excluir",
									filterPanelLinkOperator: "Operador Lógico",
									filterPanelOperators: "Operador do Filtro", // TODO v6: rename to filterPanelOperator
									filterPanelOperatorAnd: "E",
									filterPanelOperatorOr: "OU",
									filterPanelColumns: "Colunas",
									filterPanelInputLabel: "Valor",
									filterPanelInputPlaceholder:
										"Filtrar valor",

									// Filter operators text
									filterOperatorContains: "contém",
									filterOperatorEquals: "é exatamente",
									filterOperatorStartsWith: "começa com",
									filterOperatorEndsWith: "termina com",
									filterOperatorIs: "é",
									filterOperatorNot: "não é",
									filterOperatorAfter: "está depois de",
									filterOperatorOnOrAfter:
										"está em ou depois",
									filterOperatorBefore: "está antes",
									filterOperatorOnOrBefore:
										"está em ou antes",
									filterOperatorIsEmpty: "está vazio",
									filterOperatorIsNotEmpty: "não está vazio",
									filterOperatorIsAnyOf: "é um dos",

									// Columns panel text
									columnsPanelTextFieldLabel:
										"Encontrar coluna",
									columnsPanelTextFieldPlaceholder:
										"Título da Coluna",
									columnsPanelDragIconLabel:
										"Reordenar coluna",
									columnsPanelShowAllButton: "Mostrar todos",
									columnsPanelHideAllButton: "Esconder todos",
									footerRowSelected: (count) =>
										count !== 1
											? `${count.toLocaleString()} linhas selecionadas`
											: `${count.toLocaleString()} linha selecionada`,
								}}
								initialState={{
									columns: {
										columnVisibilityModel: {
											// Columns to be hide
											endereco: false,
										},
									},
								}}
								rowsPerPageOptions={[100]}
								disableSelectionOnClick
								experimentalFeatures={{ newEditingApi: true }}
							/>
						</Box>
						<Paper
							sx={{
								position: "fixed",
								bottom: 0,
								left: 0,
								right: 0,
							}}
							elevation={3}
						>
							<BottomNavigation
								showLabels
								value={value}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
							>
								<BottomNavigationAction
									label="Pedidos"
									icon={<RestoreIcon />}
								/>
								<BottomNavigationAction
									label="Em Entrega"
									icon={<SendIcon />}
								/>
							</BottomNavigation>
						</Paper>
					</Box>
				</Grid>
			</Box>
		</Box>
	);
}
