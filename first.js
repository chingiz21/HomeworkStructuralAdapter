var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//application
var CppApp = /** @class */ (function () {
    function CppApp() {
    }
    CppApp.prototype.addNewTask = function () {
        console.log("Adding new task to TODO list");
    };
    CppApp.prototype.updateTask = function () {
        console.log("Updating current task in TODO list");
    };
    CppApp.prototype.deleteTask = function () {
        console.log("Deleting task");
    };
    return CppApp;
}());
//adapter
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adapter.prototype.insert = function () {
        this.addNewTask();
    };
    Adapter.prototype.update = function () {
        this.updateTask();
    };
    Adapter.prototype["delete"] = function () {
        this.deleteTask();
    };
    return Adapter;
}(CppApp));
//client code
var db = new Adapter();
db.insert();
//имитация работы, к примеру, ойти компании. У менеджеров собственное приложение, через которое они
//добавляют, удаляют или изменяют таски(и ничего более); программисты через свое приложение отслеживают
//таски. Т.к. интерфейс разный, необходим адаптер, который будет переводить команды одного приложения в другой.
/* я хотел показать, что у нас есть бд и стороннее приложение, имеющий доступ к нему. Однако приложение не понимает команды
бд, и необходимо создать адаптер, котрый позволит манипулировать сразу 2 интерфейсами сразу*/
