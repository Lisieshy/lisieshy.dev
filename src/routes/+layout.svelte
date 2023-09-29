<script lang="ts">
    import "../app.css";
    import { t, locales, locale } from '$lib/translations';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    $: ({ route } = $page.data);

    function handleLocaleSelection(e: any) {
        const redirectTo = e.target.value;
        goto(redirectTo);
    }
</script>

<a href="/{$locale}">{$t('menu.home')}</a>

<slot />

<select on:change={handleLocaleSelection}>
    {#each $locales as l}
        <option value="/{l}{route}" selected="{l === $locale}">{$t(`lang.${l}`)}</option>
    {/each}
</select>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.rosePine.base);
    }
</style>