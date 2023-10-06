<script lang="ts">
    import "../app.css";
    import ThemeSelect from "$lib/themes/ThemeSelect.svelte";
    import { t, locales, locale } from '$lib/translations';
    import NavLink from "$lib/NavLink.svelte";
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    import { fade } from "svelte/transition";

    $: ({ route } = $page.data.i18n);

    function handleLocaleSelection(e: any) {
        const redirectTo = e.target.value;
        goto(redirectTo);
    }

</script>

<svelte:head>
    <title>Marine Schulz</title>
</svelte:head>

<div class="flex flex-col h-screen">
    <div class="relative box-content border border-primary h-screen m-4 md:m-8 overflow-hidden">
        <div class="relative h-screen w-screen -top-[70rem] -left-[40rem]">
            <div class="absolute rounded-[43%] -one w-[100rem] h-[90rem] md:w-[130rem] md:h-[120rem]"></div>
            <div class="absolute rounded-[43%] -two w-[100rem] h-[90rem] md:w-[130rem] md:h-[120rem]"></div>
        </div>

        <div class="absolute left-0 top-0 p-4 z-10">
            <h2 class="text-5xl font-thin md:text-7xl">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {$t('home.name')}
                </span>
            </h2>
            <p class="text-3xl font-light md:text-5xl"> 
                {$t('home.job.title')}
            </p>
            <nav>
                <NavLink locale="{$locale}" href="" title="{$t('menu.home')}" />
                <NavLink locale="{$locale}" href="/about" title="{$t('menu.aboutme')}" />
            </nav>
        </div>

        <div class="absolute bottom-0 right-0 p-4 text-right max-w-md border border-red-500">
            <slot />
        </div>

        <div class="absolute bottom-0 left-0 p-4 ">
            <ThemeSelect />
            <select
                on:change={handleLocaleSelection}
                class="select select-bordered select-sm w-full max-w-fit"
            >
                {#each $locales as l}
                    <option value="/{l}{route}" selected="{l === $locale}">{$t(`lang.${l}`)}</option>
                {/each}
            </select>
        </div>
    </div>
</div>

<style>

@keyframes rotate {
    from {transform: rotate(0deg);}
    from {transform: rotate(360deg);}
}

.-one {
    animation: rotate 20000ms infinite linear;
    opacity: 5%;
    background: hsl(var(--p));
}

.-two {
    animation: rotate 13000ms infinite linear;
    opacity: 10%;
    background: hsl(var(--p));
}

</style>