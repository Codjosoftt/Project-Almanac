<template>
<div>
<v-dialog
        v-model="gold_loader"
        persistent
        transition="bounceInLeft"

    >
    <div class='loader loader4'>
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</v-dialog>

</div>
</template>

<script>
    export default {
        name: "gold-load",
        data(){
            return{
                gold_loader:true

            }
        }
    }
</script>

<style scoped>
    @-webkit-keyframes rotate {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotate {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes rotate2 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            border-top-color: rgba(0, 0, 0, 0.5);
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            border-top-color: #AF8612;
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
            border-top-color: rgba(0, 0, 0, 0.5);
        }
    }
    @keyframes rotate2 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            border-top-color: rgba(0, 0, 0, 0.5);
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            border-top-color:#AF8612;
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
            border-top-color: rgba(255, 255, 255, 1);
        }
    }
    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        background: #f9f9f9;
        padding-bottom: 100px;
    }

    h1, h3 {
        display: block;
        margin: 0px auto;
        text-align: center;
        font-family: 'Tahoma';
        font-weight: lighter;
        color: rgba(255, 255, 255, 0.9);
        letter-spacing: 1.5px;
    }

    h1 {
        margin: 50px auto;
    }

    .loader {
        position: relative;
        margin: 75px auto;
        width: 150px;
        height: 150px;
        display: block;
        overflow: hidden;
    }
    .loader div {
        height: 100%;
    }
    /* loader 4 */
    .loader4, .loader4 div {
        border-radius: 50%;
        padding: 8px;
        border: 2px solid transparent;
        -webkit-animation: rotate linear 3.5s infinite;
        animation: rotate linear 3.5s infinite;
        border-radius: 50%;
        padding: 4px;
        -webkit-animation: rotate2 4s infinite linear;
        animation: rotate2 4s infinite linear;
    }

    div:hover {
        -webkit-animation-play-state: paused;
        animation-play-state: paused;
    }

    .loader, .loader * {
        will-change: transform;
    }


</style>