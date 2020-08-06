<template>
    <div class="iv-d3-wrapper" :id="id">
    </div>
</template>
<script>
import * as d3 from "d3";
export default {
    props:{
        src:{
            type:String,
            required:false
        },
        exec:{
            type:Function,
            required:false
        },
        id:{
            type:String,
            required:true
        }
    },
    mounted(){
        if(this.exec){
            this.exec(d3,this.id);
        }else if(this.src){
            var id = this.id;
            import(this.src).then(
                file => {
                    file(d3,id)
                }).catch(
                    err => {
                        console.log(err);
                    }
                )   
        }
        else{
            throw Error("One of exec or src must be provided");
        }
    }
}
</script>
