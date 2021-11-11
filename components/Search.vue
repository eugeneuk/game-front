<template>
    
<div class="h-search" style="position:relative">
      <input type="text" class="h-search__input" placeholder="Я ищу..." v-model="search" @keydown="searchMe" />
      <svg @click.prevent="searchMe"
        class="h-search__icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 56.966 56.966"
        style="enable-background: new 0 0 56.966 56.966"
        xml:space="preserve"
      >
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                  s-17-7.626-17-17S14.61,6,23.984,6z"
        />
      </svg>

      <div class="s-results hide" >
          <ul style="padding:0">
            <li v-if="results[0].length > 0" v-for="item in results[0]"><a :href="'/game/' + item.id">{{item.name}} </a><span>В Играх</span></li>
            <li v-if="results[1].length > 0" v-for="item in results[1]"><a :href="'/product/' + item.id">{{item.name}}</a> <span>В Товарах</span></li>
          </ul>
          
      </div>
    </div>

</template>




<script>
import  axios  from 'axios'

export default {
    data() {
        return {
            search: null,
            results: [{}, {}]
        }
    },

    mounted() {
        
        
       
    },

    methods:{
        searchMe(e){

            if(e.keyCode === 27){
                document.querySelector('.s-results').classList.add('hide');
                return "";
            }

            if(this.search != null && this.search.length > 2){
                document.querySelector('.s-results').classList.remove('hide');

                axios
                    .get(process.env.API_URL + 'filters?search=' + this.search)
                    .then(res => {
                            console.log(res.data);
                            this.results = res.data;
                     }).catch(e => {
                         document.querySelector('.s-results').classList.add('hide');
                     })

            }    
            

        },

        

        
     },

    

}
</script>

