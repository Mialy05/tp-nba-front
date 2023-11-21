import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";

  import './tableau.component.scss'


  const Tableau = ()=>{
    return(
        <div className="tab">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead  className="table-head">
              <TableRow className="table-row">
                <TableCell>Joueur</TableCell>
                <TableCell>Equipe</TableCell>
                <TableCell>MJ</TableCell>
                <TableCell>PPM</TableCell>
                <TableCell>RPM</TableCell>
                <TableCell>PDPM</TableCell>
                <TableCell>3P%</TableCell>
                <TableCell>%LF</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
                    <TableRow>
                        <TableCell>joueur.titre</TableCell>
                        <TableCell>joueur.equipe</TableCell>
                        <TableCell>joueur.MJ</TableCell>
                        <TableCell>joueur.PPM</TableCell>
                        <TableCell>joueur.RPM</TableCell>
                        <TableCell>joueur.PDPM</TableCell>
                        <TableCell>joueur.troisPointsPourcentage</TableCell>
                        <TableCell>joueur.pourcentageLF</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>joueur.titre</TableCell>
                        <TableCell>joueur.equipe</TableCell>
                        <TableCell>joueur.MJ</TableCell>
                        <TableCell>joueur.PPM</TableCell>
                        <TableCell>joueur.RPM</TableCell>
                        <TableCell>joueur.PDPM</TableCell>
                        <TableCell>joueur.troisPointsPourcentage</TableCell>
                        <TableCell>joueur.pourcentageLF</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>joueur.titre</TableCell>
                        <TableCell>joueur.equipe</TableCell>
                        <TableCell>joueur.MJ</TableCell>
                        <TableCell>joueur.PPM</TableCell>
                        <TableCell>joueur.RPM</TableCell>
                        <TableCell>joueur.PDPM</TableCell>
                        <TableCell>joueur.troisPointsPourcentage</TableCell>
                        <TableCell>joueur.pourcentageLF</TableCell>
                    </TableRow>
                </TableBody>
                
          </Table>
        </TableContainer>
        </div>
    );
  };

  export default Tableau;

