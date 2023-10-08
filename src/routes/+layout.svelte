<script lang="ts">
    import "../app.css";
    import ThemeSelect from "$lib/themes/ThemeSelect.svelte";
    import Modal from "$lib/Modal.svelte";
    import { t, locales, locale } from '$lib/translations';
    import NavLink from "$lib/NavLink.svelte";
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { fade } from "svelte/transition";
    export let data;

    $: ({ route } = $page.data.i18n);

    function handleLocaleSelection(e: any) {
        const redirectTo = e.target.value;
        goto(redirectTo);
    }

    let current_theme = '';
    let showModal = false;
</script>

<svelte:head>
    <title>Marine Schulz</title>
</svelte:head>

<div class="flex flex-col h-screen bg-neutral">
    <div class="relative box-content border border-primary h-screen m-4 md:m-8 overflow-hidden">
        <div class="bg-base-100">
            <div class="relative h-screen w-screen -top-[70rem] -left-[40rem]">
                <div class="absolute rounded-[43%] -one w-[100rem] h-[90rem] md:w-[130rem] md:h-[120rem]"></div>
                <div class="absolute rounded-[43%] -two w-[100rem] h-[90rem] md:w-[130rem] md:h-[120rem]"></div>
            </div>

            <div class="absolute left-0 top-0 p-4 z-10">
                <div class="relative w-max">
                    <h2 class="text-5xl font-thin md:text-7xl">
                        <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            {$t('main.name')}
                        </span>
                    </h2>
                    <p class="text-3xl font-light md:text-5xl">
                        {$t('main.job.title')}
                    </p>
                </div>

                <div class="relative w-min">
                    <!-- {#key data.pathname} -->
                        <nav>
                            <ul class="menu rounded-box">
                                <li>
                                    <NavLink
                                        locale="{$locale}"
                                        href=""
                                        title="{$t('menu.home')}"
                                        isActive={data.pathname === ''}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        locale="{$locale}"
                                        href="/about"
                                        title="{$t('menu.aboutme')}"
                                        isActive={data.pathname === '/about'}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        locale="{$locale}"
                                        href="/projects"
                                        title="{$t('menu.projects')}"
                                        isActive={data.pathname === '/projects'}
                                    >
                                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H9.67452C10.1637 5 10.4083 5 10.6385 5.05526C10.8425 5.10425 11.0376 5.18506 11.2166 5.29472C11.4184 5.4184 11.5914 5.59135 11.9373 5.93726L12.0627 6.06274C12.4086 6.40865 12.5816 6.5816 12.7834 6.70528C12.9624 6.81494 13.1575 6.89575 13.3615 6.94474C13.5917 7 13.8363 7 14.3255 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9976 10.7119C11.2978 9.9328 10.1309 9.72321 9.25414 10.4367C8.37738 11.1501 8.25394 12.343 8.94247 13.1868C9.33119 13.6632 10.2548 14.4983 10.9854 15.1353C11.3319 15.4374 11.5051 15.5885 11.7147 15.6503C11.8934 15.703 12.1018 15.703 12.2805 15.6503C12.4901 15.5885 12.6633 15.4374 13.0098 15.1353C13.7404 14.4983 14.664 13.6632 15.0527 13.1868C15.7413 12.343 15.6329 11.1426 14.7411 10.4367C13.8492 9.73072 12.6974 9.9328 11.9976 10.7119Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        locale="{$locale}"
                                        href="/contact"
                                        title="{$t('menu.contact')}"
                                        isActive={data.pathname === '/contact'}
                                    >
                                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 17H21M18.5 14.5V19.5M12 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V11M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    <!-- {/key} -->
                </div>
            </div>


            {#key data.pathname}
                <div class="absolute bottom-0 right-0 p-4 text-right max-w-md"
                    in:fade={{ duration: 500, delay: 600 }}
                    out:fade={{ duration: 500 }}
                >
                    <slot />
                </div>
            {/key}

            <div class="absolute bottom-0 left-0 p-4 ">
                <div class="md:hidden md:invisible">
                    <button
                        on:click={() => showModal = true}
                        class="btn btn-secondary btn-circle">
                        <!-- horizontal three dots icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <circle cx="5" cy="12" r="1" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                    </button>
                    <Modal bind:showModal>
                        <h2 slot="header">
                            {$t('menu.settings')}
                        </h2>
                        <div class="flex flex-col space-y-2 pt-4">
                            <ThemeSelect
                                bind:current_theme
                                className="select select-bordered select-sm w-full" />
                            <select
                                on:change={handleLocaleSelection}
                                class="select select-bordered select-sm w-full"
                            >
                                {#each $locales as l}
                                    <option value="/{l}{route}" selected="{l === $locale}">{$t(`lang.${l}`)}</option>
                                {/each}
                            </select>
                        </div>
                    </Modal>
                </div>
                <div class="hidden invisible md:block md:visible">
                    <ThemeSelect
                        bind:current_theme
                        className="select select-bordered select-sm max-w-fit"/>
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