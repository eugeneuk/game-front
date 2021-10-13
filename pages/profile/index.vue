<template>
  <div class="pr">
    <div class="pr-top">
      <h1 class="title pr__title">
        Профиль <span class="username" >{{ name }}</span>
      </h1>
      <div class="pr-regdate">
        <img
          src="~/assets/assets/icon-calendar.png"
          alt="calendar"
          class="pr-regdate__icon"
        />
        <div class="pr-regdate__text">
          Регистрация <span class="value">25 июля 2018</span>
        </div>
      </div>
    </div>
    <div class="pr-h">
      <div class="prof">
        <img
          :src="avatar"
          alt="example"
          class="prof-avatar"
        />
        <div class="prof-info">
          <a href="/profile/settings" class="prof-username">{{ name }}</a>
          <div class="prof-status">
            <div class="prof-status__icon _green"></div>
            <div class="prof-status__text">Сейчас в сети</div>
          </div>
        </div>
      </div>
      <!-- /.prof -->
      <div class="pr-bar">
        <div class="pr-balance">
          <span class="label">Баланс:</span>
          <span class="value">9.750 RUB</span>
        </div>
        <div class="pr-bar-btns">
          <button class="pr-bar-btn _left btn-modal" data-modal="add">
            Пополнить
          </button>
          <button class="pr-bar-btn _right btn-modal" data-modal="withdraw">
            Вывести
          </button>
        </div>
        <a href="#" class="pr-fa">
          <img
            src="~/assets/assets/icon-f2a.png"
            alt="f2a"
            class="pr-fa__icon"
          />
          <div class="pr-fa__inner">
            <div class="pr-fa-label">Настройка 2FA</div>
            <div class="pr-fa-desc">Двухфакторная аутентификация</div>
          </div>
        </a>
      </div>
    </div>
    <!-- /.pr-h -->

    <div class="pr-switch-wrapper switch-wrapper">
      <div class="pr-switch switch">
        <input type="hidden" class="switch-value" value="deals" />
        <div
          class="pr-switch-item switch-item active"
          data-value="deals"
          data-box-id="1"
        >
          История сделок
        </div>
        <div
          class="pr-switch-item switch-item"
          data-value="adds"
          data-box-id="2"
        >
          История пополнения
        </div>
        <div
          class="pr-switch-item switch-item"
          data-value="withdraws"
          data-box-id="3"
        >
          История вывода
        </div>
      </div>
      <div class="switch-box active" data-box-id="1">
        <div class="table__wrapper">
          <div class="table__frame">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Сумма</th>
                  <th>Статус</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _error">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        viewBox="0 0 329.26933 329"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                        ></path>
                      </svg>
                      <div class="status-text">Не выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _error">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        viewBox="0 0 329.26933 329"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                        ></path>
                      </svg>
                      <div class="status-text">Не выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="table-mobile">
          <div class="table-mobile-row">
            <div class="label">ID</div>
            <div class="value">5498770</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Сумма</div>
            <div class="value blue">360 RUB</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Статус</div>
            <div class="value status _success">
              <svg
                class="status-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 229.153 229.153"
                style="enable-background: new 0 0 229.153 229.153"
                xml:space="preserve"
              >
                <path
                  d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                        C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                        c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                        C36.794,165.501,64.017,194.924,92.356,223.549z"
                ></path>
              </svg>
              <div class="status-text">Выполнено</div>
            </div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Дата</div>
            <div class="value">25.08.2021 в 19:00</div>
          </div>
        </div>
        <div class="table-mobile">
          <div class="table-mobile-row">
            <div class="label">ID</div>
            <div class="value">5498770</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Сумма</div>
            <div class="value blue">360 RUB</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Статус</div>
            <div class="value status _error">
              <svg
                class="status-icon"
                viewBox="0 0 329.26933 329"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                ></path>
              </svg>
              <div class="status-text">Не выполнено</div>
            </div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Дата</div>
            <div class="value">25.08.2021 в 19:00</div>
          </div>
        </div>
        <div class="table-mobile">
          <div class="table-mobile-row">
            <div class="label">ID</div>
            <div class="value">5498770</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Сумма</div>
            <div class="value blue">360 RUB</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Статус</div>
            <div class="value status _success">
              <svg
                class="status-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 229.153 229.153"
                style="enable-background: new 0 0 229.153 229.153"
                xml:space="preserve"
              >
                <path
                  d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                        C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                        c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                        C36.794,165.501,64.017,194.924,92.356,223.549z"
                ></path>
              </svg>
              <div class="status-text">Выполнено</div>
            </div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Дата</div>
            <div class="value">25.08.2021 в 19:00</div>
          </div>
        </div>
      </div>
      <div class="switch-box" data-box-id="2">
        <div class="table__wrapper">
          <div class="table__frame">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Сумма</th>
                  <th>Статус</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5498770</td>
                  <td class="blue">3245 RUB</td>
                  <td class="status _error">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        viewBox="0 0 329.26933 329"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                        ></path>
                      </svg>
                      <div class="status-text">Не выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">186 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>28.08.2019 в 14.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _error">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        viewBox="0 0 329.26933 329"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                        ></path>
                      </svg>
                      <div class="status-text">Не выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _error">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        viewBox="0 0 329.26933 329"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                        ></path>
                      </svg>
                      <div class="status-text">Не выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="table-mobile">
          <div class="table-mobile-row">
            <div class="label">ID</div>
            <div class="value">5498770</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Сумма</div>
            <div class="value blue">360 RUB</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Статус</div>
            <div class="value status _success">
              <svg
                class="status-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 229.153 229.153"
                style="enable-background: new 0 0 229.153 229.153"
                xml:space="preserve"
              >
                <path
                  d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                        C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                        c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                        C36.794,165.501,64.017,194.924,92.356,223.549z"
                ></path>
              </svg>
              <div class="status-text">Выполнено</div>
            </div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Дата</div>
            <div class="value">25.08.2021 в 19:00</div>
          </div>
        </div>
        <div class="table-mobile">
          <div class="table-mobile-row">
            <div class="label">ID</div>
            <div class="value">5498770</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Сумма</div>
            <div class="value blue">360 RUB</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Статус</div>
            <div class="value status _error">
              <svg
                class="status-icon"
                viewBox="0 0 329.26933 329"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                ></path>
              </svg>
              <div class="status-text">Не выполнено</div>
            </div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Дата</div>
            <div class="value">25.08.2021 в 19:00</div>
          </div>
        </div>
      </div>
      <div class="switch-box" data-box-id="3">
        <div class="table__wrapper">
          <div class="table__frame">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Сумма</th>
                  <th>Статус</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _error">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        viewBox="0 0 329.26933 329"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                        ></path>
                      </svg>
                      <div class="status-text">Не выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _error">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        viewBox="0 0 329.26933 329"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                        ></path>
                      </svg>
                      <div class="status-text">Не выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
                <tr>
                  <td>5498770</td>
                  <td class="blue">350 RUB</td>
                  <td class="status _success">
                    <div class="status__inner">
                      <svg
                        class="status-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 229.153 229.153"
                        style="enable-background: new 0 0 229.153 229.153"
                        xml:space="preserve"
                      >
                        <path
                          d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                                C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                                c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                                C36.794,165.501,64.017,194.924,92.356,223.549z"
                        ></path>
                      </svg>
                      <div class="status-text">Выполнено</div>
                    </div>
                  </td>
                  <td>25.08.2021 в 19.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="table-mobile">
          <div class="table-mobile-row">
            <div class="label">ID</div>
            <div class="value">5498770</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Сумма</div>
            <div class="value blue">360 RUB</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Статус</div>
            <div class="value status _error">
              <svg
                class="status-icon"
                viewBox="0 0 329.26933 329"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                ></path>
              </svg>
              <div class="status-text">Не выполнено</div>
            </div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Дата</div>
            <div class="value">25.08.2021 в 19:00</div>
          </div>
        </div>
        <div class="table-mobile">
          <div class="table-mobile-row">
            <div class="label">ID</div>
            <div class="value">5498770</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Сумма</div>
            <div class="value blue">360 RUB</div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Статус</div>
            <div class="value status _success">
              <svg
                class="status-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 229.153 229.153"
                style="enable-background: new 0 0 229.153 229.153"
                xml:space="preserve"
              >
                <path
                  d="M92.356,223.549c7.41,7.5,23.914,5.014,25.691-6.779c11.056-73.217,66.378-134.985,108.243-193.189
                        C237.898,7.452,211.207-7.87,199.75,8.067C161.493,61.249,113.274,117.21,94.41,181.744
                        c-21.557-22.031-43.201-43.853-67.379-63.212c-15.312-12.265-37.215,9.343-21.738,21.737
                        C36.794,165.501,64.017,194.924,92.356,223.549z"
                ></path>
              </svg>
              <div class="status-text">Выполнено</div>
            </div>
          </div>
          <div class="table-mobile-row">
            <div class="label">Дата</div>
            <div class="value">25.08.2021 в 19:00</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pr-res">
      <div class="pr-res-h">
        <div class="pr-res__title">Отзывы покупателей</div>
        <div class="pr-res__amount">578 Отзывов</div>
      </div>
      <div class="pr-res__wrap">
        <div class="pr-res__inner">
          <div class="res">
            <div class="res-pic__wrap">
              <img
                src="~/assets/assets/order-response-pic-example.png"
                alt="example"
                class="res-pic"
              />
            </div>
            <div class="res__inner">
              <div class="res-h">
                <a href="#" class="res-username">Ferald Closer</a>
                <div class="res-date">2 месяца назад</div>
              </div>
              <div class="res-text">
                Отличный продавец, хорошие цены, спасибо!
              </div>
              <div class="res-f">
                <div class="res-game">Lineage 2 (Free)</div>
                <div class="res-amount">1.000 RUB</div>
              </div>
            </div>
          </div>
          <!-- /.res -->
          <div class="res">
            <div class="res-pic__wrap">
              <img
                src="~/assets/assets/order-response-pic-example.png"
                alt="example"
                class="res-pic"
              />
            </div>
            <div class="res__inner">
              <div class="res-h">
                <a href="#" class="res-username">Ferald Closer</a>
                <div class="res-date">2 месяца назад</div>
              </div>
              <div class="res-text">
                Отличный продавец, хорошие цены, спасибо!
              </div>
              <div class="res-f">
                <div class="res-game">Lineage 2 (Free)</div>
                <div class="res-amount">1.000 RUB</div>
              </div>
            </div>
          </div>
          <!-- /.res -->
          <div class="res">
            <div class="res-pic__wrap">
              <img
                src="~/assets/assets/order-response-pic-example.png"
                alt="example"
                class="res-pic"
              />
            </div>
            <div class="res__inner">
              <div class="res-h">
                <a href="#" class="res-username">Ferald Closer</a>
                <div class="res-date">2 месяца назад</div>
              </div>
              <div class="res-text">
                Отличный продавец, хорошие цены, спасибо!
              </div>
              <div class="res-f">
                <div class="res-game">Lineage 2 (Free)</div>
                <div class="res-amount">1.000 RUB</div>
              </div>
            </div>
          </div>
          <!-- /.res -->
          <div class="res">
            <div class="res-pic__wrap">
              <img
                src="~/assets/assets/order-response-pic-example.png"
                alt="example"
                class="res-pic"
              />
            </div>
            <div class="res__inner">
              <div class="res-h">
                <a href="#" class="res-username">Ferald Closer</a>
                <div class="res-date">2 месяца назад</div>
              </div>
              <div class="res-text">
                Отличный продавец, хорошие цены, спасибо!
              </div>
              <div class="res-f">
                <div class="res-game">Lineage 2 (Free)</div>
                <div class="res-amount">1.000 RUB</div>
              </div>
            </div>
          </div>
          <!-- /.res -->
          <div class="res">
            <div class="res-pic__wrap">
              <img
                src="~/assets/assets/order-response-pic-example.png"
                alt="example"
                class="res-pic"
              />
            </div>
            <div class="res__inner">
              <div class="res-h">
                <a href="#" class="res-username">Ferald Closer</a>
                <div class="res-date">2 месяца назад</div>
              </div>
              <div class="res-text">
                Отличный продавец, хорошие цены, спасибо!
              </div>
              <div class="res-f">
                <div class="res-game">Lineage 2 (Free)</div>
                <div class="res-amount">1.000 RUB</div>
              </div>
            </div>
          </div>
          <!-- /.res -->
        </div>
        <form action="#" class="pr-res-send">
          <div class="pr-res-send__title">Оставить отзыв за проект</div>
          <textarea
            class="pr-res-send-textarea"
            placeholder="Напишите сообщение"
          ></textarea>
          <div class="pr-res-send-f">
            <div class="pr-res-send-warning">
              › Длина отзыва должна быть не более 1.500 символов
            </div>
            <button class="btn pr-res-send-btn">Отправить ›</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    if (localStorage._token == null) {
      return (location.href = "/");
    }
  },
  data() {
    return {
      avatar: '',
      name: null,
      email: null,
      description: null,
    };
  },

  mounted() {
    this.name = localStorage.username;
    this.email = localStorage.email;
    this.description = localStorage.description;
    
    this.avatar = process.env.BASE_URL + 'storage' + localStorage.avatar

  },
};
</script>