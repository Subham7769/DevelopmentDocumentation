import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TabComponent from "../../Common/TabComponent/TabComponent";
import TextBox from "../../Common/TextBox/Textbox";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Accordian from "../../Common/Accordian/Accordian";
import ProductionHubTable from "../ProductionHubTable/ProductionHubTable";
 
function Row({ variety, varieties, setVarieties }) {
  const [open, setOpen] = useState(false);
  const [currentVariety, setCurrentVariety] = useState(variety);
 
  useEffect(() => {
    setCurrentVariety(variety);
  }, [variety]);
 
  const handleOpenToggle = () => {
    setOpen(!open);
  };
 
  const handleUpdateVariety = (updatedVariety) => {
    const index = varieties.findIndex((v) => v.varietyId === updatedVariety.varietyId);
    if (index !== -1) {
      const updatedVarieties = [...varieties];
      updatedVarieties[index] = updatedVariety;
      setVarieties(updatedVarieties);
    }
  };

  
 
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={handleOpenToggle}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.name} valueUpdater={(value) => handleUpdateVariety({ ...currentVariety, name: value })} placeholder="Name" />
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.code} valueUpdater={(value) => handleUpdateVariety({ ...currentVariety, code: value })} placeholder="Code" />
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.priceRange} valueUpdater={(value) => handleUpdateVariety({ ...currentVariety, priceRange: value })} placeholder="Price Range" />
        </TableCell>
        <TableCell align="center">
          <TextBox value={currentVariety.testing} valueUpdater={(value) => handleUpdateVariety({ ...currentVariety, testing: value })} placeholder="Testings" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Accordian
                nested={true}
                label="Properties"
                component={TabComponent}
                specification={currentVariety.specification}
                setSpecification={(value) => handleUpdateVariety({ ...currentVariety, specification: value })}
              />
            </Box>
            <Box sx={{ margin: 1 }}>
              <Accordian
                nested={true}
                label="Production Hub (Locations)"
                component={ProductionHubTable}
                productionHub={currentVariety.productionHub}
                setProductionHub={(value) => handleUpdateVariety({ ...currentVariety, productionHub: value })}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
 
function VarietyData({ varieties, setVarieties, createVariety }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Variety</TableCell>
            <TableCell align="center">Product Code</TableCell>
            <TableCell align="center">Price Range</TableCell>
            <TableCell align="center">General Testing</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {varieties.map((variety, index) => (
            <Row key={variety.name + index} variety={variety} varieties={varieties} setVarieties={setVarieties} />
          ))}
          <TableRow>
            <TableCell colSpan={6} style={{ textAlign: "right" }}>
              <IconButton aria-label="add" size="large" onClick={createVariety}>
                <AddRoundedIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 
export default VarietyData;