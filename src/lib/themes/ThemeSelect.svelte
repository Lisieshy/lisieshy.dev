<script lang="ts">
    import { t } from '$lib/translations';

    import { onMount } from "svelte";
    import { themes } from ".";

    let current_theme = 'rosePine';

    onMount(() => {
        if (typeof window !== 'undefined') {
            const theme = window.localStorage.getItem('theme');
            if (theme && themes.includes(theme)) {
                document.documentElement.setAttribute('data-theme', theme);
                current_theme = theme;
            }
        }
    });

    function set_theme(event: Event) {
        const select = event.target as HTMLSelectElement;
        const theme = select.value;

        if (themes.includes(theme)) {
            const year = 60 * 60 * 24 * 365;
            window.localStorage.setItem('theme', theme);
            document.cookie = `theme=${theme}; max-age=${year}; path=/; SameSite=Lax`;
            document.documentElement.setAttribute('data-theme', theme);
            current_theme = theme;
        }
    };
</script>
<!-- 
<select
    bind:value={current_theme}
    data-choose-theme
    on:change={set_theme}
>
    {#each themes as theme}
        <option value={theme}>
            {$t(`menu.theme.${theme}`)}
        </option>
    {/each}
</select> -->

{#each themes as theme}
<div class="form-control">
    <label class="label cursor-pointer">
        {$t(`menu.theme.${theme}`)}
        <input
            type="radio"
            value={theme}
            class="radio"
            bind:group={current_theme}
            on:change={set_theme}
        />
    </label>
</div>
{/each}
