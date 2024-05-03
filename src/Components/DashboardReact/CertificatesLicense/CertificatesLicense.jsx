import { IconButton, Table, TableBody, TableCell, TableRow } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditableList from "../../Common/EditableFields/EditableList";

const CertificatesLicense = ({credentialCollection,setCredentialCollection}) => {

  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
            <EditableList
              items={credentialCollection.Certificates}
              name={"Certificates"}
              color={"lightgrey"}
              mainData={credentialCollection}
              setMainData={setCredentialCollection}
            />
          </TableCell>
          <TableCell>
            <EditableList
              items={credentialCollection.Licenses}
              name={"Licenses"}
              color={"lightgrey"}
              mainData={credentialCollection}
              setMainData={setCredentialCollection}
            />
          </TableCell>
          <TableCell>
            <EditableList
              items={credentialCollection.Documents}
              name={"Documents"}
              color={"lightgrey"}
              mainData={credentialCollection}
              setMainData={setCredentialCollection}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CertificatesLicense;
