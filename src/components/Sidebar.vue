<template>
  <nav class="sidebar">
    <div class="logo d-flex justify-content-between">
      <a href="https://demo.dashboardpack.com/finance-html/index.html"
        ><img src="@/assets/img/logo.png" alt=""
      /></a>
      <div class="sidebar_close_icon d-lg-none">
        <i class="ti-close"></i>
      </div>
    </div>
    <ul id="sidebar_menu" class="metismenu">
      <li class="mm-active">
        <a class="has-arrow" href="#" aria-expanded="true">
          <!-- <i class="fas fa-th"></i> -->
          <img src="@/assets/img/1.svg" alt="" />
          <span>Dashboard</span>
        </a>
        <ul class="mm-collapse mm-show">
          <li>
            <a class="active" href="#">THD</a>
          </li>
          <li>
            <a href="#">Social Media</a>
          </li>
        </ul>
      </li>

      <li class="">
        <a class="has-arrow" href="#" aria-expanded="false">
          <img src="@/assets/img/3.svg" alt="" />
          <span>Widgets</span>
        </a>
        <ul class="mm-collapse">
          <li>
            <a href="#">Mail Box</a>
          </li>
          <li>
            <a href="#">Chat</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </li>

      <li class="">
        <a class="has-arrow" href="#" aria-expanded="false">
          <img src="@/assets/img/4.svg" alt="" />
          <span>Components</span>
        </a>
        <ul class="mm-collapse">
          <li>
            <a href="#">Elements</a>
            <ul class="mm-collapse">
              <li>
                <a href="#">Buttons</a>
              </li>
              <li>
                <a href="#">Dropdowns</a>
              </li>
              <li>
                <a href="#">Badges</a>
              </li>
              <li>
                <a href="#">Loading Indicators</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Components</a>
            <ul class="mm-collapse">
              <li>
                <a href="#">Notifications</a>
              </li>
              <li>
                <a href="#">Progress Bar</a>
              </li>
              <li>
                <a href="#">Carousel</a>
              </li>
              <li>
                <a href="#">cards</a>
              </li>
              <li>
                <a href="#">Pagination</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li class="">
        <a class="has-arrow" href="#" aria-expanded="false">
          <img src="@/assets/img/6.svg" alt="" />
          <span>Docs</span>
        </a>
        <ul class="mm-collapse">
          <li>
            <a href="#">Elements</a>
            <ul class="mm-collapse">
              <li>
                <a href="#">Data Tables</a>
              </li>
              <li>
                <a href="#">Grid Tables</a>
              </li>
              <li>
                <a href="#">Date Picker</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Widgets</a>
            <ul class="mm-collapse">
              <li>
                <a href="#">Input Selects</a>
              </li>
              <li>
                <a href="#">Input Mask</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Sidebar',
}) // defineComponent
</script>
