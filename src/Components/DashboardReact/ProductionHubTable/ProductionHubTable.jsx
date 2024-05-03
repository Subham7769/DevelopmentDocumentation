import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import TextBox from "../../Common/TextBox/Textbox";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { toast } from "react-toastify";


//only need production Hub array of object
const productionHubTable = ({ productionHub, setProductionHub }) => {
  // console.log(productionHub)

  function AddproductionHub() {
    const stateId = Math.floor(Math.random() * 10000000000);
    const updatedProductionHub = [...productionHub,{ stateId: stateId, state: "Enter State", city: "Enter City", townVillage: "Enter Town/Village", season: "Enter Season" }]
    setProductionHub(updatedProductionHub);
  }


  function handleChange(updatedValue, hub, name) {
    const index = productionHub.findIndex((obj) => obj.stateId === hub.stateId);

    if (index !== -1) {
      const updatedProperties = [...productionHub];

      if (name === "state") {
        updatedProperties[index] = { ...updatedProperties[index], state: updatedValue };
      } else if (name === "city") {
        updatedProperties[index] = { ...updatedProperties[index], city: updatedValue };
      } else if (name === "townVillage") {
        updatedProperties[index] = { ...updatedProperties[index], townVillage: updatedValue };
      } else if (name === "season") {
        updatedProperties[index] = { ...updatedProperties[index], season: updatedValue };
      }

      setProductionHub(updatedProperties);
    } else {
      toast("No object found");
    }
  }

  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        {productionHub.map((hub, index) => {
          return (
            <TableRow key={hub + index}>
              <TableCell>
                <TextBox placeholder={"State"} value={hub.state} valueUpdater={(updatedValue) => { handleChange(updatedValue, hub, "state") }} />
              </TableCell>
              <TableCell>
                <TextBox placeholder={"City"} value={hub.city} valueUpdater={(updatedValue) => { handleChange(updatedValue, hub, "city") }} />
              </TableCell>
              <TableCell>
                <TextBox placeholder={"Town/Village"} value={hub.townVillage} valueUpdater={(updatedValue) => { handleChange(updatedValue, hub, "townVillage") }} />
              </TableCell>
              <TableCell>
                <TextBox placeholder={"Season"} value={hub.season} valueUpdater={(updatedValue) => { handleChange(updatedValue, hub, "season") }} />
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell colSpan={4} style={{ textAlign: "right" }}>
            <IconButton aria-label="add" size="large" onClick={() => AddproductionHub()}>
              <AddRoundedIcon fontSize="inherit" />
            </IconButton>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default productionHubTable;
