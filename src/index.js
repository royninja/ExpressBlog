"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 9000;
app.get("/", (req, res) => {
    //res.send("<h1>Home</h1>");
    res.sendFile(path_1.default.join(__dirname, "../index.html"));
});
app.get("/about", (req, res) => {
    res.send("<h2>About</h2>");
});
app.listen(port, () => {
    console.log(`Running on port : ${port}`);
});
