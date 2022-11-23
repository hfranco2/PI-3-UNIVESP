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
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Autocomplete from '@mui/material/Autocomplete';

import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//Custom Components
import MiniDrawer from "./MiniDrawer";
import { List } from "@mui/material";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme	 }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const columns = [
  { field: "id", headerName: "Código", width: 90 },
  {
    field: "nomeDoCliente",
    headerName: "Nome do Cliente",
    width: 150,
    editable: false,
  },
  {
    field: "status",
    headerName: "Status",
    type: 'singleSelect',
    valueOptions: ['Criado', 'Efetuado', 'Retirado']
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
    width: 110
  },
  {
    field: "observacoes",
    headerName: "Observações",
    width: 100,
    editable: false,
  },
  {
    field: "entrega",
    headerName: "Necessita Entrega",
    width: "100",
    type: 'boolean',
    editable: false,
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
    entrega: true
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
    entrega: true
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
    entrega: true
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
    entrega: true
  },
  {
    id: 5,
    nomeDoCliente: "Ronaldinho Gaucho",
    status: "Criado",
    endereco: "Rua dos bobos, 0",
    telefone: "19963521478",
    hora: "12:00",
    pago: true,
    valorTotal: 80,
    metodoPagamento: "cartão",
    observacoes: "",
    entrega: true
  },
  {
    id: 6,
    nomeDoCliente: "Geraldino",
    status: "Criado",
    endereco: "Rua dos bobos, 0",
    telefone: "19963521478",
    hora: "12:00",
    pago: true,
    valorTotal: 80,
    metodoPagamento: "cartão",
    observacoes: "",
    entrega: true
  },
  {
    id: 7,
    nomeDoCliente: "Silviscleiton",
    status: "Criado",
    endereco: "Rua dos bobos, 0",
    telefone: "19963521485",
    hora: "12:00",
    pago: true,
    valorTotal: 80,
    metodoPagamento: "cartão",
    observacoes: "",
    entrega: true
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
    entrega: true
  }
];

const produtos = [
  { label: 'Coca-Cola 2L', id: 1 },
  { label: 'Coca-Cola 600ml', id: 1 },
  { label: 'Pizza Calabresa', id: 1 },
  { label: 'Pizza Frango', id: 1 },
  
];
// const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
//   const { onChange, ...other } = props;
//   return (
//     <IMaskInput
//       {...other}
//       mask="(00) 00000-0000"
//       definitions={{
//         "#": /[1-9]/,
//       }}
//       inputRef={ref}
//       placeholder="0000000000"
//       label="0000000000"
//       onAccept={(value) => onChange({ target: { name: props.name, value } })}
//       overwrite
//     />
//   );
// });

// TextMaskCustom.propTypes = {
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default function RequestPage() {
  const [values, setValues] = React.useState({
    textmask: "(XX) XXXXX-XXXX",
    numberformat: "1320",
  });
  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState();



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [filteredList, setFilteredList] = React.useState(rows);

  const onSearchChanged = (e) => {
	setFilteredList(
		e.target.value ?
		rows.filter(
			function(pedido) {
				return pedido.id == Number(e.target.value) ||
				pedido.telefone.includes(e.target.value) ||
				pedido.nomeDoCliente.includes(e.target.value);
			}
		) :
		rows
	);
  }


  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={onSearchChanged}
                placeholder="Busque o pedido"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleClickOpen}
            >
              Novo Pedido
            </Button>
            <Dialog
              fullWidth={true}
              maxWidth="xl"
              open={open}
              onClose={handleClose}
            >
              <DialogTitle>Novo Pedido</DialogTitle>
              <DialogContent>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    <TextField
                      label="Nome do Cliente"
                      id="outlined-start-adornment"
                      sx={{ m: 1, width: "25ch" }}
                    />
                    <TextField
                      label="Telefone"
                      id="outlined-start-adornment"
                      sx={{ m: 1, width: "25ch" }}
                    />
                     <TextField
                      label="Horário do Pedido"
                      id="outlined-start-adornment"
                      sx={{ m: 1, width: "25ch" }}
                    />


                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                       Endereço
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        label="Amount"
                      />
                    </FormControl>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={produtos}
                      sx={{ m: 1, width: "25ch" }}
                      renderInput={(params) => <TextField {...params} label="Item" />}
                    />
                    <List sx={{ m: 1 }}>
                    {["Coca-Cola 2L","Pizza Calabresa","Pizza Frango"].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
          key={value}>
             <ListItemText id={labelId} primary={`${value}`} />
          </ListItem>
          );
        })}

                    </List>
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <InputLabel htmlFor="outlined-adornment-amount">
                       Observações
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        label="Amount"
                      />
                    </FormControl>
                    
                  </div>
                </Box>

                {/* <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">Nome</InputLabel>
                        <Input id="component-simple" value={name} onChange={handleChange} />
                    </FormControl>  
                     <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">Nome</InputLabel>
                        <Input id="component-simple" value={name} onChange={handleChange} />
                    </FormControl>  
                    <br></br>
                     <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">Nome</InputLabel>
                        <Input id="component-simple" value={name} onChange={handleChange} />
                    </FormControl>  
                     <FormControl variant="standard">
                        <InputLabel htmlFor="component-simple">Nome</InputLabel>
                        <Input id="component-simple" value={name} onChange={handleChange} />
                    </FormControl>  
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            onChange={onSearchChanged}
                            placeholder="Busque o item"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search> */}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleClose}>Salvar</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
        <br />

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={filteredList}
            columns={columns}
            pageSize={5}
            localeText={{
              columnMenuLabel: "Menu",
              columnMenuShowColumns: "Visualização de Colunas",
              columnMenuFilter: "Filtrar",
              columnMenuHideColumn: "Esconder",
              columnMenuUnsort: "Desfazer Ordenação",
              columnMenuSortAsc: "Ordenar Asc",
              columnMenuSortDesc: "Ordenar Desc",
              columnHeaderSortIconLabel: "Ordenar",
              toolbarFiltersTooltipActive: (count) =>
                count !== 1 ? `${count} filtros` : `${count} filtro`,
              filterPanelAddFilter: "Adicionar Filtro",
              filterPanelDeleteIconLabel: "Excluir",
              filterPanelLinkOperator: "Operador Lógico",
              filterPanelOperators: "Operador do Filtro", // TODO v6: rename to filterPanelOperator
              filterPanelOperatorAnd: "E",
              filterPanelOperatorOr: "OU",
              filterPanelColumns: "Colunas",
              filterPanelInputLabel: "Valor",
              filterPanelInputPlaceholder: "Filtrar valor",

              // Filter operators text
              filterOperatorContains: "contém",
              filterOperatorEquals: "é exatamente",
              filterOperatorStartsWith: "começa com",
              filterOperatorEndsWith: "termina com",
              filterOperatorIs: "é",
              filterOperatorNot: "não é",
              filterOperatorAfter: "está depois de",
              filterOperatorOnOrAfter: "está em ou depois",
              filterOperatorBefore: "está antes",
              filterOperatorOnOrBefore: "está em ou antes",
              filterOperatorIsEmpty: "está vazio",
              filterOperatorIsNotEmpty: "não está vazio",
              filterOperatorIsAnyOf: "é um dos",

              // Columns panel text
              columnsPanelTextFieldLabel: "Encontrar coluna",
              columnsPanelTextFieldPlaceholder: "Título da Coluna",
              columnsPanelDragIconLabel: "Reordenar coluna",
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
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </Box>
    </Box>
  );
}