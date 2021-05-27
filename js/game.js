// Tramite due chiamate axios, generiamo 2 numeri casuali: uno per l'utente e uno per il pc. 
// Stampiamo in pagina i due numeri e il vincitore, ossia chi ha il numero più grande.

var app = new Vue(
    {
        el: "#root",
        data: {
            numeroUtente: 0,
            numeroPc: 0
        },
        mounted: function() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/int")
                .then(
                    (result) => {
                        console.log(result.data.response);
                        this.numeroUtente = result.data.response;
                    }
                );
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/int")
                .then(
                    (result) => {
                        console.log(result.data.response);
                        this.numeroPc = result.data.response;
                    }
                );    
        }
    }
);