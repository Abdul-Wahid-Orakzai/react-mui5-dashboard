import { Box,useTheme,Typography } from "@mui/material"
import Header from '../../components/Header'
import {Accordion,AccordionSummary,AccordionDetails} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import { tokens } from "../../theme"

const FAQs = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m={'20px'}>
      <Header title={'FAQs'} subtitle={'Frequently Asked Questions Page'} />

    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sapiente facere eum odit inventore assumenda. Quam facere laboriosam quos esse impedit assumenda ducimus fugit ut, inventore culpa sequi aliquam vel neque! Neque, maiores consequuntur quos dolor odio itaque qui autem quaerat optio repudiandae quis voluptatum quidem molestias ipsam laborum doloremque.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          How to register user ?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sapiente facere eum odit inventore assumenda. Quam facere laboriosam quos esse impedit assumenda ducimus fugit ut, inventore culpa sequi aliquam vel neque! Neque, maiores consequuntur quos dolor odio itaque qui autem quaerat optio repudiandae quis voluptatum quidem molestias ipsam laborum doloremque.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          What if i don't have an email ?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sapiente facere eum odit inventore assumenda. Quam facere laboriosam quos esse impedit assumenda ducimus fugit ut, inventore culpa sequi aliquam vel neque! Neque, maiores consequuntur quos dolor odio itaque qui autem quaerat optio repudiandae quis voluptatum quidem molestias ipsam laborum doloremque.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          How to make data grid table ?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sapiente facere eum odit inventore assumenda. Quam facere laboriosam quos esse impedit assumenda ducimus fugit ut, inventore culpa sequi aliquam vel neque! Neque, maiores consequuntur quos dolor odio itaque qui autem quaerat optio repudiandae quis voluptatum quidem molestias ipsam laborum doloremque.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Why should someone design Dashboard first ?
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sapiente facere eum odit inventore assumenda. Quam facere laboriosam quos esse impedit assumenda ducimus fugit ut, inventore culpa sequi aliquam vel neque! Neque, maiores consequuntur quos dolor odio itaque qui autem quaerat optio repudiandae quis voluptatum quidem molestias ipsam laborum doloremque.
        </Typography>
      </AccordionDetails>
    </Accordion>



    </Box>
  )
}

export default FAQs