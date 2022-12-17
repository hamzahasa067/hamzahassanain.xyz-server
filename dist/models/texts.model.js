"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const consts_1 = require("../utils/consts");
const TextSchema = new mongoose_1.Schema({
    content: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    tag: {
        required: true,
        type: String
    },
    status: {
        required: true,
        enum: [consts_1.Status.NotPublished, consts_1.Status.Published],
        type: String,
        default: consts_1.Status.NotPublished
    }
});
exports.default = (0, mongoose_1.model)("Text", TextSchema);
//# sourceMappingURL=texts.model.js.map