import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const data=[
    {"NAME":"NIDHIN","COURSE":"BTECH","PLACE":"TVM","Address":"xyz"},
    {"NAME":"LEN","COURSE":"BCOM","PLACE":"BANGALORE" ,"Address":"xyz"},
    {"NAME":"JOSE","COURSE":"BDS","PLACE":"MANGALORE","Address":"xyz"}
];
const Home = () => {
  return (
    <>
    <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead>
        <TableRow>
        <TableCell >Name</TableCell>
        <TableCell align="center">Course</TableCell>
        <TableCell align="center">Place</TableCell>
        <TableCell align="center" >Address</TableCell>

        </TableRow>
            </TableHead>
        <TableBody>
        {data.map((item) =>(
            <TableRow  key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {item.NAME}
              </TableCell>
              <TableCell align="center">{item.COURSE}</TableCell>
              <TableCell align="center">{item.PLACE}</TableCell>
              <TableCell align="center">{item.Address}</TableCell>   


            </TableRow>
        ))}
        </TableBody>

        </Table>
    </TableContainer>
    </>
  )
}

export default Home