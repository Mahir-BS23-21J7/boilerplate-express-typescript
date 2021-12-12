import { Application, Request, Response, Router } from 'express'
import * as TestController from '../controllers/TestController'

const router = Router();

router.get('/test', async function(req: Request, res: Response): Promise<Response>{
    return await TestController.sampleActionForApi(req, res);
});

router.get('/test-queue', async function(req: Request, res: Response): Promise<Response>{
    return await TestController.sampleActionForQueue(req, res);
});

router.get('/test-rabbitmq', async function(req: Request, res: Response): Promise<Response>{
    return await TestController.sampleActionForRabbitMq(req, res);
});

router.get('/test-worker', async function(req: Request, res: Response): Promise<Response>{
    return await TestController.sampleActionForWorker(req, res);
});

//Export All Routes
export function routes(app: Application): any {
    app.use('/api', router)
}

