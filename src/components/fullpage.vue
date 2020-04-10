<template>
<div @wheel="wheelEvent($event)">
        <transition-group 
            tag="div" 
            :name="name">
                <div class="block" 
                v-show="index==currentIndex" 
                v-for="(list,index) in pages" 
                :key="index" 
                :style="{'background-color':bgcolor&&bgcolor[index]?bgcolor[index]:basecolor}"
                @transitionend = "wheelEnd"
                
            >{{list}}
            <slot v-if="index===0"></slot>
            </div>
        </transition-group>
        </div>
</template>

<script>

export default {
    props:{
        bgcolor:{
            type:Array
        },
        pages:{
            type:Number,
            required:true,
        },
        basecolor:{
          default:'#c80'
        }
    },
    data(){
        return{
    currentIndex:0,
    name:'',
    isWheel:true,
    endEnter:1
        }
    },
    methods:{
    wheelEvent(e){
      if(!this.isWheel){
        return
      } 
      if(e.deltaY>0){
        this.name = 'down'
        if(this.currentIndex<this.pages-1){
          this.isWheel =false
          this.currentIndex++;
        }
      }
      if(e.deltaY<0){
        this.name = 'up'
        if(this.currentIndex>0){
          this.isWheel =false
          this.currentIndex--;
        }
      }
    },
    wheelEnd(){
      this.endEnter++
      if(this.endEnter == 2){
        this.endEnter = 0
        this.isWheel =true
      }
    }
  },
  mounted(){
      console.log(this.bgcolor)
  }
}
</script>

<style>
#fullPageContent{
    width:100%;
    height:100%;
}
.block{
        position: absolute;
        height:100%;
        width:100%;
        background:#c99;
      }
      .down-enter-active{
        transition: all 1s ease;
        transform:translateY(0);
      }
      .down-leave-active{
        transition: all 1s ease;
        transform:translateY(-100%);
      }
      .down-enter{
        transform:translateY(100%);
      }
      .down-leave{
        transform:translateY(0);
      }

      .up-enter-active{
        transition: all 1s ease;
        transform:translateY(0);
      }
      .up-leave-active{
        transition: all 1s ease;
        transform:translateY(100%);
      }
      .up-enter{
        transform:translateY(-100%);
      }
      .up-leave{
        transform:translateY(0);
      }
</style>