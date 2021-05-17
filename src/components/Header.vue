<template>
  <div class="container-fluid no-gutters">
    <div class="row">
      <div class="col-lg-12 p-0">
        <div
          class="header_iner d-flex justify-content-between align-items-center"
        >
          <div class="sidebar_icon d-lg-none">
            <i class="ti-menu"></i>
          </div>
          <div class="serach_field-area">
            <div class="search_inner">
              <form action="/#">
                <div class="search_field">
                  <input type="text" placeholder="Search here..." />
                </div>
                <button type="submit">
                  <img src="@/assets/img/icon_search.svg" alt="" />
                </button>
              </form>
            </div>
          </div>
          <div
            class="header_right d-flex justify-content-between align-items-center"
          >
            <div class="header_notification_warp d-flex align-items-center">
              <li>
                <a href="#">
                  <img src="@/assets/img/msg.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/img/bell.svg" alt="" />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
}) // defineComponent
</script>
