{
    var app = new Vue({
        el: '#main',
        data: {
            name: " ",
            commands:[
            ],
            Command: "",
            imageName: "img/default.png",
            webUrl: "https://www.osakafu-u.ac.jp/",
            show: true,
            win: true,
            table: true,
            tableProfile: false,
            tableWeb: false,
        },
        methods: {
            // ------------------------------
            // -------cuiの処理--------------
            // ------------------------------
            submit: function(){
                var co = this.Command;
                var C = this.Command.split(" ");
                A = C[0]
                switch(A){
                    case "clear":
                        this.commands = [];
                        break;
                    case "exit":
                        this.commands = [];
                        this.show = true;
                        this.imageName = "img/default.png"
                        break;
                    case "--help":
                        var log_h = "command help\n";
                        log_h += "　clear ターミナルをクリアします\n";
                        log_h += "　show webページを表示します\n";
                        log_h += "　profile プロフィールを表示します\n";
                        log_h += "　exit ターミナルを終了します\n";
                        this.commands.push({
                            com: co,
                            log: log_h,
                        });
                        break
                    //showの実装～～～
                    case "show":
                        if(C.length == 1){
                            this.commands.push({
                                com: co,
                                log: "ドメインを指定してください\nex: show osakafu-u.ac.jp"
                            });
                        }else{
                            this.show = false;
                            this.commands.push({
                                com: co,
                                log: C[1] + "を表示します"
                            });
                            this.webUrl = "https://www." + C[1];
                        }
                        break
                    // profileの実装～～～～
                    case "profile":
                        if(C.length == 1){
                            var log_p = "profile command help\n";
                            log_p += "　about: 自己紹介をします \n";
                            log_p += "　image: プロフィール画像を表示します\n";
                            log_p += "　hobby: 趣味を表示します\n";
                            log_p += "　book: おすすめの本を紹介します";
                            this.commands.push({
                                com: co,
                                log: log_p
                            });
                        }else{
                            switch(C[1]){
                                case "about":
                                    this.show = true;
                                    this.commands.push({
                                        com: co,
                                        log:"自己紹介をします"
                                    });
                                    this.imageName = "img/about.png"
                                    break
                                case "image":
                                    this.show = true;
                                    this.commands.push({
                                        com: co,
                                        log:"プロフィール画像を表示します"
                                    });
                                    this.imageName = "img/profile.jpg"
                                    break
                                case "hobby":
                                    this.show = true;
                                    this.commands.push({
                                        com: co,
                                        log:"趣味を表示します"
                                    });
                                    this.imageName = "img/hobby.png"
                                    break
                                case "book":
                                    this.show = true;
                                    this.commands.push({
                                        com: co,
                                        log:"おすすめの本を紹介します"
                                    });
                                    this.imageName = "img/book.png"
                                    break
                                default:
                                    this.commands.push({
                                        com: co,
                                        log: "\'" + co + "\'" + " is not a command. See profile command \'profile\'.",
                                    });
                            }
                        }
                        break
                    // 何も入力されずにenterが押された時
                    case "":
                        this.commands.push({
                            com: co,
                            log: "",
                        });
                        break
                    //その他意味のないコマンドが押された時
                    default:
                        this.commands.push({
                            com: co,
                            log: "\'" + co + "\'" + " is not a command. See command \'--help\'.",
                        });
                };
                this.Command = "";
            },
            // ------------------------------
            // -------guiの処理--------------
            // ------------------------------
            start: function(){
                this.win = false
            },
            shutDown: function(){
                this.win = true;
                this.show = true;
                this.imageName = "img/default.png"
            },
            //Profile~~~     
            showProfile: function(){
                this.table = false;
                this.tableProfile = true;
            },
            pro_about: function(){
                this.show = true;
                this.imageName = "img/about.png";
            },
            pro_hobby: function(){
                this.show = true;
                this.imageName = "img/hobby.png";
            },
            pro_book: function(){
                this.show = true;
                this.imageName = "img/book.png";
            },
            pro_back: function(){
                this.table = true;
                this.tableProfile = false;
            },
            //Webpage~~
            showWeb: function(){
                this.table = false;
                this.tableWeb = true;
            },
            web_osakahu: function(){
                this.show = false;
                this.webUrl = "https://www.osakafu-u.ac.jp/";
            },
            web_y: function(){
                this.show = false;
                this.webUrl = "https://ja.wikipedia.org/wiki/%E5%A4%A7%E9%98%AA%E5%BA%9C%E7%AB%8B%E5%A4%A7%E5%AD%A6";
            },
            web_g:  function(){
                this.show = false;
                this.webUrl = "https://www.upc-osaka.ac.jp/";
            },
            web_back: function(){
                this.table = true;
                this.tableWeb = false;
            },
        }
    });
}