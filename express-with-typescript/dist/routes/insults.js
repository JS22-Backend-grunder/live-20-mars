"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const insults = [
    {
        insult: "Never hung poison on a fouler toad",
        play: "Rickard III"
    },
    {
        insult: "He thinks too much: such men are dangerous. ",
        play: "Julius Ceasar"
    }
];
router.get('/', (request, response) => {
    response.json(insults);
});
router.post('/', (request, response) => {
    const insultObj = request.body;
    if ((insultObj === null || insultObj === void 0 ? void 0 : insultObj.insult) && (insultObj === null || insultObj === void 0 ? void 0 : insultObj.play)) {
        const { insult, play } = insultObj;
        insults.push({ insult: insult, play: play });
        const result = {
            success: true,
            insults: insults
        };
        response.json(result);
    }
    else {
        const result = {
            success: false,
            error: 'Wrong data in body'
        };
        response.status(400).json(result);
    }
});
module.exports = router;
