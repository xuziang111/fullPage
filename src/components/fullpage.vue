<template>
<div @wheel="wheelEvent($event)">
        <transition-group
                  @enter="enter"
          @leave="leave" 
            tag="div" 
            :name="name">
                <div class="block" 
                v-show="index==currentIndex" 
                v-for="(list,index) in pages" 
                :key="index" 
                :style="{'background-color':bgcolor&&bgcolor[index]?bgcolor[index]:basecolor}"
                @transitionend = "wheelEnd"
                
            >{{list}}
            <slot v-if="index===0" :name="'page'+(index+1)" :traState="traState"></slot>
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
    endEnter:1,
    traState:'entry',
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
    },
    enter(el,done){
      console.log('enter1')
      console.log(this.currentIndex)
      // this.traState = 'leave'
      // console.log(this.name)
      if(this.currentIndex == 0){
        this.traState = 'enter'
      }
      // done()
    },
    leave(el,done){ 
      console.log('leave1')
      console.log(this.currentIndex)
      // this.traState = 'enter'
      if(this.currentIndex == 1){
        this.traState = 'leave'
      }
      // done()
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