<script>
  import router from 'page'
  import Current from './views/Current.svelte'
  import Favorites from './views/Favorites.svelte'
  import Add from './views/Add.svelte'

  let page 
  let params

  router('/', navTo(Current))
  router('/favorites', navTo(Favorites))

  router.start()

  function navTo(Component) {
    return (ctx) => {
      page = Component
      params = ctx.params
    }
  }

</script>
<svelte:component this={page}  />