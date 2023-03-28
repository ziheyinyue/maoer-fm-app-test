<template>
    <div class="likeListWrap">
        <h3 class="likeTitle">猜你喜欢</h3>
        <div class="likeList">
            <div class="likeItem" v-for="item in state.likeLists" :key="item.id">
                <router-link :to="{path:'itemMusic',query:{id:item.id}}">
                <div class="likeImg">
                    <img :src="item.picUrl" alt="">
                    <span class="likeItemPlayCount">
                        <van-icon name="play-circle-o" color="#fff" />
                        {{ changeCount(item.playCount) }}
                    </span>
                    <span class="likeItemCommentCount">
                        {{ changeCount(item.trackCount) }}
                        <van-icon name="comment-o" color="#fff" />
                    </span>
                </div>
                <p class="likeItemTitle">{{ item.name }}</p>
            </router-link>
            </div>
        </div>
        <van-button type="default" icon="replay" icon-position="right" size="mini" round>换一批</van-button>
    </div>
</template>
<script>
import { getLikeList } from '/src/request/api/home.js'
import { changeCount } from '../../request/api/home';
import { reactive, onMounted } from 'vue';

export default {
    setup() {
        const state = reactive({
            likeLists: [

            ]
        });
        onMounted(async () => {
            let res = await getLikeList()
            console.log(res)
            state.likeLists = res.data.result
        })
        return { state, changeCount };
    },
}
</script>

<style lang="less" scoped>
.likeListWrap {
    margin: 0 0.2rem;
    display: flex;
    flex-direction: column;

    .likeTitle {
        font-size: .28rem;
        font-weight: 550;
        margin-bottom: .1rem;
    }

    .likeList {
        display: flex;
        flex-flow: wrap;

        .likeItem {
            width: 2.2rem;
            margin-right: .25rem;
            margin-bottom: .25rem;

            .likeImg {
                position: relative;

                img {
                    width: 2.2rem;
                    height: 2.2rem;
                    border-radius: .2rem;
                }

                .likeItemPlayCount {
                    color: #fff;
                    font-size: .2rem;
                    position: absolute;
                    left: .08rem;
                    bottom: .12rem;
                }

                .likeItemCommentCount {
                    color: #fff;
                    font-size: .2rem;
                    position: absolute;
                    right: .08rem;
                    bottom: .12rem;
                }
            }

            .likeItemTitle {
                font-size: .24rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                /*! autoprefixer: off */
                -webkit-box-orient: vertical;
            }
        }

        .likeItem:nth-of-type(3n) {
            margin-right: 0;
        }
    }

    .van-button {
        align-self: center;
        width: 2rem;
    }
}
</style>