"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.routes();
    }
    /**
     * Method to configure the server,
     * If we didn't configure the port into the environment
     * variables it takes the default port 3000
     */
    Server.prototype.configuration = function () {
        this.app.set('port', process.env.PORT || 8081);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static(__dirname));
    };
    /**
     * Method to configure the routes
     */
    Server.prototype.routes = function () {
        this.app.get('/', function (req, res) {
            res.sendFile(__dirname, './index.html');
        });
    };
    /**
     * Used to start the server
     */
    Server.prototype.start = function () {
        var port = this.app.get('port');
        this.app.listen(port, function () {
            console.log("Server is listening on port " + port);
        });
    };
    return Server;
}());
var server = new Server(); // Create server instance
server.start(); // Execute the server
