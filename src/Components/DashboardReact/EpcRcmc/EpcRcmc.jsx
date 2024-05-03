import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import TextBox from "../../Common/TextBox/Textbox";


const EpcRcmc = ({ EPC, setEPC, RCMC, setRCMC }) => {
  const [updatedEPC, setUpdatedEPC] = useState(EPC);
  const [updatedRCMC, setUpdatedRCMC] = useState(RCMC);

  useEffect(() => {
    setEPC(updatedEPC);
    setRCMC(updatedRCMC);
  }, [updatedEPC, updatedRCMC])

  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
            <TextBox placeholder={"EPC"} value={updatedEPC} valueUpdater={(updatedValue) => setUpdatedEPC(updatedValue)} />
          </TableCell>
          <TableCell>
            <TextBox placeholder={"RCMC"} value={updatedRCMC} valueUpdater={(updatedValue) => setUpdatedRCMC(updatedValue)} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default EpcRcmc;
