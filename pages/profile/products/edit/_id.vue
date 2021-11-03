<template>
    <div class="fb__wrap">

         


          <h1 class="title fb__title">Добавить товар</h1>
          <form action="#" class="fb">

            <div class="fb-block">
              <label for="names" class="fb-label">Описание товара</label>
              <input type="text" v-model="product.name" id="names" class="fb-input" placeholder="Описание">
            </div>
          
          
            <div class="fb-block">
              <label class="fb-label">Тип товара</label>
              <div class="fb-select dd select">
                <input type="hidden" class="dd-input" value="rus">
                <div class="fb-select-item selected">
                  <div class="fb-select-label">{{product.type}}</div>
                </div>
                <div class="fb-select-arrow">▼</div>
                <ul class="fb-select-list dd-list">
                  
                  <li v-for="item in types" :key="item.id">
                    <div class="fb-select-item dd-item" @click="setType(item.id)">{{item.name}}</div>
                  </li>
                
                </ul>
              </div>
            </div>





            <div class="fb-block">
              <label for="login" class="fb-label">Цена, рубл</label>
              <input type="number" v-model="product.price"  class="fb-input" placeholder="Цена в рублях">
            </div>

            <div class="fb-block">
              <label for="order_number" class="fb-label">Игра</label>
              <input type="text"  class="fb-input" :value="current_game_name" disabled="">
            </div>

           
            <div style="width:100% !important" v-if="fields.length > 0">
                <div class="fb-block" v-for="item in fields" :key="item.id">
                    <label for="" class="fb-label">{{item.label}}</label>  
                    <select v-model="product.fields[item.id]"  name="" v-if="item.contents.length > 0">
                        <option   v-for="val in item.contents" :key="val.id">{{val.value}}</option>
                    </select>
                        
                    <input type="text" v-model="product.fields[item.id]"   class="fb-input" :placeholder="item.label" v-else>    

                  
                </div>
            </div>

          
            <div class="fb-f">
              <button type="submit" @click.prevent="sendForm" class="btn fb-btnsend">Добавить ›</button>
            </div>
            
        </form>




        </div>
</template>

<script>
import  axios  from 'axios'

export default {
    data() {
        return {
            current_game: null,
            current_game_name: null,
            game:{},
            game_list:{},  
            show_modal: true,  
            types: null,
            fields:[],
            
            product:{
                type: null,
                name: null,
                price:null,
                fields:[],
                game_id: null,
                game:null
            },
            current_product:{

            }
        }
    },
    beforeMount() {
        this.getProduct();
       this.getTypes();
    },
    mounted() {
       
        //this.getGameFields();
    },

    methods:{
         getTypes(){
            
            axios
                .get(process.env.API_URL + 'profile/taxonomy/get-types',  this.getConfig())
                .then(res => {
                        
                        this.types = res.data.data;
                })

        },
        getProduct(){
            axios
            .get(process.env.API_URL + `profile/product/edit/${this.$route.params.id}`,  this.getConfig())
            .then(res => {
                    //console.log(res.data.data)
                    this.current_game_name = res.data.data.game;
                    this.current_game = res.data.data.game_id;
                    this.product = res.data.data;
                    //this.getGameFields(res.data.data.game_id)

                    axios
                        .get(process.env.API_URL + `profile/product/create/${res.data.data.game_id}`,  this.getConfig())
                        .then(res2 => {
                            this.fields = res2.data.data.fields
                            /*
                            >>>
                            console.log(this.product.results)
                            this.product.results.forEach((item,i , array)=>{
                                this.fields[field_id] = item.content
                            })
                            */
                        })
            })
        },
        getGameFields(){
            this.show_modal = false;
            
            axios
                .get(process.env.API_URL + `profile/product/create/${this.current_game}`,  this.getConfig())
                .then(res => {
                    console.log(res)
                    this.game = res.data.data
                    //this.types = res.data.data.type
                   // this.all_fields = res.data.data.fields

                })


        },
        makeSelection(id, name){
            this.current_game = id;
            this.product.game_id = id;
            this.current_game_name = name;
        },
        

        // Save Form
        sendForm(){
            let fields = [];
            this.product.fields.forEach(function(item, i , array, ){
                fields[i] = item;
            });
            
            let myforms = new FormData();
            myforms.append('name', this.product.name);
            myforms.append('price', this.product.price);
            myforms.append('game_id', this.product.game_id);
            myforms.append('fields', fields);
            myforms.append('type_id', this.product.type);
            

            console.log(myforms)

             axios
                .post(process.env.API_URL + `profile/product/store`, myforms, this.getConfig())
                .then(res => {
                    console.log(res)
                })

        },


        getConfig(){
             const config = {
                headers: { 
                  Authorization: `Bearer ${localStorage._token}`,
                  'Content-Type': 'multipart/form-data',
                 }
            };
            return config;
        },

        setType(id){
            this.product.type = id;
        },
     },

    

}
</script>
