export type Joueur = {
    titre: string;
    equipe: string;
    MJ: number;
    PPM: number;
    RPM: number;
    PDPM: number;
    troisPointsPourcentage: number;
    pourcentageLF: number;
};

export const donneesTest: Joueur[] = [
    {
        titre: "Joueur1",
        equipe: "Equipe1",
        MJ: 25,
        PPM: 10,
        RPM: 5,
        PDPM: 2,
        troisPointsPourcentage: 40,
        pourcentageLF: 85,
    },
    {
        titre: "Joueur2",
        equipe: "Equipe2",
        MJ: 30,
        PPM: 12,
        RPM: 6,
        PDPM: 2.5,
        troisPointsPourcentage: 35,
        pourcentageLF: 90,
    },
    // Ajoutez d'autres joueurs selon vos besoins
];
