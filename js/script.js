var app = new Vue(
    {
        el: "#root",
        data: {
            randomWord: "Parola casuale"
        },
        created: function() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/word')
                .then( (result) => {
                    console.log(result.data.response);
                    this.randomWord = result.data.response;
                });  
        }
    }
);