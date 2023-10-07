<script lang="ts">
    import "../app.css";
    import ThemeSelect from "$lib/themes/ThemeSelect.svelte";
    import { t, locales, locale } from '$lib/translations';
    import NavLink from "$lib/NavLink.svelte";
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { fade, fly } from "svelte/transition";
	import { readable } from "svelte/store";
    export let data;

    $: ({ route } = $page.data.i18n);

    function handleLocaleSelection(e: any) {
        const redirectTo = e.target.value;
        goto(redirectTo);
    }

    let showMenu = false;

    let isMobile = readable(false, set => {
        set(window.innerWidth < 768);
        const handleResize = () => {
            set(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    function toggleMenu() {
        showMenu = !showMenu;
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
                    {$t('main.name')}
                </span>
            </h2>
            <p class="text-3xl font-light md:text-5xl"> 
                {$t('main.job.title')}
            </p>
            {#key data.pathname}
                <nav>
                    <NavLink locale="{$locale}" href="" title="{$t('menu.home')}" />
                    <NavLink locale="{$locale}" href="/about" title="{$t('menu.aboutme')}" />
                </nav>
            {/key}
        </div>

        {#key data.pathname}
            <div class="absolute bottom-0 right-0 p-4 text-right max-w-md border border-red-500"
                in:fade={{ duration: 500, delay: 600 }}
                out:fade={{ duration: 500 }}
            >
                <slot />
            </div>
        {/key}

        <div class="absolute bottom-0 left-0 p-4 ">
            <div class="md:hidden">
                <button
                    class="btn btn-primary btn-circle"
                    on:click={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {#if showMenu}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        {:else}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        {/if}
                </button>
            </div>
            <div class="hidden md:block">
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