<template>
    <div class="itemMusicTop">
        <img :src="playlist.coverImgUrl" alt="" class="backImg">
        <div class="itemTitle">
            <div class="itemTitleLeft">
                <van-icon name="arrow-left" color="#fff" @click="$router.go(-1)" />
                <h3>{{playlist.name}}</h3>
            </div>
            <div class="itemTitleRight">
                <van-icon name="down" color="#fff" />
                <van-icon name="share-o" color="#fff" />
            </div>

        </div>
        <div class="itemContent">
            <img :src="playlist.coverImgUrl" alt="">
            <div class="itemContentRight">
                <div class="contentIcons">
                    <span v-for="tag in playlist.tags">{{ tag }}</span>
                </div>
                <p>{{ playlist.name }}</p>
                <div class="contentBottom">
                    <p class="playNum">
                        <span class="playCount">{{ changeCount(playlist.playCount) }}</span>播放
                    </p>
                    <van-button type="default" icon="like-o"  size="mini" round color="#ffa7a7">追剧</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.itemMusicTop {
    padding: .2rem;
    position: relative;
    .backImg{
        width: 100%;
        height: 6rem;
        position: absolute;
        z-index: -1;
        left: -0.02rem;
        top: -0.02rem;
        object-fit: cover;
        filter: blur(.6rem);
    }

    .itemTitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .itemTitleLeft{
            display: flex;
            align-items: center;
            h3{
                max-width: 5rem;
                font-size: .3rem;
                font-weight: 550;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            
        }
        .van-icon{
            margin-right: .4rem;
        }
        .van-icon-share-o{
            margin-right: 0;
        }
        
    }
    .itemContent{
        margin-top: .4rem;
        display: flex;
        justify-content: space-between;
        img{
            width: 3rem;
            height: 3rem;
            border: 2px solid #fff;
            border-radius: .1rem;
            margin-right: .2rem;
        }
        .itemContentRight{
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .contentIcons{
                span{
                    margin-right: .1rem;
                    font-size: 4px;
                    padding: 2px 4px;
                    border-radius: 4px;
                    background-color:  rgba(182, 182, 182, 0.6);
                }
            }
            .contentBottom{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .playNum{
                    font-size: .2rem;
                
                .playCount{
                    font-weight: 650;
                    font-size: .3rem;
                }
            }
            }
        }
    }
}
</style>

<script>
import { changeCount } from '../../request/api/home';
export default {
    setup(props) {
        console.log(props);
        return {changeCount}
    },
    props: ['playlist']
}
</script>