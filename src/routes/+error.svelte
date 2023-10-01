<script lang="ts">
    import { page } from "$app/stores";
    import { t, locale } from "$lib/translations";

    const { status } = $page;
</script>

<h1 class="text-6xl font-bold">
    {$t('error.shit.happens')} ({status})
</h1>
<p class="text-2xl">
    {$t(`error.${status}`, { default: $t('error.default') })}
</p>

<br>
<br>

<p class="text-1xl">
    {$locale} – {$t(`lang.${$locale}`)}
</p>
<!-- 
<style lang="postcss">
    :global(h1) {
        color: theme(colors.rosePine.text);
    }
    :global(p) {
        color: theme(colors.rosePine.subtle);
    }
</style> -->