<template>
    <section class="l-mn">
        <div class="m-input">
            <input type="text" placeholder="What needs to be done?" />
            <button>Add</button>
        </div>
        <div class="m-lst">
            <router-view></router-view>
        </div>
        <div class="m-tab">
            <ol>
                <li><a v-link="{path: '/all'}">All</a></li>
                <li><a v-link="{path: '/active'}">Active</a></li>
                <li><a v-link="{path: '/completed'}">Completed</a></li>
            </ol>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Base'
    }
</script>
