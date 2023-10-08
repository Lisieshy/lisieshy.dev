<script lang="ts">
    export let href: string;
    export let title: string;
    export let locale: string;
    export let isActive: boolean;
</script>

<a href="/{locale}{href}"
    class="tooltip tooltip-right md:tooltip-open bg-base-100 text-neutral-content rounded-full p-3 mt-4"
    data-tip="{title}"
    class:selected="{isActive}"
    >
    <slot />
</a>

<style>
    a.selected {
        color: hsl(var(--wa));
    }
</style>