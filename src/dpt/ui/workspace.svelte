<script lang="ts">

    import draggable from "dpt/extensions/draggable";

</script>

<div>
    { #if selected }
    <div class="box-content h-32 w-32 border-4 border-blue-300" 
        style="transform: {translation}; position: absolute; top: 0; left: 0;"
        ></div>
    { /if }

    <div class="bg-white box-border h-32 w-32"
        style="position: relative;"
        use:drag on:click={select}>
        Element
    </div>
    <div class="bg-blue-700 text-white box-border h-32 w-32"
        style="position: relative;"
        use:drag on:click={select}>
        Element
    </div>
</div>