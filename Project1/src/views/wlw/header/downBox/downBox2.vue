<template>
    <div>
        <div class="header-top3" v-show="flag">
            <div class="header-top3-s">
                <div class="header-s-left">

                <div class="header-s-left-s">
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                </div>

                <div class="header-s-left-x">
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                <div class="header-s-left-img">
                <div class="theimg"><img src="" alt=""></div>
                <div>zi</div>
                </div>
                </div>

                </div>
                <div class="header-s-right">
                <div class="header-right-img"><img src="" alt=""></div>
                </div>
            </div>
            <div class="header-top3-x">
            <div class="header-x-left">
            <div class="header-left-zy">
                <div><img src="" alt=""></div>
                <div><p>消费者业务网站</p></div>
            </div>
            <div class="header-left-zy">
                <div><img src="" alt=""></div>
                <div><p>xx商城</p></div>
            </div>
            </div>
            <div class="header-x-right">X</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:true,
        }
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>
<style scoped>
.header-top3{
    width: 100%;
    /*height: 80px;*/
    background-color: antiquewhite;
    border:1px solid black;
    z-index: 999;
    /*visibility: hidden;*/
}
.header-top3-s{
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
    padding-bottom: 30px;
}
.header-s-left{
    flex-grow: 1;
    /*background-color: saddlebrown;*/
    padding-top: 40px;
}
.header-s-left-s{
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
}
.header-s-left-x{
    display: flex;
    justify-content: space-around;
}
.header-s-left-img{
    width: 100px;
    height: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.theimg{
    width: 100px;
    height: 70px;
    border: 1px solid #cccccc;
    margin-bottom: 20px;
}
.theimg img{
    width: 100px;
    height: 70px;
}
.header-s-right{
    flex-grow: 1;
    /*background-color: brown;*/
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-right-img{
    width: 320px;
    height: 320px;
    border: 1px solid black;
}
.header-right-img img{
    width: 320px;
    height: 320px;
}
.header-top3-x{
    width: 100%;
    height: 100px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-x-left{
    margin-left: 40px;
    display: flex;
}
.header-x-right{
    font-size: 30px;
    margin-right: 200px;
}
.header-left-zy{
    display: flex;
    align-items: center;
    height: 70px;
    width: 200px;
    border: 1px solid black;
    margin-right: 20px;
}
.header-left-zy div img{
    width: 80px;
    height: 70px;
    margin-right: 20px;
}
/*
下拉框内部以图片为主*/
</style>