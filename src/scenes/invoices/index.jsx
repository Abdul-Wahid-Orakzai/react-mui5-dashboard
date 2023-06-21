import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { tokens } from "../../theme"
import {mockDataInvoices} from '../../data/mockData'
import { AdminPanelSettingsOutlined } from "@mui/icons-material"
import { LockOpenOutlined } from "@mui/icons-material"
import { SecurityOutlined } from "@mui/icons-material"
import Header from "../../components/Header"


const Invoices = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'Name', flex:1, cellClassName:'name-column--cell'},
    {field: 'phone', headerName: 'Contact', flex:1},
    {field: 'email', headerName: 'Email', flex:1},
    {field: 'cost', headerName: 'COST', flex:1, renderCell: (params)=>(
      <Typography color={colors.greenAccent[500]}>
        ${params.row.cost}
      </Typography>
    )},
  ]


  return (
    <Box m={'20px'}>
      <Header title='INVOICES' subtitle={'List of Invoice Balances'} />
      <Box sx={{
        '& .MuiDataGrid-root' : {
          border:'none',
        },
        '&. MuiDataGrid-cell' : {
          borderBottom:'none'
        },
        '& .name-column--cell' :{
          color: colors.greenAccent[300]
        },
        '& .MuiDataGrid-columnHeaders' :{
          backgroundColor: colors.blueAccent[700],
          borderBottom:'none'
        },
        '& .MuiDataGrid-virtualScrollers' :{
          backgroundColor: colors.primary[400]
        },
        '& .MuiDataGrid-footerContainer' :{
          borderTop:'none',
          backgroundColor: colors.blueAccent[700]
        },
        "& .MuiDataGrid-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}>
        <DataGrid
        checkboxSelection
        rows={mockDataInvoices}
        columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Invoices