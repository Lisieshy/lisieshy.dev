<script lang="ts">
    import { page } from '$app/stores';
    import { defaultLocale } from '$lib/translations';
	import { onMount } from 'svelte';
    export let href: string;
    export let title: string;
    export let locale: string;

    $: isActive = () => {
        const path = $page.url.pathname;
        const localePrefix = locale === defaultLocale ? '/' : `/${locale}`;

        if (path === href || path === `${localePrefix}${href}`) {
            return true;
        }
        return false;
    }

    let ready = false;
    onMount(() => {
        ready = true;
    });
</script>

<a href="/{locale}{href}" class="link" class:active="{isActive()}">
    {title}
</a>

<style>
    a.active {
        background-color: orange;
    }
</style>