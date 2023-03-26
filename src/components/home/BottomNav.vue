<template>
    <div class="bottomNav">
        <div class="bottomNav-list">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye1"></use>
                </svg>
            </span>
            <span>首页</span>
        </div>
        <div class="bottomNav-list">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shoucang"></use>
                </svg>
            </span>
            <span>我听</span>
        </div>
        <div class="bottomNav-list">
            <span>
                <svg class="icon icon-cat" aria-hidden="true">
                    <use xlink:href="#icon-maomi"></use>
                </svg>
            </span>
        </div>
        <div class="bottomNav-list">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-faxian"></use>
                </svg>
            </span>
            <span>发现</span>
        </div>
        <div class="bottomNav-list">
            <span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye"></use>
                </svg>
            </span>
            <span>我的</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
.bottomNav {
    width: 100%;
    position: absolute;
    padding: 16px;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    background-color: #e2e2e2;
    font-size: 0.28rem;

    .bottomNav-list{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon-cat{
            width: 1rem;
            height: 1rem;
            position: relative;
        }
        .icon-cat::before, .icon-cat::after{
            content: "";
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            border: 1px solid #000;
            background-color: #000;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
}
</style>