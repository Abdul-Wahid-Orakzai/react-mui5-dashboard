import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme"
import ProgressCircle from "../../components/ProgressCircle"
import { mockTransactions } from '../../data/mockData'
import { DownloadOutlined, EmailOutlined, PointOfSaleOutlined, TrafficOutlined, PersonAddOutlined } from "@mui/icons-material"
import BarCharts from '../../components/BarCharts'
import LineCharts from '../../components/LineCharts'
import PieCharts from '../../components/PieCharts'
import Geography from '../../components/Geography'
import StatBox from '../../components/StatBox'
import GeoChart from "../../components/Geography"


const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m={'20px'}>
      <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
      <Box>
        <Button  sx={{backgroundClip: colors.blueAccent[700], 
          color: colors.grey[100],
          fontSize: '14px',
          fontWeight:'bold',
          padding:'10px 20px',
        }}>
            <DownloadOutlined />
            Download Reports
        </Button>
      </Box>
            </Box>
      {/* GRID Flex & Charts */}
      <Box 
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap='20px' 
      >
        {/* RoW 1 */}
        <Box gridColumn='span 3' 
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox 
            title='12,361'
            subtitle='Emails Sent'
            progress='0.75'
            increase='+14%'
            icon={
              <EmailOutlined 
              sx={{color:colors.greenAccent[600], fontSize: '26px'}}
              />
            }
          />
        </Box>
        <Box gridColumn='span 3' 
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox 
            title='43,850'
            subtitle='Sales Obtained'
            progress='0.50'
            increase='+21%'
            icon={
              <PointOfSaleOutlined
              sx={{color:colors.greenAccent[600], fontSize: '26px'}}
              />
            }
          />
        </Box>
        <Box gridColumn='span 3' 
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox 
            title='23,890'
            subtitle='New Clients'
            progress='0.30'
            increase='+7%'
            icon={
              <PersonAddOutlined 
              sx={{color:colors.greenAccent[600], fontSize: '26px'}}
              />
            }
          />
        </Box>
        <Box gridColumn='span 3' 
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatBox 
            title='1,355,465'
            subtitle='Traffice Inbound'
            progress='0.80'
            increase='+43%'
            icon={
              <TrafficOutlined 
              sx={{color:colors.greenAccent[600], fontSize: '26px'}}
              />
            }
          />
        </Box>
        {/* Row 2 */}
        <Box 
          gridColumn='span 8'
          gridRow='span 2' 
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt='25px'
            p='0 30px'
            display='flex'
            justifyContent='space-between'
          >
            <Box>
              <Typography variant="h5" fontWeight='600' color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h3" fontWeight='bold' color={colors.greenAccent[500]}>
                PKR 48,356,750
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                sx={{
                  fontSize:'26px',
                  color: colors.greenAccent[500]
                }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height='250px' mt ='-20px'>
            <LineCharts isDashboard={true} />
          </Box>
          </Box>
          {/* TRANSACTIONS */}
          <Box gridColumn='span 4' 
          gridRow='span 2' 
          backgroundColor={colors.primary[400]} 
          overflow='auto'>
              <Box 
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom= {`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p='15px'
              >
                <Typography 
                color={colors.grey[100]} 
                variant="h5" 
                fontWeight={'600'}
                >
                  Recent Transactions
                </Typography>
              </Box>
              {mockTransactions.map((transaction, index)=>(
                <Box
                key={`${transaction.txId} - ${index}`}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                borderBottom= {`4px solid ${colors.primary[500]}`}
                p='15px'
                >
                  <Box>
                  <Typography 
                    color={colors.greenAccent[500]} 
                    variant="h5" 
                    fontWeight={'600'}
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography 
                    color={colors.grey[100]} 
                  >
                    {transaction.user}
                  </Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{transaction.date}</Box>
                  <Box 
                  backgroundColor={colors.greenAccent[500]}
                  p='5px 10px'
                  borderRadius='4px'
                  >
                    {transaction.cost}
                  </Box>
                </Box>
              ))}
          </Box>
          {/* Row 3 */}
          <Box 
            gridColumn='span 4'
            gridRow='span 2'
            backgroundColor={colors.primary[400]}
          >
            <Typography variant="h5" fontWeight='600'>
                Campaign
            </Typography>
            <Box 
              display='flex' 
              flexDirection='column' 
              // justifyContent={'center'}
              alignItems={'center'}
              mt='25px'>
              <ProgressCircle size="125" />
                <Typography variant="h5" color={colors.greenAccent[500]} sx={{mt:'15px'}}>
                  PKR 47,895 revenue generated
                </Typography>
                <Typography>
                  Includes extra misc expenditures and costs
                </Typography>
            </Box>
          </Box>
          <Box 
            gridColumn='span 4'
            gridRow='span 2'
            backgroundColor={colors.primary[400]}
          >
            <Typography variant="h5" fontWeight='600' sx={{p:'30px 30px 0 30px '}}>
                Sales Quantity
            </Typography>
            <Box 
              height='250px'
              mt='-20px'
            >
              <BarCharts isDashboard={true} />
            </Box>
          </Box>
          <Box 
            gridColumn='span 4'
            gridRow='span 2'
            backgroundColor={colors.primary[400]}
            p='30px'
          >
            <Typography 
              variant="h5" 
              fontWeight='600' 
              sx={{mb:'15px'}}>
                Geography Based Traffice
            </Typography>
            <Box 
              height='200px'
              mt='20px'
            >
              <GeoChart isDashboard={true} />
            </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default Dashboard











