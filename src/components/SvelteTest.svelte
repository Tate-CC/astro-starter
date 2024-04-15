<script>
  import { onDestroy, onMount } from 'svelte';
  import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/svelte-connector';

  // pageDetails is passed from parent, or via SvelteKit load function
  export let message;

  onMount(async () => {
    onCloudCannonChanges((newProps) => pageDetails = newProps);
  });

  onDestroy(async () => {
    stopCloudCannonChanges();
  });
</script>

<div>
  <h1 class="bg-red-500">{message}</h1>
</div>