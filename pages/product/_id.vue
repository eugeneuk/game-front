<template>
    <div>
        
       
        <bread :level_1="product.name" :level_2="page_title" :level_1_uri="`/game/${product.game_id}`" />
        
        <div v-if="loading" id="loader" style="position:absolute; top:30%; left:50%">
          <img src="/loader.gif" alt="" />
        </div>

        <div class="or__wrap" :style="[loading ? {'opacity': '0'} : {'opacity': '1'}]">
          <div class="or-col">
            <h1 class="title or__title">Оформление заказа</h1>
            <a href="#" class="or-linkback">‹ {{product.name}}</a>

            <div class="or-info">
              
              <div class="or-info-row" v-for="field in product.results" :key="field.id">
                <div class="or-info-label">{{field.label}}</div>
                <div class="or-info-value">{{field.content}}</div>
              </div>
              
            </div><!-- /.of-info -->

            <div class="pay">
              <div class="pay-title">Выберите способ оплаты:</div>

              <div class="pay-select dd select">
                <input type="hidden" class="dd-input" value="card">
                <div class="pay-select-item selected">
                  <img src="/assets/assets/icon-cards.png" alt="cards" class="pay-select-icon">
                  <div class="pay-select-label">Банковская карта</div>
                </div>
                <div class="pay-select-bar">
                  <div class="pay-select-amount">{{product.price}} RUB</div>
                  <div class="pay-select-arrow">▼</div>
                </div>
                <ul class="pay-select-list dd-list">
                  <li>
                    <div class="pay-select-item dd-item" data-value="card">
                      <img src="/assets/assets/icon-cards.png" alt="cards" class="pay-select-icon">
                      <div class="pay-select-label">Банковская карта</div>
                    </div>
                  </li>
                  <li>
                    <div class="pay-select-item dd-item" data-value="wallet">
                      <img src="/assets/assets/icon-cards.png" alt="cards" class="pay-select-icon">
                      <div class="pay-select-label">Электронный кошелек</div>
                    </div>
                  </li>
                  <li>
                    <div class="pay-select-item dd-item" data-value="phone">
                      <img src="/assets/assets/icon-cards.png" alt="cards" class="pay-select-icon">
                      <div class="pay-select-label">По номеру телефона</div>
                    </div>
                  </li>
                  <li>
                    <div class="pay-select-item dd-item" data-value="crypto">
                      <img src="/assets/assets/icon-cards.png" alt="cards" class="pay-select-icon">
                      <div class="pay-select-label">Криптовалюта</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="pay-f">
                <div class="pay-balance__wrap">
                  <div class="pay-balance">
                    Ваш баланс: <span class="value">5.970 RUB</span>
                  </div>
                </div>
                <button class="btn pay-submit">Оформить заказ ›</button>
              </div>
            </div><!-- /.pay -->

            <div class="or-res">
              <div class="or-res__title">Отзывы покупателей</div>
              <div class="or-res__wrap">
                <div class="or-res__inner">
                  <div class="res">
                    <div class="res-pic__wrap">
                      <img src="/assets/assets/order-response-pic-example.png" alt="example" class="res-pic">
                    </div>
                    <div class="res__inner">
                      <div class="res-h">
                        <a href="#" class="res-username">Ferald Closer</a>
                        <div class="res-date">2 месяца назад</div>
                      </div>
                      <div class="res-text">Отличный продавец, хорошие цены, спасибо!</div>
                      <div class="res-f">
                        <div class="res-game">Lineage 2 (Free)</div>
                        <div class="res-amount">1.000 RUB</div>
                      </div>
                    </div>
                  </div><!-- /.res -->
                  <div class="res">
                    <div class="res-pic__wrap">
                      <img src="/assets/assets/order-response-pic-example.png" alt="example" class="res-pic">
                    </div>
                    <div class="res__inner">
                      <div class="res-h">
                        <a href="#" class="res-username">Ferald Closer</a>
                        <div class="res-date">2 месяца назад</div>
                      </div>
                      <div class="res-text">Отличный продавец, хорошие цены, спасибо!</div>
                      <div class="res-f">
                        <div class="res-game">Lineage 2 (Free)</div>
                        <div class="res-amount">1.000 RUB</div>
                      </div>
                    </div>
                  </div><!-- /.res -->
                  <div class="res">
                    <div class="res-pic__wrap">
                      <img src="/assets/assets/order-response-pic-example.png" alt="example" class="res-pic">
                    </div>
                    <div class="res__inner">
                      <div class="res-h">
                        <a href="#" class="res-username">Ferald Closer</a>
                        <div class="res-date">2 месяца назад</div>
                      </div>
                      <div class="res-text">Отличный продавец, хорошие цены, спасибо!</div>
                      <div class="res-f">
                        <div class="res-game">Lineage 2 (Free)</div>
                        <div class="res-amount">1.000 RUB</div>
                      </div>
                    </div>
                  </div><!-- /.res -->
                  <div class="res">
                    <div class="res-pic__wrap">
                      <img src="/assets/assets/order-response-pic-example.png" alt="example" class="res-pic">
                    </div>
                    <div class="res__inner">
                      <div class="res-h">
                        <a href="#" class="res-username">Ferald Closer</a>
                        <div class="res-date">2 месяца назад</div>
                      </div>
                      <div class="res-text">Отличный продавец, хорошие цены, спасибо!</div>
                      <div class="res-f">
                        <div class="res-game">Lineage 2 (Free)</div>
                        <div class="res-amount">1.000 RUB</div>
                      </div>
                    </div>
                  </div><!-- /.res -->
                  <div class="res">
                    <div class="res-pic__wrap">
                      <img src="/assets/assets/order-response-pic-example.png" alt="example" class="res-pic">
                    </div>
                    <div class="res__inner">
                      <div class="res-h">
                        <a href="#" class="res-username">Ferald Closer</a>
                        <div class="res-date">2 месяца назад</div>
                      </div>
                      <div class="res-text">Отличный продавец, хорошие цены, спасибо!</div>
                      <div class="res-f">
                        <div class="res-game">Lineage 2 (Free)</div>
                        <div class="res-amount">1.000 RUB</div>
                      </div>
                    </div>
                  </div><!-- /.res -->
                  <div class="res">
                    <div class="res-pic__wrap">
                      <img src="/assets/assets/order-response-pic-example.png" alt="example" class="res-pic">
                    </div>
                    <div class="res__inner">
                      <div class="res-h">
                        <a href="#" class="res-username">Ferald Closer</a>
                        <div class="res-date">2 месяца назад</div>
                      </div>
                      <div class="res-text">Отличный продавец, хорошие цены, спасибо!</div>
                      <div class="res-f">
                        <div class="res-game">Lineage 2 (Free)</div>
                        <div class="res-amount">1.000 RUB</div>
                      </div>
                    </div>
                  </div><!-- /.res -->
                  <div class="res">
                    <div class="res-pic__wrap">
                      <img src="/assets/assets/order-response-pic-example.png" alt="example" class="res-pic">
                    </div>
                    <div class="res__inner">
                      <div class="res-h">
                        <a href="#" class="res-username">Ferald Closer</a>
                        <div class="res-date">2 месяца назад</div>
                      </div>
                      <div class="res-text">Отличный продавец, хорошие цены, спасибо!</div>
                      <div class="res-f">
                        <div class="res-game">Lineage 2 (Free)</div>
                        <div class="res-amount">1.000 RUB</div>
                      </div>
                    </div>
                  </div><!-- /.res -->
                  <div class="res">
                    <div class="res-pic__wrap">
                      <img src="/assets/assets/order-response-pic-example.png" alt="example" class="res-pic">
                    </div>
                    <div class="res__inner">
                      <div class="res-h">
                        <a href="#" class="res-username">Ferald Closer</a>
                        <div class="res-date">2 месяца назад</div>
                      </div>
                      <div class="res-text">Отличный продавец, хорошие цены, спасибо!</div>
                      <div class="res-f">
                        <div class="res-game">Lineage 2 (Free)</div>
                        <div class="res-amount">1.000 RUB</div>
                      </div>
                    </div>
                  </div><!-- /.res -->
                </div>
                <div class="or-res-shadow"></div>
              </div>
            </div>
          </div><!-- /.or-col -->

          <div class="or-col">
            <button class="btn or-chat-btntoggle active">Скрыть чат</button>
            <div class="or-chat__wrap">
              <div class="or-chat-h">
                <a href="#" class="prof">
                  <div class="prof-avatar">
                    <img src="/assets/assets/user-avatar-example1.png" alt="avatar" class="prof-avatar-pic">
                    <div class="prof-status _green"></div>
                  </div>
                  <div class="prof-info">
                    <div class="prof-username" >{{product.user.name}}</div>
                    <div class="prof-subinfo _yellow">2 отзыва</div>
                    <div class="prof-subinfo _light-gray">8 лет на сайте</div>
                  </div>
                </a><!-- /.prof -->
                <div class="or-chat-h-bar">
                  <button class="or-chat-h-btn">
                    <img src="/assets/assets/icon-exclamation.png" alt="exclamation" class="or-chat-h-btn__icon">
                  </button>
                  <button class="or-chat-h-btn">
                    <img src="/assets/assets/icon-increase.png" alt="increase" class="or-chat-h-btn__icon">
                  </button>
                </div>
              </div>
              <div class="or-chat">
                <div class="or-chat-placeholder">Напишите продавцу <br> перед оплатой</div>
                <div class="or-chat__inner">
                  <!-- это контейнер для сообщений чата -->
                </div>
              </div>
              <div class="or-chat-bar">
                <textarea class="or-chat-bar-textarea" placeholder="Напишите сообщение"></textarea>
                <button class="or-chat-bar-send">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <path d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808
                        L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193
                        c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409
                        C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div><!-- /.or-col -->
        </div>
        
    </div>
</template>



<script>
import  axios  from 'axios'
import bread from '~/components/bread.vue'

export default {
  components: { bread },
    data() {
        return {
          loading: true,
          
           page_title: 'Оформление заказа',
           product:{
             results:{

             },
             user:{
               name:null
             }
           }
        }
    },
    

    mounted() {
      
       console.log(this.$router.params)
      
       this.getProducts();

      
    },

    methods:{
        
        getProducts(){
            
            axios
                .get(process.env.API_URL + `products/show/${this.$route.params.id}`)
                .then(res => {
                        console.log(res.data.data);
                        this.product = res.data.data;
                        this.loading = false;
                })

        },

        limitStr(str, n, symb = '') {
           if (!n && !symb) return str;
            symb = symb || '';
            return str.substr(0, n - symb.length) + symb;
        },

        

        

        
     },

    

}
</script>
