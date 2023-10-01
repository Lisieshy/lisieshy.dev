<script lang="ts">
    import "../app.css";
    import ThemeSelect from "$lib/themes/ThemeSelect.svelte";
    import { t, locales, locale } from '$lib/translations';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    $: ({ route } = $page.data);

    function handleLocaleSelection(e: any) {
        const redirectTo = e.target.value;
        goto(redirectTo);
    }
</script>

<nav>
    <a href="/{$locale}">{$t('menu.home')}</a>
</nav>

<slot />

<ThemeSelect />
<select 
    on:change={handleLocaleSelection}
    class="select select-bordered w-full max-w-fit"
>
{#each $locales as l}
    <option value="/{l}{route}" selected="{l === $locale}">{$t(`lang.${l}`)}</option>
{/each}
</select>