<script lang="ts">
    import "../app.css";
    import ThemeSelect from "$lib/themes/ThemeSelect.svelte";
    import { t, locales, locale } from '$lib/translations';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { Canvas } from "@threlte/core";
    import Background from "$lib/Background.svelte";

    $: ({ route } = $page.data);

    function handleLocaleSelection(e: any) {
        const redirectTo = e.target.value;
        goto(redirectTo);
    }

</script>

<svelte:head>
    <title>Marine Schulz</title>
</svelte:head>

<div class="flex flex-col h-screen">
    <div class="relative box-content border border-primary h-screen m-8 overflow-hidden">
        <div class="absolute left-0 top-0 p-4 z-10">
            <slot />
            <nav>
                <a href="/{$locale}">{$t('menu.home')}</a>
            </nav>
        </div>

        <Canvas>
            <Background />
        </Canvas>

        <div class="absolute bottom-0 left-0 p-4">
            <ThemeSelect />
            <select
                on:change={handleLocaleSelection}
                class="select select-bordered w-full max-w-fit"
            >
                {#each $locales as l}
                    <option value="/{l}{route}" selected="{l === $locale}">{$t(`lang.${l}`)}</option>
                {/each}
            </select>
        </div>
    </div>
</div>