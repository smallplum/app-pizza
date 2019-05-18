<<template>
  <div class="roe mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/register.jpg" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <!-- email@qq.com -->
              <label for="email">邮箱：</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <!-- password -->
              <label for="password">密码：</label>
              <input type="password" class="form-control" v-model="password">
            </div>
        <!-- login -->
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        email:'',
        password:''
      }
    },
    beforeRouteEnter:(to,from,next)=>{
      next(vm=>vm.$store.dispatch("setUser",null))
    },
    methods:{
      onSubmit(){
        this.$ajax.get('/users').then(res=>{
          //console.log(res.data)//res.data是一个对象，将对象放入数组中
          const data = res.data//拿到对象
          const users = []//定义一个空数组
          for(let key in data){
            const user = data[key]//拿到每一个key
            //console.log(user)
            users.push(user)//把每一个对象push到数组里边去，变成一个数组           
          }
          //实现过滤
           let result = users.filter((user)=>{
              return user.email === this.email&&user.password === this.password
            })
            //console.log(result)
            //判断result的长度是否大于0，若大于0，则登录成功
            if (result!=null&&result.length>0) {
              this.$store.dispatch("setUser",result[0].email)
              this.$router.push({name:'homeLink'})
              this.$store.dispatch("setLogin",true)
              //console.log(this.$store.getters.isLogin)
            }else{
              alert('账号或密码错误')
              this.$store.dispatch("setUser",null)
            }
        })
      }
    },
    components: {

    }
  }
</script>

<style>

 
</style>
