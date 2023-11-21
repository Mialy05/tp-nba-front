/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
// import {joueur} from "../types/Propriete"
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
import { Joueur } from '../types/Propriete';

  const Tableau = (props:any)=>{
    return(
        <div className="tab">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="table-head">
              <TableRow>
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
                {props.map((joueur:Joueur, i:any) => (
                    <TableRow key={`tr_${i}`}>
                        <TableCell>{joueur.titre}</TableCell>
                        <TableCell>{joueur.equipe}</TableCell>
                        <TableCell>{joueur.MJ}</TableCell>
                        <TableCell>{joueur.PPM}</TableCell>
                        <TableCell>{joueur.RPM}</TableCell>
                        <TableCell>{joueur.PDPM}</TableCell>
                        <TableCell>{joueur.troisPointsPourcentage}</TableCell>
                        <TableCell>{joueur.pourcentageLF}</TableCell>
                        <TableCell>
                            <Button variant="contained">
                                Carte
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
          </Table>
        </TableContainer>
        </div>
    );
  };

  export default Tableau;

