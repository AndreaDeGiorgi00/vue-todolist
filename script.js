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
            cuore : 1,
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
        }
    }
})





app.mount(".contenitore")