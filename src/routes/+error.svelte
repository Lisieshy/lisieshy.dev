<script lang="ts">
    import { page } from "$app/stores";
    import { t } from "$lib/translations";

    const { status } = $page;
</script>
<h2 class="text-5xl font-bold md:text-7xl xl:text-8xl">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {$t('error.shit.happens')} ({status})
    </span>
</h2>
<p class="text-3xl font-light md:text-5xl xl:text-6xl">
    {$t(`error.${status}`, { default: $t('error.default') })}
</p>
<!-- 
<br>
<br> -->

<!-- <p class="text-1xl">
    {$locale} – {$t(`lang.${$locale}`)}
</p> -->
<!-- 
<style lang="postcss">
    :global(h1) {
        color: theme(colors.rosePine.text);
    }
    :global(p) {
        color: theme(colors.rosePine.subtle);
    }
</style> -->