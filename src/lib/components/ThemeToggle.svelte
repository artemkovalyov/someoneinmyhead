<script lang="ts">
  import { onMount } from 'svelte';
  let dark: boolean;
  let hidden: boolean = true;

  onMount(() => {
    // use the existence of the dark class on the html element for the initial value
    dark = document.documentElement.classList.contains('dark');

    // show UI controls after we know the mode
    hidden = false;
  });

  let toggleTheme = () => {
    if (dark) {
      window.document.documentElement.classList.remove('dark');
    } else {
      window.document.documentElement.classList.add('dark');
    }
    window.localStorage.theme = dark ? 'light' : 'dark';
    dark = !dark;
  };
</script>

<svelte:head>
  <script>
    if (
      window.localStorage.theme === 'dark' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
        !('theme' in window.localStorage))
    ) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
  </script>
</svelte:head>

<button
  id="theme-toggle"
  type="button"
  class="text-base text-primary"
  class:hidden
  on:click={toggleTheme}
>
  {#if dark}
    <svg
      id="theme-toggle-dark-icon"
      class="w-7 h-7"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  {:else}
    <svg
      id="theme-toggle-light-icon"
      class="w-7 h-7"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  {/if}
</button>
