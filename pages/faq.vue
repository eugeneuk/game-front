<template>
    <div class="fq__wrap">
          <h1 class="title fq__title">Часто задаваемые вопросы</h1>
          <div class="fq">
            
            <div class="que" style="height: 70px;" v-for="item in faq" :key="item.id">
              <div class="que__inner" style="height: 70px;">
                <div class="que-text">Как быстро создать аккаунт на сайте?</div>
                <div class="que-arrow__wrap">
                  <div class="que-arrow"></div>
                </div>
              </div>
              <div class="que-ans">
                <p>
                  Сделанные на базе интернет-аналитики выводы формируют глобальную экономическую сеть и при этом - ассоциативно распределены по отраслям.
                </p>
                <p>
                  Ясность нашей позиции очевидна: внедрение современных методик, в своём классическом представлении, допускает внедрение новых принципов формирования материально-технической и кадровой базы.
                </p>
                <p>
                  Лишь ключевые особенности структуры проекта будут подвергнуты целой серии независимых исследований.
                </p>
              </div>
            </div>
            
            
          </div><!-- /.fq -->
        </div>
</template>

<script>
import  axios  from "axios";
export default{
    head: {
        script: [
        {
            src: "js/faq.js",
            body: true,
        },
        ],
    },
    data(){
        return {
            faq: {}
        }
    },
    mounted(){
        this.getFaq()
    },

    methods:{
        getFaq(){
            axios
            .get(process.env.API_URL + 'faq')
            .then(res => {
                this.faq = res.data.data
                console.log(res.data.data)
            })

        }
    }
}
</script>
