{
    var app = new Vue({
        el: '#main',
        data: {
            num: 0,
            name: " ",
            commands:[
            ],
            Command: "",
            imageName: "img/default.png"
        },
        methods: {
            submit: function(){
                var A = this.Command;
                switch(A){
                    case "clear":
                        this.commands = [];
                        break;
                    case "--help":
                        this.commands.push({
                            com: A,
                            log: "clear　画面をクリアします\nls ",
                        });
                        break
                    case "profile":
                        this.commands.push({
                            com: A,
                            log:"プロフィール写真を表示します"
                        });
                        this.imageName = "img/profile.jpg"
                        break
                    default:
                        this.commands.push({
                            com: A,
                            log: "\'" + A + "\'" + " is not a command. See command \'--help\'.",
                        });
                };
                this.Command = "";
            }
        }
    });
}