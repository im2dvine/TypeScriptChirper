import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('Earthlings');
});

router.get('http://student-fun-api.herokuapp.com/api/hiphop', (req, res, next) => {
res.send('that ish worked!');
});

export default router;