<template>
  <div class="sign__wrap">
    <h1 class="title sign__title">Авторизация аккаунта</h1>
    <form action="#" class="sign">
      <div class="sign-block">
        <label for="login" class="sign-label">Введите никнейм</label>
        <input
          v-model="user.email"
          type="text"
          id="login"
          class="sign-input"
          placeholder="Email"
        />
      </div>
      <div class="sign-block">
        <label for="password" class="sign-label">Введите пароль</label>
        <input
          v-model="user.password"
          type="password"
          id="password"
          class="sign-input"
          placeholder="••••••••••••"
        />
      </div>

      <div class="sign-que">Забыли пароль? › <a href="#">Восстановить</a></div>

      <button class="btn sign-btn" @click.prevent="sendForm">Войти ›</button>

      <div class="sign-soc">
        <div class="sign-soc-title">Войти через социальные сети</div>
        <div class="sign-soc-row">
          <a href="#" class="sign-soc-item">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 112.196 112.196"
              style="enable-background: new 0 0 112.196 112.196"
              xml:space="preserve"
            >
              <circle
                id="XMLID_11_"
                style="fill: #4d76a1"
                cx="56.098"
                cy="56.098"
                r="56.098"
              ></circle>
              <path
                style="fill-rule: evenodd; clip-rule: evenodd; fill: #ffffff"
                d="M53.979,80.702h4.403c0,0,1.33-0.146,2.009-0.878
                      c0.625-0.672,0.605-1.934,0.605-1.934s-0.086-5.908,2.656-6.778c2.703-0.857,6.174,5.71,9.853,8.235
                      c2.782,1.911,4.896,1.492,4.896,1.492l9.837-0.137c0,0,5.146-0.317,2.706-4.363c-0.2-0.331-1.421-2.993-7.314-8.463
                      c-6.168-5.725-5.342-4.799,2.088-14.702c4.525-6.031,6.334-9.713,5.769-11.29c-0.539-1.502-3.867-1.105-3.867-1.105l-11.076,0.069
                      c0,0-0.821-0.112-1.43,0.252c-0.595,0.357-0.978,1.189-0.978,1.189s-1.753,4.667-4.091,8.636c-4.932,8.375-6.904,8.817-7.71,8.297
                      c-1.875-1.212-1.407-4.869-1.407-7.467c0-8.116,1.231-11.5-2.397-12.376c-1.204-0.291-2.09-0.483-5.169-0.514
                      c-3.952-0.041-7.297,0.012-9.191,0.94c-1.26,0.617-2.232,1.992-1.64,2.071c0.732,0.098,2.39,0.447,3.269,1.644
                      c1.135,1.544,1.095,5.012,1.095,5.012s0.652,9.554-1.523,10.741c-1.493,0.814-3.541-0.848-7.938-8.446
                      c-2.253-3.892-3.954-8.194-3.954-8.194s-0.328-0.804-0.913-1.234c-0.71-0.521-1.702-0.687-1.702-0.687l-10.525,0.069
                      c0,0-1.58,0.044-2.16,0.731c-0.516,0.611-0.041,1.875-0.041,1.875s8.24,19.278,17.57,28.993
                      C44.264,81.287,53.979,80.702,53.979,80.702L53.979,80.702z"
              ></path>
            </svg>
          </a>
          <a href="#" class="sign-soc-item">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <path
                style="fill: #167ee6"
                d="M492.668,211.489l-208.84-0.01c-9.222,0-16.697,7.474-16.697,16.696v66.715
                      c0,9.22,7.475,16.696,16.696,16.696h117.606c-12.878,33.421-36.914,61.41-67.58,79.194L384,477.589
                      c80.442-46.523,128-128.152,128-219.53c0-13.011-0.959-22.312-2.877-32.785C507.665,217.317,500.757,211.489,492.668,211.489z"
              ></path>
              <path
                style="fill: #12b347"
                d="M256,411.826c-57.554,0-107.798-31.446-134.783-77.979l-86.806,50.034
                      C78.586,460.443,161.34,512,256,512c46.437,0,90.254-12.503,128-34.292v-0.119l-50.147-86.81
                      C310.915,404.083,284.371,411.826,256,411.826z"
              ></path>
              <path
                style="fill: #0f993e"
                d="M384,477.708v-0.119l-50.147-86.81c-22.938,13.303-49.48,21.047-77.853,21.047V512
                      C302.437,512,346.256,499.497,384,477.708z"
              ></path>
              <path
                style="fill: #ffd500"
                d="M100.174,256c0-28.369,7.742-54.91,21.043-77.847l-86.806-50.034C12.502,165.746,0,209.444,0,256
                      s12.502,90.254,34.411,127.881l86.806-50.034C107.916,310.91,100.174,284.369,100.174,256z"
              ></path>
              <path
                style="fill: #ff4b26"
                d="M256,100.174c37.531,0,72.005,13.336,98.932,35.519c6.643,5.472,16.298,5.077,22.383-1.008
                      l47.27-47.27c6.904-6.904,6.412-18.205-0.963-24.603C378.507,23.673,319.807,0,256,0C161.34,0,78.586,51.557,34.411,128.119
                      l86.806,50.034C148.202,131.62,198.446,100.174,256,100.174z"
              ></path>
              <path
                style="fill: #d93f21"
                d="M354.932,135.693c6.643,5.472,16.299,5.077,22.383-1.008l47.27-47.27
                      c6.903-6.904,6.411-18.205-0.963-24.603C378.507,23.672,319.807,0,256,0v100.174C293.53,100.174,328.005,113.51,354.932,135.693z"
              ></path>
            </svg>
          </a>
          <a href="#" class="sign-soc-item">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 112.196 112.196"
              style="enable-background: new 0 0 112.196 112.196"
              xml:space="preserve"
            >
              <circle
                style="fill: #3b5998"
                cx="56.098"
                cy="56.098"
                r="56.098"
              ></circle>
              <path
                style="fill: #ffffff"
                d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34
                      c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
  mounted() {
    //process.env.API_URL
  },
  methods: {
    sendForm() {
      let formData = new FormData();
      //  formData.append("name", this.user.name);
      formData.append("email", this.user.email);
      formData.append("password", this.user.password);

      if (this.validate) {
        axios
          .post(process.env.API_URL + "login", formData)
          .then((res) => {
            console.log(res.data.access_token);
            localStorage._token = res.data.access_token;
            this.$store.commit("setToken", res.data.access_token);

            this.$router.push("/profile");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    validate() {
      return true;
    },
  },
};
</script>
