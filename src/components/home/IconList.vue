<template>
    <div class="iconList">
        <div class="iconItem">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye1"></use>
                </svg>
            </span>
            <span>直播</span>
        </div>
        <div class="iconItem">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shoucang"></use>
                </svg>
            </span>
            <span>广播剧</span>
        </div>
        <div class="iconItem">
            <span>
                <svg class="icon icon-cat" aria-hidden="true">
                    <use xlink:href="#icon-maomi"></use>
                </svg>
            </span>
            <span>放松</span>
        </div>
        <div class="iconItem">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-faxian"></use>
                </svg>
            </span>
            <span>周边上新</span>
        </div>
        <div class="iconItem">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye"></use>
                </svg>
            </span>
            <span>盲盒剧场</span>
        </div>
        <div class="iconItem">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-maomi"></use>
                </svg>
            </span>
            <span>启动音</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
.iconList {
    margin: .4rem 0.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    scrollbar-width: none;
    /* firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
    font-size: 0.28rem;

    .iconItem{
        width: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: .5rem;
        span{
            white-space: nowrap;
        }
    }

    .iconItem:last-of-type{
        margin-right: 0;
    }
}
.iconList::-webkit-scrollbar {
    display: none;
}
</style>