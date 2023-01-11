tasks = [{
    text : "comprare le uova",
    done : "true"
},
{
    text : "andare dal meccanico",
    done : "false"
},
{
    text : "vendere la casa",
    done : "true"
}]


const app = Vue.createApp({
    data(){
        return{
            tasks ,
            newText : ""
        }
    },
    methods:{
        hasDone(n){
            if(this.tasks[n].done == "true"){
                //è stata completata
                return "checked"
            }else{
                return " todo"
            }
        },
        removeTask(i){
            this.tasks.splice(i,1)
        },
        addTask(){
            //creo l'oggetto 
            let newtask = {text: this.newText , done:false }
            this.tasks.push(newtask)
        },
        done(x){
            if(this.tasks[x].done == "true"){
                this.tasks[x].done = "false"
            }else{
                this.tasks[x].done = "true"
            }
        }
    }
})





app.mount(".contenitore")