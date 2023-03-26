<template>
    <div class="topNav">
        <div class="topNav-top">
            <div class="left-button">
                <svg class="icon icon-female" aria-hidden="true">
                    <use xlink:href="#icon-nvxing"></use>
                </svg>
                <svg class="icon icon-male" aria-hidden="true">
                    <use xlink:href="#icon-nanxing"></use>
                </svg>
            </div>
            <div class="search">
                <form action="">
                    <van-icon name="search" />
                    <input type="text" placeholder="">
                </form>
            </div>
            <div class="history">
                <van-icon name="clock-o" />
            </div>
        </div>
        <div class="topNav-bottom">
            <span>直播</span>
            <span>推荐</span>
            <span>广播剧</span>
            <span>声音恋人</span>
            <span>分类</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
.topNav-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .6rem;
    margin: .2rem;

    .left-button {
        position: relative;
        margin-right: .6rem;

        .icon {
            width: .4rem;
            height: .4rem;
            padding: 3px;
            border-radius: .1rem;
            position: absolute;
            top: 50%;
            margin-top: -0.2rem;
            left: .1rem;
        }

        .icon:first-of-type {
            transform: translate(2px, 2px);
            z-index: 1;
        }

        .icon:last-of-type {
            transform: translate(-2px, -2px);
        }

        .icon-female {
            background-color: #ffa7a7;
        }

        .icon-male {
            background-color: #2e61f0;
        }
    }

    .search {
        background-color: #fff;

        form {
            // height: 1rem;
            position: relative;

            .van-icon-search {
                position: absolute;
                width: .4rem;
                left: .2rem;
                top: 50%;
                height: .4rem;
                margin-top: -0.2rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            input {
                width: 5.5rem;
                height: .6rem;
                border-radius: 1rem;
                border: 1px solid #eee;
                background-color: #eee;
            }
        }


    }
}
.topNav-bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
    color: #808080;
}
</style>