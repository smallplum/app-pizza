<<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <newpizza></newpizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import newpizza from './NewPizza.vue'
  export default {
    data () {
      return {
        //getMenuItems:[]
      }
    },
    computed:{
      getMenuItems:{
        get(){
          // return this.$store.state.menuItems
          return this.$store.getters.getMenuItems
        },
        set(){

        }
      }
    },
    components: {
      'newpizza':newpizza
    },
    created(){
       this.$ajax.get('/admin')
          .then(res=>{
            //console.log(res.data)

            const data = res.data
            let menuArray = []
            for(let key in data){
              //console.log(key)
             // console.log(data[key])
             data[key].id = key
             menuArray.push(data[key])
            }
            this.$store.commit('setMenuItems',menuArray)
            //this.getMenuItems = menuArray
            //console.log(this.getMenuItems)
          })
    },
    methods:{
      deleteData(item){
        this.$ajax.delete('/admin/'+item.id)
        // .then(data=>this.$router.push({name:'menuLink'}))
        .then(data=>{
          this.$store.commit('removeMenuItems',item)
        })
        .catch(err=>console.log(err))
      }
    }
  }
</script>

<style>

 
</style>
