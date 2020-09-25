<script>
  import { blur } from 'svelte/transition'
  import Modal from '../components/Modal.svelte'
  import Add from './Add.svelte'
  import CityCard from '../components/CityCard.svelte'
  import { dispatch } from '../store.js'

  import page from 'page'
  let open = false 
  let cities = ['Charleston, SC', 'New york, NY', 'San Francisco, CA']
  //let cities = []
  function changeCurrentCity(city) {
    return async () => {
      await dispatch({type: 'SET_CURRENT', payload: city})
      page('/')
    }
  }
  function openModal() {
    open = true
  }
  function addCity({ detail }) {
    cities = [...cities, detail.city]
    open = false
  }
</script>
<Modal {open}>
  <Add on:add={addCity} />
</Modal>
<div in:blur={{delay: 1000, duration: 1000}}>
<nav>
  <div>Favorites</div>
  <a on:click={openModal}>Add</a>
</nav>
<main >
  <section>
    {#each cities as city}
    <CityCard {city} on:click={changeCurrentCity(city)} />
    {:else}
      No Favorites...
    {/each}
  </section>
</main>
</div>
<style>
 nav {
   height: 24px;
   margin-bottom: 0;
   margin-left: 8px;
   margin-right: 8px;
 }
</style>
