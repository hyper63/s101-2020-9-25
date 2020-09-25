<script>
  import CityCard from '../components/CityCard.svelte'
  import page from 'page'

  let cities = ['Charleston, SC', 'New york, NY', 'San Francisco, CA']
  //let cities = []
  function changeCurrentCity(city) {
    return () => {
      console.log('city', city)
      page('/')
    }
  }

</script>
<nav>
  <div>Favorites</div>
  <a href="">Add</a>
</nav>
<main>
  <section>
    {#each cities as city}
    <CityCard {city} on:click={changeCurrentCity(city)} />
    {:else}
      No Favorites...
    {/each}
  </section>
</main>
<style>
 nav {
   height: 24px;
   margin-bottom: 0;
   margin-left: 8px;
   margin-right: 8px;
 }
</style>
