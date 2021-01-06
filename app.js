{
    var app = new Vue({
        el: '#main',
        data: {
            num: 0,
            name: " "
        },
        methods: {
            submit: function(){
                this.num += 1;
            }
        }
    });
}