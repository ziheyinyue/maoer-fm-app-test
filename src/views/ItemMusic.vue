<!-- 剧集详情页 -->
<template>
    <ItemMusicTop :playlist = "state.playlist" />
</template>

<script>
import ItemMusicTop from '../components/item/ItemMusicTop.vue'
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { getMusicItemList } from '@/request/api/item.js'

export default {
    setup() {
        const state = reactive({
            playlist: {}
        })
        onMounted(async () => {
            let id = useRoute().query.id
            // console.log(id);
            let res = await getMusicItemList(id);
            // console.log(res);
            state.playlist = res.data.playlist
        })
        return {state};
    },
    components:{
        ItemMusicTop
    }

}

</script>