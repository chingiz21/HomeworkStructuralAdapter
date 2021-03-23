interface Database {
    insert(): void;
    update(): void;
    delete(): void;
}
//application
class CppApp {
    public addNewTask(): void {
        console.log("Adding new task to TODO list");
    }
    public updateTask(): void {
        console.log("Updating current task in TODO list");
    }
    public deleteTask(): void {
        console.log("Deleting task");
    }
}
//adapter
class Adapter extends CppApp implements Database {
    public insert(): void {
        this.addNewTask();
    }
    public update(): void {
        this.updateTask();
    }
    public delete(): void {
        this.deleteTask();
    }
}
//client code
const db = new Adapter();
db.insert();
//имитация работы, к примеру, ойти компании. У менеджеров собственное приложение, через которое они
//добавляют, удаляют или изменяют таски(и ничего более); программисты через свое приложение отслеживают
//таски. Т.к. интерфейс разный, необходим адаптер, который будет переводить команды одного приложения в другой.

/* я хотел показать, что у нас есть бд и стороннее приложение, имеющий доступ к нему. Однако приложение не понимает команды 
бд, и необходимо создать адаптер, котрый позволит манипулировать сразу 2 интерфейсами сразу*/


