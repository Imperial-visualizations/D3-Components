<template>
    <div class="iv-d3-wrapper" :id="id">
    </div>
</template>
<script>
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
            this.exec(this.id);
        }else if(this.src){
            import(this.src).then(
                file => {
                    console.log(`File succesfully loaded`)
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
