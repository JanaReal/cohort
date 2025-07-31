type KeyInput = "up" | "down" | "left" | "right";

enum Direction {
    Up,Down,Left,Right
}

function doSomething(keyPressed: Direction){
    //do something
}

doSomething(Direction.Up);