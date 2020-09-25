<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let city

  function handleClick() {
    dispatch('click', { city })
  }
</script>
<aside on:click={handleClick}>
  <h3>{city}</h3>
</aside>