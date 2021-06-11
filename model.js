const model = {
    inputsView: '',
    navBar: [
        {
            knappNavn: "bøker",
            funkjsonsNavn: "bokKnapp",
        },
        {
            knappNavn: "musikk",
            funkjsonsNavn: "musikkKnapp",
        },
    ],
    
    inputs:{
        nybok:{
            forfatter: "",
            tittel: "",
            årstall: null,
            sjanger: "",
        },
        nyMusikk:{
            
        }
    }
       
    ,
    bøker:[
        {
            forfatter: "Jo Nesbø",
            tittel: "spøkelse",
            årstall: 1980,
            sjanger: "horror",
           
        },
        {
            forfatter: "terje",
            tittel: "Koding for alle",
            årstall: 2020,
            sjanger: "it bok",
        },

    ],

    musikk:[
        {
            tittel: "who I am",
            artist: "the score",
            album: "atlas",
            årstall: 2017,
        },
        {
            tittel: "therese er best",
            artist: "chris og co",
            album: "best of",
            årstall: 2021,
            sanger: ["Hei", " på", " deg", " !"],
        },
    ],
}