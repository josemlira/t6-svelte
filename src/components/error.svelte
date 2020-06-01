<script>
  export let error = "Error"
  export let level = "danger"
  let show = true

  function hide() {
    show = false
  }
</script>

{#if show}
  <article class="message is-{level}">
    <div class="message-header">
      <p>{error}</p>
      <button class="delete" aria-label="delete" on:click={hide}></button>
    </div>
    <div class="message-body">
      <slot>Hubo un error inesperado</slot>
    </div>
  </article>
{/if}
