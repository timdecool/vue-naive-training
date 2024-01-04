import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/CharactersView.vue'
import DungeonsView from '../views/DungeonsView.vue'
import CharacterDetails from '../views/CharacterDetails.vue'
import CharacterCreation from '../views/CharacterCreation.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView
    },
    {
      path:'/characters/:id',
      name: 'characterDetails',
      component: CharacterDetails
    },
    {
      path: '/characters/new',
      name: 'characterCreation',
      component: CharacterCreation
    },
    {
      path: '/dungeons',
      name: 'dungeons',
      component: DungeonsView
    }
  ]
})

export default router
