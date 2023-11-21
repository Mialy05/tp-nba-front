/* eslint-disable @typescript-eslint/no-unused-vars */
import "./statistique-root.component.scss";
import Tableau from "../../component/tableau/tableau.component";
import { useEffect, useState } from "react";
import { Statistique } from "../../component/types/Joueur";
import axios from "axios";
import { apiUrl } from "../../env";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

const StatistiqueRoot = () => {
  const [stats, setStats] = useState<Statistique[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    axios
      .get(`${apiUrl}/stats`)
      .then((res) => {
        const response = res.data;
        console.log("REponses");

        if (response.ok) {
          setStats(response.data);
        } else {
          setError(response.err ? response.err : "Une erreur est survenue");
        }
      })
      .catch((err) => {
        const error = err.response.data;
        // eto tokony mijery status
        setError(error.err ? err.err : "Une erreur est survenue");
      });
  }, []);

  return (
    <div>
      <h1>Tableau Statistiques des joueurs</h1>
      {stats == null ? <CircularProgress /> : <Tableau stats={stats} />}

      <Snackbar
        open={error != null}
        onClose={() => {
          setError(null);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default StatistiqueRoot;
