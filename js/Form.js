class Form {
    constructor(){

    }
    display(){
        var Title = createElement('h2')
        Title.html("Racing Moto");
        Title.position(130,10);
        var Input = createInput("Name")
        Input.position(130,160);
        var Button = createButton('Start')
        Button.position(250,200)
        var Greeting = createElement('h4')
        Button.mousePressed(function(){
            Input.hide();
            Button.hide();
            var name = Input.value();
            playerCount = playerCount + 1;
            player.updateName(name);
            player.updateCount(playerCount);
            Greeting.html("Hello "+name);
            Greeting.position(130,160);
        })
    }
}