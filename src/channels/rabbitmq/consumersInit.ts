import { sampleMessageConsumer } from "./index";

export async function initiateRabbitMqConsumers(): Promise<any>{
    await sampleMessageConsumer()
}