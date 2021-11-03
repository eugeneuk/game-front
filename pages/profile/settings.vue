<template>
<div>

   <div class="set__wrap" v-if="loaded">
          <h1 class="title set__title">Настройки аккаунта</h1>


          <div style="">


      
          </div>
        

          <div class="set">
            <div class="prof">
              
              <img v-if="avatar != null" :src="avatar" ref="avatar" alt="example" class="prof-avatar">
              <div class="prof-info">
                <a href="#" @click.prevent="name_show = !name_show" class="prof-username">{{name}}</a>
                <div class="prof-subinfo _yellow">Поставил палатку</div>
              </div>
            </div>
            <div class="set-bar">
              <a href="#" class="set-bar-item" @click.prevent="avatarModalShow">Изменить аватарку</a>
              <a href="#" class="set-bar-item btn-modal" @click.prevent="passwordModalShow">Изменить пароль</a>
              <a href="#" class="set-bar-item btn-modal" @click.prevent="emailModalShow">Изменить почту</a>
              <a href="#" class="set-bar-item" >Изменить кошельки</a>
              <input type="file" ref="file" @change="previewFiles" style="display:none">
            </div>
          </div>

          <div class="not">
            <h2 class="not__title">Оповещения</h2>
            <div class="not__inner">
              <div class="not-item">
                <div class="not-item-h">
                  <img src="@/assets/assets/icon-telegram.png" alt="telegram" class="not-item-icon">
                  <div class="not-item-title">Telegram</div>
                </div>
                <p class="not-item-p">
                  Залогиньтесь с телефона, если хотите получать на нём
                  уведомления. Работают в Chrome, Firefox и Chromium
                  браузерах(Opera, Яндекс.Браузер) на компьютерах
                  и Android-устройствах.
                </p>
                <div class="not-item-desc">
                  <p>v2.1</p>
                  <p>Не работают на iOS</p>
                </div>
                <button class="not-item-btn">Включить ›</button>
              </div><!-- /.not-item -->
              <div class="not-item">
                <div class="not-item-h">
                  <img src="@/assets/assets/icon-push.png" alt="push" class="not-item-icon">
                  <div class="not-item-title">Push-уведомления</div>
                </div>
                <p class="not-item-p">
                  Залогиньтесь с телефона, если хотите получать на нём
                  уведомления. Работают в Chrome, Firefox и Chromium
                  браузерах(Opera, Яндекс.Браузер) на компьютерах
                  и Android-устройствах.
                </p>
                <div class="not-item-desc">
                  <p>v2.1</p>
                  <p>Не работают на iOS</p>
                </div>
                <button class="not-item-btn">Включить ›</button>
              </div><!-- /.not-item -->
              <div class="not-item">
                <div class="not-item-h">
                  <img src="@/assets/assets/icon-email.png" alt="email" class="not-item-icon">
                  <div class="not-item-title">E-mail оповещения</div>
                </div>
                <p class="not-item-p">
                  Залогиньтесь с телефона, если хотите получать на нём
                  уведомления. Работают в Chrome, Firefox и Chromium
                  браузерах(Opera, Яндекс.Браузер) на компьютерах
                  и Android-устройствах.
                </p>
                <div class="not-item-desc">
                  <p>v2.1</p>
                  <p ref="myRef">Не работают на iOS s</p>
                </div>
                <button  class="not-item-btn" @click.prevent="myMethod">Включить ›</button>
              </div><!-- /.not-item -->
            </div>
          </div>



<div class="avatar-modal" v-if="avatar_show" style="position:absolute;">
<div class="wr" style="position: parent">
<div class="close-w" style="position:absolute; right:6px; top:6px; cursor:pointer" @click.prevent="avatar_show = !avatar_show">X</div>
</div>


<img :src="imgSrc" alt="">
      <vue-avatar
          :width="150"
          :height="150"
          :rotation="rotation"
          :borderRadius="borderRadius"
          :scale="scale"
          ref="vueavatar"
          @vue-avatar-editor:image-ready="onImageReady"
          >
        </vue-avatar>
        <br>
        <label>
          Масштаб : {{scale}}x
          <br>
          <input
            type="range"
            min=1
            max=3
            step=0.02
            v-model='scale'
          />
        </label>
        <br>
        <label>
          Поворот : {{rotation}}°
          <br>
          <input
            type="range"
            min=0
            max=360
            step=1
            v-model='rotation'
          />
        </label>
        <br>
        
        <br>
        <button class="mf-btn-confirm" v-on:click="saveClicked">Сохранить</button>
        <br>
        






</div>



<div class="modal__wrapper" :class="{active: password_show}" @click.prevent="modalCloseFnc">
      <div class="modal">
        <div class="modal-heading _center">
          <img src="@/assets/assets/icon-lock.png" alt="lock" class="modal-heading__icon">
          <div class="modal-heading__title">Изменение пароля</div>
        </div>
        <form action="#" class="mf">
          <input type="password" v-model="oldpassword" class="mf-input" placeholder="Введите старый пароль">
          <input type="password" v-model="password" class="mf-input" placeholder="Введите новый пароль">
          <input type="password" v-model="password_confirmation" class="mf-input" placeholder="Подтвердите пароль">


          <div class="mf-captcha"><!-- временная заглушка -->
            <img src="@/assets/assets/captcha.png" alt="captcha">
          </div>

          <button class="mf-btn-confirm" @click.prevent="changePassword()">Изменить пароль ›</button>

        </form>
      </div>
    </div>

    <div class="modal__wrapper" :class="{active: email_show}" @click.prevent="modalCloseFnc">
      <div class="modal">
        <div class="modal-heading _center">
          <img src="@/assets/assets/icon-email-yellow.png" alt="email-yellow" class="modal-heading__icon">
          <div class="modal-heading__title">Привязать почту</div>
        </div>
        <form action="#" class="mf">


          <p>Текущая почта: {{email}}</p>
          
          <input type="email" class="mf-input" v-model="newEmail" placeholder="Новый e-mail">
          <input type="password" class="mf-input" v-model="current_password" placeholder="Пароль">




          <div class="mf-captcha"><!-- временная заглушка -->
            <img src="@/assets/assets/captcha.png" alt="captcha">
          </div>

          <button class="mf-btn-confirm" @click.prevent="changeEmail">Отправить подтверждение ›</button>

        </form>
      </div>
    </div>



    <div class="modal__wrapper" :class="{active: name_show}" @click.prevent="modalCloseFnc">
      <div class="modal">
        <div class="modal-heading _center">
          <img src="@/assets/assets/icon-email-yellow.png" alt="email-yellow" class="modal-heading__icon">
          <div class="modal-heading__title">Изминить имя</div>
        </div>
        <form action="#" class="mf">
    
          
          <input type="email" class="mf-input" v-model="newName" placeholder="Новое имя" >
          <!--
          <input type="text" class="mf-input" v-model="newDescription" placeholder="Новый слоган" >
          -->



         

          <button class="mf-btn-confirm" @click.prevent="changeName">Отправить подтверждение ›</button>

        </form>
      </div>
    </div>


    








          
        </div>

    <div v-else style="position:absolute; top:30%; left:50%">
      <img src="/loader.gif" alt="" />
    </div>
</div>


</template>


<script>
  import VueCropper from "vue-cropperjs";
  import VueAvatar from '@/components/vue-avatar/VueAvatar';
  import axios from "axios";
  export default{
    components: {
      VueCropper,
       VueAvatar: VueAvatar
    },
      
    data() {
        return {
          avatar: "",
          name:"",
          email:"",
          password_show: false,
          email_show: false,
          avatar_show: false,
          imgSrc: "",
          cropImg: "",
          isModal: false,

          rotation: 0,
          scale: 1,
          borderRadius: 200,
            
          newEmail: null,
          current_password: '',

          oldpassword: null,
          password: null,
          password_confirmation: null,

          name_show: false,
          newName:'',
          newDescription: '',
          loaded: false,
        }
    },
    mounted() {
      this.auth()
      this.name = localStorage.username;
      this.email = localStorage.email;
      this.avatar = process.env.BASE_URL + 'storage' + localStorage.avatar

    },

    methods:{

      auth(){
      //mounted() {
      //this.auth()
        const config = {headers: { Authorization: `Bearer ${localStorage._token}` , 'Accept': 'application/json' }};
          axios
            .post(process.env.API_URL + 'checkAuth', '', config)
            .then(res => {
              if(! res.data.success == true ){
                  this.$router.push("/signin");
              }
              this.loaded = true;
              console.log('auth: ' + res.data.success)
            })
            .catch(e => {
                this.$router.push("/signin");
            })
        },

        previewFiles: function(ev) {
          let image = ev.target.files[0]
          this.readMyFile(image)

        },
        readMyFile(image){
          let reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = e => {
              console.log(e)
              this.imgSrc = e.target.result
              
          }
          //this.toasted.show('Saved')

          
        },
        getImage(){
            console.log('ok')
        },
        avatarModalShow(){
            this.avatar_show = !this.avatar_show
            //document.body.classList.add("noscroll");    
        },
        passwordModalShow(){
            this.password_show = !this.password_show
            document.body.classList.add("noscroll");    
        },
        emailModalShow(){
            this.email_show = !this.email_show
            document.body.classList.add("noscroll");    
        },
        modalCloseFnc(e){

          if (e.target.classList.contains("modal__wrapper")) {
              this.password_show = false;
              this.email_show = false;
              this.avatar_show = false;
              this.name_show = false;
              document.body.classList.remove("noscroll");
           }
        },

        getMyImg(){
            document.getElementById('checkImg').click();
        },
        cropImage() {
        // get image data for post processing, e.g. upload or setting image src
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        },
        rotate() {
          // guess what this does :)
          this.$refs.cropper.rotate(90);
        },


       saveClicked: function saveClicked() {
            var img = this.$refs.vueavatar.getImageScaled();
            this.saveImage(img.toDataURL())
            this.$refs.avatar.src = img.toDataURL();
            this.avatar_show = !this.avatar_show;
        },
        onImageReady: function onImageReady() {
            this.scale = 1;
            this.rotation = 0;
        },
        
        saveImage(image){
            console.log(localStorage._token)
            let formData = new FormData();
            formData.append("image", image)

            const config = {
                headers: { 
                  Authorization: `Bearer ${localStorage._token}`,
                  'Content-Type': 'multipart/form-data',
                 }
            };
            axios
            .post(process.env.API_URL + 'profile/avatar-update', formData, config)
            .then(res => {
              console.log(res.data.image)
              localStorage.avatar = res.data.image
            })
            
        },


        changeEmail(){
          let formData = new FormData();
          formData.append("email", this.newEmail)
          formData.append("current_password", this.current_password)

            const config = {
                headers: { 
                  Authorization: `Bearer ${localStorage._token}`
                  
                 }
            }
            axios
            .post(process.env.API_URL + 'profile/email-update', formData, config)
            .then(res => {
              console.log(res.data.email)
              this.email = res.data.email
              localStorage.email = res.data.email
              
            })
        },

        changePassword(){
          let formData = new FormData();
          formData.append("oldpassword", this.oldpassword)
          formData.append("password", this.password)
          formData.append("password_confirmation", this.password_confirmation)

            const config = {
                headers: { 
                  Authorization: `Bearer ${localStorage._token}`
                  
                 }
            };
            axios
            .post(process.env.API_URL + 'profile/password-update', formData, config)
            .then(res => {
              console.log(res.data)
              //localStorage.avatar = res.data.image
            })
        },

        changeName(){
          let formData = new FormData();
          formData.append("name", this.newName)
          formData.append("description", this.newDescription)
         
            const config = {
                headers: { 
                  Authorization: `Bearer ${localStorage._token}`
                  
                 }
            };
            axios
            .post(process.env.API_URL + 'profile/name-update', formData, config)
            .then(res => {
              console.log(res.data.name)
              localStorage.username = res.data.name
              this.name = res.data.name
              this.name_show = ! this.name_show
              //localStorage.avatar = res.data.image
            })
        }


      }

  }
</script>