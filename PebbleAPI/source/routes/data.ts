import express from 'express';
import controller from '../controllers/data';

const router = express.Router();

router.get('/cpu', controller.serverCPUcheck);

router.get('/memory', controller.serverMemorycheck);

router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message,
        info: 'data properties from here: /memory and /cpu'
    });
});

export = router;
