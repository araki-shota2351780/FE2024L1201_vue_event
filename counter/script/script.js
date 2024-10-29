// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count: 1,
            num: 0
        };
    },
    methods: {
        kakeru() {
            this.count =  this.count *2;
        },
        waru() {
            this.count = this.count /2;
        },
        tasu() {
            this.count = this.count + this.num;
        },
        hiku() {
            this.count = this.count - this.num;
        },
        reset() {
            this.count = 1;
        }
    }
});