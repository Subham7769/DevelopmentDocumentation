import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import EditableList from "../../Common/EditableFields/EditableList";

//need only applicationUseCase object
const ApplicationUsage = ({applicationUsecase,setApplicationUseCase}) => {
  return (
    <Table size="large" aria-label="purchases" width="100%">
      <TableBody>
        <TableRow>
          <TableCell>
          <EditableList
              items={applicationUsecase.Applications}
              name={"Applications"}
              color={"lightgrey"}
              mainData={applicationUsecase}
              setMainData={setApplicationUseCase}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ApplicationUsage;
