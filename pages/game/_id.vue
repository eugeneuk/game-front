<template>
<div>
  
  

    <div class="gd" v-if="loaded">
          <h1 class="title gd__title">{{current_game.name}}</h1>
          
          <div class="gd-switch-wrapper switch-wrapper">
            <div class="gd-switch switch">
              <input type="hidden" class="switch-value" value="services">
               <div @click="addFilterString('&type=' + item.id)" class="gd-switch-item switch-item" :data-value="item.id" :data-box-id="item.id" v-for="item in types" :key="item.id">
                  {{item.name}}
                </div>
            
            </div>
            <div class="gd-bar">
              <div class="gd-search">
                <input type="text" class="gd-search__input" placeholder="Поиск">
                <svg class="gd-search__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve">
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                    s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                    c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                    s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                </svg>
              </div>

              <div class="gd-select dd select">
                <input type="hidden" class="dd-input" value="server1">
                <div class="gd-select-item selected">
                  <div class="gd-select-label">Сервер</div>
                </div>
                <div class="gd-select-arrow">▼</div>
                <ul class="gd-select-list dd-list">
                  <li>
                    <div class="gd-select-item dd-item" data-value="server1">Сервер 1</div>
                  </li>
                  <li>
                    <div class="gd-select-item dd-item" data-value="server2">Сервер 2</div>
                  </li>
                  <li>
                    <div class="gd-select-item dd-item" data-value="server3">Сервер 3</div>
                  </li>
                </ul>
              </div>

              <div class="gd-select dd select">
                <input type="hidden" class="dd-input" value="side1">
                <div class="gd-select-item selected">
                  <div class="gd-select-label">Сторона</div>
                </div>
                <div class="gd-select-arrow">▼</div>
                <ul class="gd-select-list dd-list">
                  <li>
                    <div class="gd-select-item dd-item" data-value="side1">Сторона 1</div>
                  </li>
                  <li>
                    <div class="gd-select-item dd-item" data-value="side2">Сторона 2</div>
                  </li>
                  <li>
                    <div class="gd-select-item dd-item" data-value="side3">Сторона 3</div>
                  </li>
                </ul>
              </div>

              <label class="gd-checkbox__wrap">
                <div class="gd-checkbox__label">Только продавцы онлайн</div>
                <div class="gd-checkbox">
                  <input type="checkbox">
                  <div class="gd-checkbox-toggle"></div>
                </div>
              </label>

              <button class="btn gd-btn-sell">
                <img src="/assets/assets/icon-sell.png" alt="sell" class="gd-btn-sell__icon">
                <div class="gd-btn-sell__text">Продать игровую валюту</div>
              </button>

            </div><!-- /.gd-bar -->
            <div class="switch-box" data-box-id="1">
              <div class="gd-table__wrapper">
                <div class="gd-table__frame">
                  <table class="gd-table">
                    <thead>
                      <tr>
                        <th>Предмет</th>
                        <th>Продавец</th>
                        <th>Сторона</th>
                        <th>Сервер</th>
                        <th>Наличие</th>
                        <th>Цена / 1кк</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="item" >
                          <div class="item__inner">
                            <img src="/assets/assets/game-item-example.png" alt="game-item" class="item-pic">
                            <div class="item-name">sdfsdf</div>
                          </div>
                        </td>
                        <td>
                          <a href="#" class="prof">
                            <div class="prof-avatar">
                              <img src="/assets/assets/user-avatar-example1.png" alt="avatar" class="prof-avatar-pic">
                              <div class="prof-status _green"></div>
                            </div>
                            <div class="prof-info">
                              <div class="prof-username">Nicolay87</div>
                              <div class="prof-subinfo _yellow">5 отзывов</div>
                              <div class="prof-subinfo _light-gray">2 года на сайте</div>
                            </div>
                          </a><!-- /.prof -->
                        </td>
                        <td>Асгард</td>
                        <td>Асмодиане</td>
                        <td>2.000 кк</td>
                        <td class="blue">1.73RUB</td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
                <div class="gd-table-mobile__wrap">
                  <div class="gd-table-mobile">
                    <div class="gd-table-mobile-row">
                      <div class="label">Продавец</div>
                      <div class="value prof">
                        <div class="prof-status _green"></div>
                        <div class="prof-username">Nicolay87 </div>
                        <div class="prof-fb">(2 отзыва) </div>
                        <div class="prof-regtime">8 лет на сайте</div>
                      </div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Сторона</div>
                      <div class="value">Асмодиане</div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Сервер</div>
                      <div class="value">
                        <div class="status-text">Асгарл</div>
                      </div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Наличие</div>
                      <div class="value">2.000 кк</div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Цена / 1кк</div>
                      <div class="value blue">1.73 RUB</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile">
                    <div class="gd-table-mobile-row">
                      <div class="label">Продавец</div>
                      <div class="value prof">
                        <div class="prof-status _red"></div>
                        <div class="prof-username">Nicolay87 </div>
                        <div class="prof-fb">(2 отзыва) </div>
                        <div class="prof-regtime">8 лет на сайте</div>
                      </div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Сторона</div>
                      <div class="value">Асмодиане</div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Сервер</div>
                      <div class="value">
                        <div class="status-text">Асгарл</div>
                      </div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Наличие</div>
                      <div class="value">2.000 кк</div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Цена / 1кк</div>
                      <div class="value blue">1.73 RUB</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile">
                    <div class="gd-table-mobile-row">
                      <div class="label">Продавец</div>
                      <div class="value prof">
                        <div class="prof-status _green"></div>
                        <div class="prof-username">Nicolay87 </div>
                        <div class="prof-fb">(2 отзыва) </div>
                        <div class="prof-regtime">8 лет на сайте</div>
                      </div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Сторона</div>
                      <div class="value">Асмодиане</div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Сервер</div>
                      <div class="value">
                        <div class="status-text">Асгарл</div>
                      </div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Наличие</div>
                      <div class="value">2.000 кк</div>
                    </div>
                    <div class="gd-table-mobile-row">
                      <div class="label">Цена / 1кк</div>
                      <div class="value blue">1.73 RUB</div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="switch-box" data-box-id="2">
              <div class="gd-table__frame">
                <table class="gd-table">
                  <thead>
                    <tr>
                      <th>Предмет</th>
                      <th>Продавец</th>
                      <th>Сторона</th>
                      <th>Сервер</th>
                      <th>Наличие</th>
                      <th>Цена / 1кк</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="item" v-for="item in products" :key="item.id">
                        <div class="item__inner">
                          <img src="/assets/assets/game-item-example.png" alt="game-item" class="item-pic">
                          
                          <div class="item-name">
                            <nuxt-link :to="{ name: 'product-id', params: { id: item.id }}">{{item.name}}</nuxt-link>
                            
                           </div>
                        </div>
                      </td>
                      <td>
                        <a href="#" class="prof">
                          <div class="prof-avatar">
                            <img src="/assets/assets/user-avatar-example1.png" alt="avatar" class="prof-avatar-pic">
                            <div class="prof-status _green"></div>
                          </div>
                          <div class="prof-info">
                            <div class="prof-username">Nicolay87</div>
                            <div class="prof-subinfo _yellow">5 отзывов</div>
                            <div class="prof-subinfo _light-gray">2 года на сайте</div>
                          </div>
                        </a><!-- /.prof -->
                      </td>
                      <td>Асгард</td>
                      <td>Асмодиане</td>
                      <td>2.000 кк</td>
                      <td class="blue">1.73RUB</td>
                    </tr>
                
                  </tbody>
                </table>
              </div>
              <div class="gd-table-mobile__wrap">
                <div class="gd-table-mobile">
                  <div class="gd-table-mobile-row">
                    <div class="label">Продавец</div>
                    <div class="value prof">
                      <div class="prof-status _green"></div>
                      <div class="prof-username">Nicolay87 </div>
                      <div class="prof-fb">(2 отзыва) </div>
                      <div class="prof-regtime">8 лет на сайте</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сторона</div>
                    <div class="value">Асмодиане</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сервер</div>
                    <div class="value">
                      <div class="status-text">Асгарл</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Наличие</div>
                    <div class="value">2.000 кк</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Цена / 1кк</div>
                    <div class="value blue">1.73 RUB</div>
                  </div>
                </div>
                <div class="gd-table-mobile">
                  <div class="gd-table-mobile-row">
                    <div class="label">Продавец</div>
                    <div class="value prof">
                      <div class="prof-status _red"></div>
                      <div class="prof-username">Nicolay87 </div>
                      <div class="prof-fb">(2 отзыва) </div>
                      <div class="prof-regtime">8 лет на сайте</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сторона</div>
                    <div class="value">Асмодиане</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сервер</div>
                    <div class="value">
                      <div class="status-text">Асгарл</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Наличие</div>
                    <div class="value">2.000 кк</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Цена / 1кк</div>
                    <div class="value blue">1.73 RUB</div>
                  </div>
                </div>
                <div class="gd-table-mobile">
                  <div class="gd-table-mobile-row">
                    <div class="label">Продавец</div>
                    <div class="value prof">
                      <div class="prof-status _green"></div>
                      <div class="prof-username">Nicolay87 </div>
                      <div class="prof-fb">(2 отзыва) </div>
                      <div class="prof-regtime">8 лет на сайте</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сторона</div>
                    <div class="value">Асмодиане</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сервер</div>
                    <div class="value">
                      <div class="status-text">Асгарл</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Наличие</div>
                    <div class="value">2.000 кк</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Цена / 1кк</div>
                    <div class="value blue">1.73 RUB</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="switch-box" data-box-id="3">
              <div class="gd-table__frame">
                <table class="gd-table">
                  <thead>
                    <tr>
                      <th>Предмет</th>
                      <th>Продавец</th>
                      <th>Сторона</th>
                      <th>Сервер</th>
                      <th>Наличие</th>
                      <th>Цена / 1кк</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="item">
                        <div class="item__inner">
                          <img src="/assets/assets/game-item-example.png" alt="game-item" class="item-pic">
                          <div class="item-name">Warden Block</div>
                        </div>
                      </td>
                      <td>
                        <a href="#" class="prof">
                          <div class="prof-avatar">
                            <img src="/assets/assets/user-avatar-example1.png" alt="avatar" class="prof-avatar-pic">
                            <div class="prof-status _green"></div>
                          </div>
                          <div class="prof-info">
                            <div class="prof-username">Nicolay87</div>
                            <div class="prof-subinfo _yellow">5 отзывов</div>
                            <div class="prof-subinfo _light-gray">2 года на сайте</div>
                          </div>
                        </a><!-- /.prof -->
                      </td>
                      <td>Асгард</td>
                      <td>Асмодиане</td>
                      <td>2.000 кк</td>
                      <td class="blue">1.73RUB</td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
              <div class="gd-table-mobile__wrap">
                <div class="gd-table-mobile">
                  <div class="gd-table-mobile-row">
                    <div class="label">Продавец</div>
                    <div class="value prof">
                      <div class="prof-status _green"></div>
                      <div class="prof-username">Nicolay87 </div>
                      <div class="prof-fb">(2 отзыва) </div>
                      <div class="prof-regtime">8 лет на сайте</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сторона</div>
                    <div class="value">Асмодиане</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сервер</div>
                    <div class="value">
                      <div class="status-text">Асгарл</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Наличие</div>
                    <div class="value">2.000 кк</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Цена / 1кк</div>
                    <div class="value blue">1.73 RUB</div>
                  </div>
                </div>
                <div class="gd-table-mobile">
                  <div class="gd-table-mobile-row">
                    <div class="label">Продавец</div>
                    <div class="value prof">
                      <div class="prof-status _red"></div>
                      <div class="prof-username">Nicolay87 </div>
                      <div class="prof-fb">(2 отзыва) </div>
                      <div class="prof-regtime">8 лет на сайте</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сторона</div>
                    <div class="value">Асмодиане</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сервер</div>
                    <div class="value">
                      <div class="status-text">Асгарл</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Наличие</div>
                    <div class="value">2.000 кк</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Цена / 1кк</div>
                    <div class="value blue">1.73 RUB</div>
                  </div>
                </div>
                <div class="gd-table-mobile">
                  <div class="gd-table-mobile-row">
                    <div class="label">Продавец</div>
                    <div class="value prof">
                      <div class="prof-status _green"></div>
                      <div class="prof-username">Nicolay87 </div>
                      <div class="prof-fb">(2 отзыва) </div>
                      <div class="prof-regtime">8 лет на сайте</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сторона</div>
                    <div class="value">Асмодиане</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сервер</div>
                    <div class="value">
                      <div class="status-text">Асгарл</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Наличие</div>
                    <div class="value">2.000 кк</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Цена / 1кк</div>
                    <div class="value blue">1.73 RUB</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="switch-box active" data-box-id="4">
              <div class="gd-table__frame">
                <table class="gd-table">
                  <thead>
                    <tr>
                      <th>Предмет</th>
                      <th>Продавец</th>

                      <th v-for="field in current_game.fields" :key="field.id">
                        {{field.label}}
                      </th>
                     
                      <th>Цена </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in products" :key="item.id">
                      <td class="item">
                        <div class="item__inner">
                          <img src="/assets/assets/game-item-example.png" alt="game-item" class="item-pic">
                          <div class="item-name">
                              <a :href="'/product/' + item.id ">{{limitStr(item.name, 80)}}</a> 
                
                            </div>
                        </div>
                      </td>
                      <td>
                        <a href="#" class="prof">
                          <div class="prof-avatar">
                            <img src="/assets/assets/user-avatar-example1.png" alt="avatar" class="prof-avatar-pic">
                            <div class="prof-status _green"></div>
                          </div>
                          <div class="prof-info">
                            <div class="prof-username">{{item.user.name}}</div>
                            <div class="prof-subinfo _yellow">5 отзывов</div>
                            <div class="prof-subinfo _light-gray">2 года на сайте</div>
                          </div>
                        </a><!-- /.prof -->
                      </td>

                      <td v-if="item.results.length > 0" v-for="product in item.results" :key="product.id">
                          {{product.content}}
                      </td>
                      <td v-if="item.results.length < 1" v-for="empty_str in current_game.fields" :key="empty_str.id"> - </td>
                   
                      
                      <td class="blue">{{item.price}}RUB</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <div class="gd-table-mobile__wrap">
                <div class="gd-table-mobile">
                  <div class="gd-table-mobile-row">
                    <div class="label">Продавец</div>
                    <div class="value prof">
                      <div class="prof-status _green"></div>
                      <div class="prof-username">Nicolay87 </div>
                      <div class="prof-fb">(2 отзыва) </div>
                      <div class="prof-regtime">8 лет на сайте</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сторона</div>
                    <div class="value">Асмодиане</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сервер</div>
                    <div class="value">
                      <div class="status-text">Асгарл</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Наличие</div>
                    <div class="value">2.000 кк</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Цена / 1кк</div>
                    <div class="value blue">1.73 RUB</div>
                  </div>
                </div>
                <div class="gd-table-mobile">
                  <div class="gd-table-mobile-row">
                    <div class="label">Продавец</div>
                    <div class="value prof">
                      <div class="prof-status _red"></div>
                      <div class="prof-username">Nicolay87 </div>
                      <div class="prof-fb">(2 отзыва) </div>
                      <div class="prof-regtime">8 лет на сайте</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сторона</div>
                    <div class="value">Асмодиане</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сервер</div>
                    <div class="value">
                      <div class="status-text">Асгарл</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Наличие</div>
                    <div class="value">2.000 кк</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Цена / 1кк</div>
                    <div class="value blue">1.73 RUB</div>
                  </div>
                </div>
                <div class="gd-table-mobile">
                  <div class="gd-table-mobile-row">
                    <div class="label">Продавец</div>
                    <div class="value prof">
                      <div class="prof-status _green"></div>
                      <div class="prof-username">Nicolay87 </div>
                      <div class="prof-fb">(2 отзыва) </div>
                      <div class="prof-regtime">8 лет на сайте</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сторона</div>
                    <div class="value">Асмодиане</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Сервер</div>
                    <div class="value">
                      <div class="status-text">Асгарл</div>
                    </div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Наличие</div>
                    <div class="value">2.000 кк</div>
                  </div>
                  <div class="gd-table-mobile-row">
                    <div class="label">Цена / 1кк</div>
                    <div class="value blue">1.73 RUB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    <div v-else id="loader" style="position:absolute; top:30%; left:50%">
      <img src="/loader.gif" alt="" />
    </div>

</div>
</template>


<script>
import  axios  from 'axios'

export default {
    data() {
        return {
            loaded: false,
            current_game:{},
            types:{},
            products:{},
            fields:{},
            filters: ''
        }
    },

    mounted() {
      console.log(this.$route.query)
        
       this.getTypes();
       this.getCurrentGame();
       this.getProducts();
    },

    methods:{
        getTypes(){
            
            axios
                .get(process.env.API_URL + 'get-types')
                .then(res => {
                        console.log(res.data.data);
                        this.types = res.data.data;
                })

        },

        getProducts(){
            
            axios
                .get(this.getBaseProductString())
                .then(res => {
                        console.log(res.data.data);
                        this.products = res.data.data;
                        
                })

        },


        getCurrentGame(){
            
            axios
                .get(process.env.API_URL + `get-current-game/${this.$route.params.id}`)
                .then(res => {
                        console.log(res.data.data);
                       
                        this.current_game = res.data.data
                         this.loaded = true;
                })
               

        },

        addFilterString(string){
            this.filters = this.filters + string;
            this.getProducts();
        },
        editProduct(id){
            console.log(id)  
        },


        limitStr(str, n, symb = '') {
           if (!n && !symb) return str;
            symb = symb || '';
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

        getBaseProductString(){
            let path = process.env.API_URL + `products?game_id=${this.$route.params.id}`;
            path = path + this.filters;
            
            return path;
        }

        
     },

    

}
</script>
