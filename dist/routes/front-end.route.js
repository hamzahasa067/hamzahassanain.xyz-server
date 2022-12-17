"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const front_end_controller_1 = require("../controllers/front-end.controller");
const router = (0, express_1.Router)();
router.get("/", front_end_controller_1.getAllData);
exports.default = router;
//# sourceMappingURL=front-end.route.js.map