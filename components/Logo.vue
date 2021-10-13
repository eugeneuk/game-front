<template>
  <div class="h-bot">
    <a href="#" class="logo h__logo">
      <div class="logo__text">good</div>
      <img src="~/assets/assets/logo.png" alt="logo" class="logo__pic" />
    </a>

    <div class="h-search">
      <input type="text" class="h-search__input" placeholder="Я ищу..." />
      <svg
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
    </div>

    <a href="/signup" style="margin-left: 294px;">
      <button
        class="h-bot-btn"
        v-if="$route.path == '/signin'"
        @click.prevent="signup"
      >
        <svg
          class="h-bot-btn__icon"
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
            d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
                      C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
                      c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
                      h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
                      c59.551,0,108,48.448,108,108S315.551,256,256,256z"
          />
        </svg>
        <div class="h-bot-btn__text">Регистрация</div>
      </button>
    </a>

    <button class="h-bot-btn" v-if="$route.path == '/'" @click.prevent="login">
      <svg
        class="h-bot-btn__icon"
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
          d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
                    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
                    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
                    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
                    c59.551,0,108,48.448,108,108S315.551,256,256,256z"
        />
      </svg>
      <div class="h-bot-btn__text">Вход</div>
    </button>

    <button
      class="h-bot-btn"
      v-if="$route.path == '/signup'"
      @click.prevent="login"
    >
      <svg
        class="h-bot-btn__icon"
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
          d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148
                    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
                    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
                    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
                    c59.551,0,108,48.448,108,108S315.551,256,256,256z"
        />
      </svg>
      <div class="h-bot-btn__text">Вход</div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
  mounted() {
    if (localStorage._token !== undefined) {
      this.auth = true;
    }
  },
  methods: {
    profile() {
      location.href = "/profile";
    },

    login() {
      location.href = "/signin";
    },

    signup() {
      location.href = "/signup";
    },
  },
};
</script>