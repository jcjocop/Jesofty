/*
    main.js
    Contiene código de Vue

*/
// Creación de la instancia Vue
const vm = new Vue({

    el: 'main',
    data: {
        mensaje: '',
        agregado: false,
        edad: 44,
        dias_laborales: ['lunes','martes','miercoles','jueves','viernes'],
        newDay: '',
        tareas_pendientes: [
            {tarea: "Vue, terminar de aprender", prioridad:"alta"},
            {tarea: "FB, aprender autenticaciones", prioridad:"media"},
            {tarea: "Git-Hub, aprender", prioridad:"baja"}
        ],
        persona: {
            nombre: 'Juan',
            profesion: 'dev',
            ciudad: 'Valencia'
        },
        sports: [],
        newSport: '',
        newAnsw: '',
    },
    methods:{
        f_agregar: function (event) {
            this.agregado = true
        },
        addDay: function () {

            this.dias_laborales.push(this.newDay);
            console.log("nuevo día ? ",this.newDay);
            this.newDay = '';
        },
        addSport: function () {

            this.sports.push(this.newSport);
            //this.sports.push(this.newSport, this.newAnsw);
            console.log("deporte ? ", this.newSport, ", lo practico ? ", this.newAnsw);
            this.newSport = '';
            this.newAnsw = '';
        }
    } // methods
});
