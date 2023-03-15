<div class="card">
    <div class="card-header">
        <slot name="card-header">Empty card header</slot>
    </div>
    <div class="card-body">
        <slot name="card-body">Empty card body</slot>
    </div>
</div>

<style>
    .card {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #DADCE0;
        box-shadow: 0 0 99px -60px rgba(221,222,211,1);
    }
    :global( [slot="card-header"] ) {
        border-bottom: 1px solid #DADCE0;
        display: flex;
        justify-content: space-between;
    }
</style>