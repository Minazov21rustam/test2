const time = () => {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    constructor(author, message){
        this.author = author;
        this.time = time();
        this.message = message;
    }
    toString(){
        return `${this.time} ${this.author}: ${this.message}`;
    }
}

    class Messenger{
    texts = [];

    send(author, text){
        this.texts.push(new Message(author, text));
    }
    show_history(){
        this.texts.forEach((i) => {
            
            console.log(i.toString());
        });
    }
}

const messenger = new Messenger();

messenger.send('egor', ' privet');

messenger.send('alex','poka'
               
messenger.show_history();
