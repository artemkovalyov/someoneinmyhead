<script lang="ts">
  const icons: { [key: string]: any } = {
    info: 'info',
    note: 'error_outline',
    tip: 'lightbulb',
    warning: 'report_problem',
    danger: 'new_releases'
  };

  export let type = 'info';
  export let title: string | undefined;
  export let id: string | undefined;
  const icon: keyof typeof icons = icons[type];
</script>

<div class="admonition {type}" title={title || null} id={id || null}>
  <div class="admonition-title not-prose">
    <span class="admonition-icon material-icons-outlined">{icon}</span>
    <span class="admonition-text">{title}</span>
  </div>
  <slot />
</div>

<style>
  /* Admonitions */

  .danger {
    @apply bg-error-container border-error;
  }

  .warning {
    @apply bg-primary-container border-primary-palette-60;
  }

  .note {
    @apply bg-secondary-container border-secondary-palette-60;
  }

  .tip {
    @apply bg-tertiary-container border-tertiary-palette-60;
  }

  .info {
    @apply bg-surface-variant text-on-surface-variant border-surface-tint-color;
  }

  .admonition {
    @apply prose-headings:!my-0 prose-p:!my-0 rounded-lg px-7 py-5 border-l-8 my-5 text-on-primary-container-high-contrast;
  }

  .admonition-title {
    @apply uppercase font-bold mb-5 text-lg xl:text-xl 2xl:text-2xl;
  }

  .admonition-icon {
    @apply text-4xl align-middle mr-1;
  }

  .admonition-text {
    @apply align-middle;
  }

  /* Admonitions */
</style>
