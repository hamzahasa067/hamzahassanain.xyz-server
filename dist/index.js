"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const AuthenticatAdmin_1 = __importDefault(require("./middlewares/AuthenticatAdmin"));
const front_end_route_1 = __importDefault(require("./routes/front-end.route"));
const adminLogin_route_1 = __importDefault(require("./routes/adminLogin.route"));
const icon_route_1 = __importDefault(require("./routes/icon.route"));
const image_route_1 = __importDefault(require("./routes/image.route"));
const texts_route_1 = __importDefault(require("./routes/texts.route"));
const listItem_route_1 = __importDefault(require("./routes/listItem.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.set('view engine', 'ejs');
// app.use(cors({}))
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/all", front_end_route_1.default);
app.use("/auth/", adminLogin_route_1.default);
app.use("/image/", AuthenticatAdmin_1.default, image_route_1.default);
app.use("/texts/", AuthenticatAdmin_1.default, texts_route_1.default);
app.use("/icon/", AuthenticatAdmin_1.default, icon_route_1.default);
app.use("/listItem/", AuthenticatAdmin_1.default, listItem_route_1.default);
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(process.env.DB_URL).then(res => app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.info("Server is running .....");
}))).catch(err => {
    console.error(err);
});
//# sourceMappingURL=index.js.map