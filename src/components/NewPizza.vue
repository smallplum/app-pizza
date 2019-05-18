<<template>
  <form>
      <h3>添加新的Pizza</h3>
      <div class="form-group row">
          <label class="col-sm-1">品种</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.name">
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-1">描述</label>
          <div class="col-sm-11">
              <textarea row="5" class="form-control" v-model="newPizza.description"></textarea>
          </div>
      </div>
      <p><strong>选项1</strong></p>
      <div class="form-group row">
          <label class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.size1">
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-1">价格</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.price1">
          </div>
      </div>
      <p><strong>选项2</strong></p>
      <div class="form-group row">
          <label class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.size2">
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-1">价格</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.price2">
          </div>
      </div>
      <div class="form-group row">
          <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
      </div>
  </form>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
          newPizza:{}
      }
    },
    components: {

    },
    methods:{
        addMenuItem(){
            //console.log(this.newPizza)
            let data = {
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:[
                    {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },
                    {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    }
                ]
            }
         
        //  this.$ajax.post('/admin',data)
        //   .then(res=>this.$router.push({name:'menuLink'}))

        this.$ajax.post('/admin',data)
           .then(res=>this.$store.commit("pushToMenuItems",data))
        }
           //
            // fetch('/users',{
            //     methos:'POST',
            //     headers:{
            //         'Content-type':'application/json'
            //     },body:JSON.stringify(data)
            // })
            //     .then(res=>res.json()).then(data=>console.log(data))
            //     .catch(err=>console.log(err))
        //    this.$ajax({
        //         headers: {
        //             'deviceCode': 'A95ZEF1-47B5-AC90BF3'
        //         },
        //         method: 'post',
        //         url: 'http://localhost:3000/users',
        //     }).then((res)=>{
        //         console.log(res)
        //     })
    }
  }
</script>

<style>

 
</style>
