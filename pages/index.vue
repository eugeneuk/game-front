<template>
  <div class="main__wrap">
    <div class="alph">
      <a href="#a" class="ltr active">а</a>
      <a href="#b" class="ltr">б</a>
      <a href="#c" class="ltr">в</a>
      <a href="#d" class="ltr">г</a>
      <a href="#" class="ltr">д</a>
      <a href="#" class="ltr">е</a>
      <a href="#" class="ltr">ё</a>
      <a href="#" class="ltr">ж</a>
      <a href="#" class="ltr">з</a>
      <a href="#" class="ltr">и</a>
      <a href="#" class="ltr">й</a>
      <a href="#" class="ltr">к</a>
      <a href="#" class="ltr">л</a>
      <a href="#" class="ltr">м</a>
      <a href="#" class="ltr">н</a>
      <a href="#" class="ltr">о</a>
      <a href="#" class="ltr">п</a>
      <a href="#" class="ltr">р</a>
      <a href="#" class="ltr">с</a>
      <a href="#" class="ltr">т</a>
      <a href="#" class="ltr">у</a>
      <a href="#" class="ltr">ф</a>
      <a href="#" class="ltr">х</a>
      <a href="#" class="ltr">ц</a>
      <a href="#" class="ltr">ч</a>
      <a href="#" class="ltr">ш</a>
      <a href="#" class="ltr">щ</a>
      <a href="#" class="ltr">ъ</a>
      <a href="#" class="ltr">ы</a>
      <a href="#" class="ltr">ь</a>
      <a href="#" class="ltr">э</a>
      <a href="#" class="ltr">ю</a>
      <a href="#" class="ltr">я</a>
    </div>
    <div class="main">
      <div class="main__inner">
        <div class="card__wrap" v-for="item in games" :key="item.id" >
          <div class="card">
            <img
              src="~/assets/assets/card-pic-example.png"
              alt="example"
              class="card-pic"
            />
            <div class="card-title">
                <NuxtLink :to="{ name: 'game-id', params: { id: item.id }}"><p>{{item.name}}</p></NuxtLink>
            </div>
            <div class="card-vers">
              <div class="card-vers-item">RU</div>
              <div class="card-vers-item">EN</div>
              <div class="card-vers-item">UA</div>
              <div class="card-vers-item">Free</div>
            </div>
            <div class="card-tags">
              <a href="#" class="tag" v-for="type in types" :key="type.id">{{type.name}}</a>
              
            </div>
          </div>
        </div>
        <!-- /.card__wrap -->
        
      </div>
    </div>
  </div>
</template>

<script>
import  axios  from 'axios';
export default {

  mounted() {
      this.getGames();
        this.getTypes();
       
  },
  data() {
        return {
            games:{},
            types:{}
        }
  },

  
    methods:{
        getGames(){
            
            axios
                .get(process.env.API_URL + 'get-games')
                .then(res => {
                        console.log(res.data.data);
                        this.games = res.data.data;
                })

        },

        getTypes(){
            
            axios
                .get(process.env.API_URL + 'get-types')
                .then(res => {
                        console.log(res.data.data);
                        this.types = res.data.data;
                })

        },

    }
}
</script>
