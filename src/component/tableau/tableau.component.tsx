/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import "./tableau.component.scss";
import { Statistique } from "../types/Joueur";

const Tableau = (props: any) => {
  const stats: Statistique[] = props.stats;

  return (
    <div className="tab">
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead className="table-head">
            <TableRow className="table-row">
              <TableCell className="sticky_cell" style={{ position: "sticky" }}>
                Joueur
              </TableCell>
              <TableCell>Equipe</TableCell>
              <TableCell>MJ</TableCell>
              <TableCell>PPM</TableCell>
              <TableCell>MPM</TableCell>
              <TableCell>RPM</TableCell>
              <TableCell>PDPM</TableCell>
              <TableCell>3P%</TableCell>
              <TableCell>%LF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((stat, index) => (
              <TableRow key={`stat_${index}`}>
                <TableCell
                  className="sticky_cell joueur_cell"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "sticky",
                  }}
                >
                  {" "}
                  <img
                    src={stat.joueur.photoUrl}
                    alt="Photo"
                    style={{ borderRadius: "50%", width: "30%" }}
                  />{" "}
                  <span>{stat.joueur.nom}</span>
                </TableCell>
                <TableCell>{stat.joueur.equipe.nom}</TableCell>
                <TableCell align="right">{stat.nbMatch}</TableCell>
                <TableCell align="right">{stat.points}</TableCell>
                <TableCell align="right">{stat.minutes}</TableCell>
                <TableCell align="right">{stat.rebonds}</TableCell>
                <TableCell align="right">{stat.pd}</TableCell>
                <TableCell align="right">{stat.points3}</TableCell>
                <TableCell align="right">{stat.lancerFranc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <caption>
            Statistique moyenne par match classé par nombre de points par match
          </caption>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tableau;
