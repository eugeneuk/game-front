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
                  <div class="fb-select-label">Выберите тип товара</div>
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
              <input type="number" v-model="product.price" class="fb-input" placeholder="Цена в рублях">
            </div>

            <div class="fb-block">
              <label for="order_number" class="fb-label">Игра</label>
              <input type="text"  class="fb-input" :value="current_game_name" disabled="">
            </div>

           
            <div style="width:100% !important" v-if="fields">
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




 <div id="my-modal" v-if='show_modal' style="width:33%; height:230px; position:absolute; padding:4px; border-radius: 10px; border:1px solid #ccc; top:200px; background-color:#fff; left: 33%;
    ">
                <h3 style="text-align:center">Выберите игру</h3>

<div class="fb-block" style="text-align:center; width:100%;">
              <label class="fb-label" style="width:100%;">Игры</label>
              <div class="fb-select dd select">
                <input type="hidden" class="dd-input" value="rus">
                <div class="fb-select-item selected">
                  <div class="fb-select-label">Выберите игру</div>
                </div>
                <div class="fb-select-arrow">▼</div>
                <ul class="fb-select-list dd-list">
                  
                  <li v-for="item in game_list" :key="item.id">
                    <div class="fb-select-item dd-item" :data-value="item.id" @click="makeSelection(item.id, item.name)">{{item.name}}</div>
                  </li>
                  

        
                </ul>
              </div>
                 <button id="sendGame" class="mbtn" @click="getGameFields">Выбрать</button>
            </div>
            </div>
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
            fields:{},
            product:{
                type: null,
                name: null,
                price:null,
                fields:[],
                game_id: null
            }
        }
    },

    mounted() {
       this.getGameList()
    },

    methods:{
        getGameList(){
          
            axios
                .get(process.env.API_URL + 'profile/product/get-games',  this.getConfig())
                .then(res => {
                    console.log(res.data.games)
                        this.game_list = res.data.games;
                })

        },

        getGameFields(){
            this.show_modal = false;
            
            axios
                .get(process.env.API_URL + `profile/product/create/${this.current_game}`,  this.getConfig())
                .then(res => {
                    console.log(res)
                    this.game = res.data.data
                    this.types = res.data.data.type
                    this.fields = res.data.data.fields

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
                    location.href='/profile/products';
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
