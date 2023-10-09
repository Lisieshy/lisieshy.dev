<script lang="ts">
    export let href: string;
    export let title: string;
    export let locale: string;
    export let isActive: boolean;

    import { goto } from "$app/navigation";

    function navigate(event: Event) {
        event.preventDefault();
        goto(`/${locale}${href}`, { replaceState: true });
    }
</script>

<div
    class="tooltip tooltip-right sm:tooltip-open"
    data-tip="{title}"
    >
    <button
        class="btn btn-circle btn-primary btn-outline"
        class:selected="{isActive}"
        on:click={navigate}
    >
        <slot name="icon" />
    </button>
</div>

<style>
    button.selected {
        color: hsl(var(--pc));
        background-color: hsl(var(--pf));
        border: 2px solid hsl(var(--pf));
    }
</style>