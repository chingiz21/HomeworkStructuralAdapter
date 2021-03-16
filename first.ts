interface Database {
    insert(): void;
}
//application
class App {
    public insertObj(): void {
        console.log("Inserting obj...");
    }
}
//adapter
class Adapter extends App implements Database {
    public insert(): void {
        this.insertObj();
    }
}
//client code
const db = new Adapter();
db.insert();
//


