new Vue({
    el: '#app',
    data: {
        num: 1,
        count: 0
    },
    methods: {
        kakeru() {
            this.count *= 2;
        },
        waru() {
            this.count /= 2;
        },
        reset() {
            this.count = 0;
        },
        tasu() {
            this.count += this.num;
        },
        hiku() {
            this.count -= this.num;
        }
    }
});