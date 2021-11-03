<template>
    <div class="gd">
          <h1 class="title gd__title">Мои товары</h1>
          
          <div class="gd-switch-wrapper switch-wrapper">
            <div class="gd-switch switch">
              <input type="hidden" class="switch-value" value="1">
<!--
              <div @click="filter(item.id)" class="gd-switch-item switch-item" :data-value="item.id" :data-box-id="item.id" v-for="item in types" :key="item.id">
                  {{item.name}}
                </div>
    -->           
            </div>
                <a href="/profile/products/create">
                <button class="btn gd-btn-sell" >
                    <img src="/assets/assets/icon-sell.png" alt="sell" class="gd-btn-sell__icon">
                    <div class="gd-btn-sell__text" >Добавить товар</div>
                </button>
                </a>
              
            <div class="switch-box active" data-box-id="1">
              <div class="gd-table__wrapper">
                <div class="gd-table__frame">
                  <table class="gd-table">
                    <thead>
                      <tr>
                        <th>Описание</th>
                        <th>Игра</th>
                        <th>Цена</th>
                        <th>Тип товара</th>
                       
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in products" :key="item.id">
                        <td class="item" >
                          <div class="item__inner">
                            <img src="/assets/assets/game-item-example.png" alt="game-item" class="item-pic">
                            <div class="item-name">{{limitStr(item.name,80)}}</div>
                          </div>
                        </td>
                        <td>
                
                            <div class="prof-info">
                             <div class="item-name">{{item.game}}</div>
                            </div>
                         
                        </td>
                        <br>
                          <td class="blue">{{item.price}} RUB</td>
                          <br>
                        <td>{{item.type}}</td>
                      
                        
                       
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
                <div class="gd-table-mobile__wrap">
                  <div class="gd-table-mobile">
                    

                    <!-- STATY -->
                    <div class="gd-table-mobile-row">
                      <div class="label">Наличие</div>
                      <div class="value">2.000 кк</div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Цена / 1кк</div>
                      <div class="value blue">1.73 RUB</div>
                    </div>
                  </div>
                <!-- END -->


                </div>
              </div>
              
            </div>
           
          </div>

        </div>
</template>


<script>
import  axios  from 'axios'

export default {
    data() {
        return {
            types:{},
            products:{}
        }
    },

    mounted() {
        console.log(this.$router.params)
       this.getTypes();
       this.getProducts();
    },

    methods:{
        getTypes(){
            
            axios
                .get(process.env.API_URL + 'profile/taxonomy/get-types',  this.getConfig())
                .then(res => {
                        console.log(res.data.data);
                        this.types = res.data.data;
                })

        },

        getProducts(){
            
            axios
                .get(process.env.API_URL + 'profile/product',  this.getConfig())
                .then(res => {
                        console.log(res.data.data);
                        this.products = res.data.data;
                })

        },

        editProduct(id){
            console.log(id)  
        },


        limitStr(str, n, symb = '') {
           if (!n && !symb) return str;
            symb = symb || '...';
            return str.substr(0, n - symb.length) + symb;
        },

        filter(id){
            this.$router.push(`/profile/products/?id=${id}`)
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

        
     },

    

}
</script>
