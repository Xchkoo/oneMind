<template>
  <v-app>
    <v-app-bar
      rounded-pill
      app
      color="primary"
      dark
      clipped-left
    >
      <v-avatar
      size="60"
      >
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>

    <v-spacer></v-spacer>

    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>
    </v-app-bar>

    <v-navigation-drawer
    app
    permanent
    clipped
    >
          
      <v-sheet
      class="mx-auto"
      max-width="300"
      tile
      rounded-xl
      >
        <v-list rounded>
          <v-subheader>Menu</v-subheader>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-sheet>         
      <router-link to="/">[跳转到主页]</router-link>
    </v-navigation-drawer>



    <v-main>
      <v-sheet
      class="mx-auto"
      max-width="300"
      tile
      rounded-xl
      >
        <router-view/>
      </v-sheet>
    </v-main>


    <v-footer app class="white">
      <v-container class="text-center">
        &copy; copyright 2021 Xchkoo All rights reserved.
      </v-container>
    </v-footer>


  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    selectedItem: 1,
      items: [
        { text: '主页 - OneMind', icon: 'mdi-home-variant-outline', url: '/Home'},
        { text: '写下 - Idea', icon: 'mdi-lightbulb-on', url: '/Idea'},
        { text: '分享 - Share', icon: 'mdi-share-variant', url: '/Share'},
      ],
  }),
};
</script>
