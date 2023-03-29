<template>
    <div class="itemMusicList">
        <div class="top">
            <span class="lianzai">连载中</span>
            <span class="gengxin">更新至 {{ itemSongs[itemSongs.length - 1].name }}</span>
        </div>
        <div class="content">
            <div class="contentItem" v-for="item in itemSongs">
                {{ item.name }}
            </div>
        </div>
        <div class="actors">
            <div class="actorsTitle">
                <h3>参演声优</h3>
                <span>
                    全部
                    <van-icon name="arrow" />
                </span>
            </div>
            <div class="actorsList">
                <div class="actor">
                    <img src="" alt="">
                    <span class="actorName"></span>
                    <span class="juese"></span>
                    <span class="shetuan"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    setup(props) {
        console.log(props);
        //判断如果通过props拿不到数据 就从sessionStorage里拿
        if (props.itemSongs.length == 0) {
            props.itemSongs = JSON.parse(sessionStorage.getItem('itemDetail')).itemSongs
        }
    },
    props: ['itemSongs']
}
</script>

<style lang="less" scoped>
.itemMusicList {
    margin-top: .4rem;
    padding: .4rem 0.2rem;
    background-color: #fff;
    border-radius: 0.2rem 0.2rem 0 0;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .2rem;

        .lianzai {
            font-weight: 550;
        }

        .gengxin {
            font-size: .26rem;
            width: 3.5rem;
            white-space: nowrap;
            overflow-x: hidden;
            text-overflow: ellipsis;
        }
    }

    .content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow-x: auto;
        scrollbar-width: none;
        /* firefox */
        -ms-overflow-style: none;

        /* IE 10+ */
        .contentItem {
            font-size: .26rem;
            margin-right: .2rem;
            min-width: 2.2rem;
            height: 1.3rem;
            padding: .2rem;
            border: 1px solid #eee;
            border-radius: .2rem;
            text-overflow: ellipsis;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            -webkit-line-clamp: 2;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

    .content::-webkit-scrollbar {
        display: none;
    }
}</style>