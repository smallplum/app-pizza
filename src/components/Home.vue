<<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza</h1>
        <h2>这里有你非常喜欢的pizza</h2>
        <button @click="goToMenu" class="btn btn-success">Let us order</button>
      </div>
    </div>   
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    methods:{
      goToMenu(){
        this.$router.push('/menu')
      }
    },
    components: {

    }
  }
</script>

<style>
#home{
  background: url(../assets/pizza.jpg) no-repeat;
  background-size: 100%;
  height:85vh;
  padding:10%;
}
h1,h2{
  margin:6%;
}
.background{
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
 
</style>
