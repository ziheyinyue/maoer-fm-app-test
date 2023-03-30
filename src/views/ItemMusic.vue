<!-- 剧集详情页 -->
<template>
    <ItemMusicTop :playlist = "state.playlist" />
    <ItemMusicList :itemSongs = "state.itemSongs" />
</template>

<script>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { getMusicItemList,getMusicItemAll } from '@/request/api/item.js'
import ItemMusicTop from '../components/item/ItemMusicTop.vue'
import ItemMusicList from '../components/item/ItemMusicList.vue'

export default {
    setup() {
        const state = reactive({
            playlist: {}, // 歌单详情
            itemSongs: [] // 歌单歌曲
        })
        onMounted(async () => {
            let id = useRoute().query.id
            console.log(id);
            // 获取歌单详情
            let res = await getMusicItemList(id);
            console.log(res);
            state.playlist = res.data.playlist;
            // 获取歌单内歌曲
            let itemSongs = await getMusicItemAll(id);
            state.itemSongs = itemSongs.data.songs;
            // 防止页面刷新数据丢失 数据保存到sessionStorage中
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        })
        return {state};
    },
    components:{
        ItemMusicTop,
        ItemMusicList
    }

}

</script>