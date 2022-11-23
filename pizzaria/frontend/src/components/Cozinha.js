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

//Custom Components
import MiniDrawer from "./MiniDrawer";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
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
    entrega: true
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
      placeholder="0000000000"
      label="0000000000"
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default function CozinhaPage() {
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
        <Grid container spacing="1"></Grid>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Busque o Produto"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
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
                    endereco:false
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