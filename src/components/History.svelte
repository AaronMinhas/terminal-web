<script lang="ts">
  import { history } from '../stores/history';
  import { theme } from '../stores/theme';
  import Ps1 from './Ps1.svelte';
</script>

{#each $history as { command, outputs, htmlOutputs }}
  <div style={`color: ${$theme.foreground}`}>
    <div class="flex flex-col md:flex-row">
      <Ps1 />

      <div class="flex">
        <p class="visible md:hidden">❯</p>

        <p class="px-2">{command}</p>
      </div>
    </div>

    {#if htmlOutputs && htmlOutputs.length > 0}
      {#each outputs as output}
        <p class="whitespace-pre" style="min-height: 1.2em;">
          {output || '\u00A0'}
        </p>
      {/each}
      {#each htmlOutputs as htmlOutput}
        <div class="fastfetch-output">
          {@html htmlOutput}
        </div>
      {/each}
    {:else}
      {#each outputs as output}
        <p class="whitespace-pre" style="min-height: 1.2em;">
          {output || '\u00A0'}
        </p>
      {/each}
    {/if}
  </div>
{/each}
