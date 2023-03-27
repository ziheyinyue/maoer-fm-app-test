<template>
    <div class="liveList">
        <div class="liveItem" v-for="item in state.liveLists" :key="item.id">
            <span class="liveIcon">直播中</span>
            <img :src="item.picUrl" />
            <span class="liveTitle">{{ item.name }}</span>
        </div>


    </div>
</template>
<script>
import { getLiveList } from '/src/request/api/home.js'
import { reactive, onMounted } from 'vue';

export default {
    setup() {
        const state = reactive({
            liveLists: [

            ]
        });
        onMounted(async () => {
            let res = await getLiveList()
            console.log(res)
            state.liveLists = res.data.result
        })
        return { state };
    },
}
</script>

<style lang="less">
.liveList {
    margin: .4rem 0.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    scrollbar-width: none;
    /* firefox */
    -ms-overflow-style: none;
    /* IE 10+ */

    .liveItem {
        width: 2.1rem;
        height: 2.1rem;
        margin-right: .2rem;
        position: relative;

        .liveIcon {
            position: absolute;
            padding: .1rem .2rem;
            border-radius: .3rem;
            background-color: #da7a7a;
            color: #fff;
            font-size: 8px;
            top: .1rem;
            right: .1rem;
            white-space: nowrap;
        }

        img {
            width: 2.1rem;
            height: 2.1rem;
        }

        .liveTitle {
            position: absolute;
            left: 0;
            bottom: 0;
            padding: .1rem;
            color: #fff;
            width: 2.1rem;
            font-size: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

.liveList::-webkit-scrollbar {
    display: none;
}
</style>