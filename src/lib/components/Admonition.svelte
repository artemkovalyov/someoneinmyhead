<script lang="ts">
  const icons = {
    info: 'info',
    note: 'error_outline',
    tip: 'lightbulb',
    warning: 'report_problem',
    danger: 'new_releases'
  };

  export let type = 'info';
  export let title;
  export let id;
  let icon = icons[type];
</script>

<div class="admonition {type}" title={title || null} id={id || null}>
  <div class="admonition-title not-prose">
    <span class="admonition-icon material-icons-outlined">{icon}</span>
    <span class="admonition-text">{title}</span>
  </div>
  <slot />
</div>
