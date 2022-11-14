function vremya() {
    let data = new Date();
    return ${data.getHours()}:${data.getMinutes()}
}
class Message {
    constructor(celovek, message){
    this.message = message;
    this.celovek = celovek;
    this.vremya = vremya();
    }
    toString(){
    return ${this.vremya} ${this.celovek}: ${this.message};
    }
}
class Messenger{
    messages = [];
    send(celovek, text){
    this.messages.push(new Message(celovek, text));
    }
    show_history(){
        this.messages.map(function(m){
            console.log(m.toString())
        }
        );
    }
}
const messages = new Messenger();
messages.send('Rustam', 'kkkk');
messages.send('Rustam', 'oooo');
messages.show_history();
