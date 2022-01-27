import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, hoursLogged, logHours, privacy, viewTasks) {
  return { name, hoursLogged, logHours, privacy, viewTasks };
}

const rows = [
  createData("YMCA", 30, (<button className="btn btn-primary">Log</button>), "-", "View tasks"),
  createData("Blue Cross", 20, (<button className="btn btn-primary">Log</button>), " -", "View tasks"),
  createData("RMIT", 0, (<button className="btn btn-primary">Log</button>), "-", "-"),
  createData("The Smiths Foundation", 0, (<button className="btn btn-primary">Log</button>), "-", "-"),
];

const OrganizationsSummaryTable = () => {
  return (
    <div className="summary-table-container">
      <div className="summary-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Hours logged</TableCell>
                <TableCell align="center">Log hours</TableCell>
                <TableCell align="center">Privacy</TableCell>
                <TableCell align="center">View tasks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.hoursLogged}</TableCell>
                  <TableCell align="center">{row.logHours}</TableCell>
                  <TableCell align="center">{row.privacy}</TableCell>
                  <TableCell align="center">{row.viewTasks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrganizationsSummaryTable;
