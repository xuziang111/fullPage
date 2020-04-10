<template>
    <div class="slot1">
        <span v-html="code" v-for="code in codes">Full Page</span>
        <span v-show="isShow">|</span>
    </div>
</template>

<script>
export default {
    props:['trastate'],
    data(){
        return{
            msg:"test".split('').concat(['<br>','{','<br>'],"return 'test'".split(''),['<br>','}']),
            msgIndex:0,
            codes:[],
            isShow:true,
            timer1:null,
            timer2:null,
        }
    },
    mounted(){
        console.log(this.trastate)
        this.timer1 = setInterval(this.addCodes,300)
        this.timer2 = setInterval(this.showChange,100)
    },
    watch:{
        trastate(){
            console.log(this.trastate)
            if(this.trastate == 'enter'){
                this.codes = []
                this.msgIndex=0
                this.timer1 = setInterval(this.addCodes,300)
                this.timer2 = setInterval(this.showChange,100)
            }
        }
    },
    methods:{
        addCodes(){
            this.codes.push(this.msg[this.msgIndex])
            this.msgIndex++
        },
        showChange(){
            this.isShow = !this.isShow
            if(this.msgIndex === this.msg.length){
                clearInterval(this.timer1)
                clearInterval(this.timer2)
                this.timer1 = null
                this.timer2 = null
            }
        },
    }
}
</script>

<style>
span{
    font-size:30px;
    color:red;
}
.slot1{
    position:absolute;
    bottom:30px;
    left:30px;
    font-size:30px;
    font-weight:bold;
}
</style>