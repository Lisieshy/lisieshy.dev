<script lang="ts">
    export let showModal: boolean;

    let dialog: HTMLDialogElement;

    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    class="modal"
    bind:this={dialog}
    on:close={() => (showModal = false)}
    on:click|self={() => dialog.close()}
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="modal-box"
        on:click|stopPropagation
    >
        <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <slot name="header" />
        <hr />
        <slot />
        <!-- svelte-ignore a11y-autofocus -->
        <form method="dialog" class="modal-backdrop">
            <button autofocus on:click={() => dialog.close()}>close modal</button>
        </form>
    </div>
</dialog>
