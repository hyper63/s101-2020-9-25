<script>
  import Weather from '../components/Weather.svelte'

  const weather = {
    city: 'Charleston, SC',
    temp: '80 &deg; F',
    icon: 'a01n',
    description: 'raining'
  }
</script>
<nav>
  <div>
    <a href="">F</a>
    |
    <a href="">C</a>
  </div>
  <a href="">Favorites</a>
</nav>
<main>
  <Weather {...weather} />
</main>
<style>
  h3 {
    color: rebeccapurple;
  }
  nav {
    margin-bottom: 0;
    margin-left: 8px;
    margin-right: 8px;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


</style>


