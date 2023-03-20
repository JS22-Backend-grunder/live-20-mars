const { Router } = require('express');
const router = Router();

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

    if(insultObj?.insult && insultObj?.play) {
        const { insult, play } = insultObj;

        insults.push({ insult: insult, play: play });

        const result = {
            success: true,
            insults: insults
        }

        response.json(result);
    } else {
        const result = {
            success: false,
            error: 'Wrong data in body'
        }

        response.status(400).json(result);
    }
});

module.exports = router;