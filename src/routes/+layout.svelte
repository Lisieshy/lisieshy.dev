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
<!-- <div class="h-screen bg-base"> -->

<nav>
    <select on:change={handleLocaleSelection}>
        {#each $locales as l}
        <option value="/{l}{route}" selected="{l === $locale}">{$t(`lang.${l}`)}</option>
        {/each}
    </select>
    <a href="/{$locale}">{$t('menu.home')}</a>
</nav>

<slot />

<ThemeSelect />

<!-- </div> -->