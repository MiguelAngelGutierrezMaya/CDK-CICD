import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import { handler } from '../services/hello';

describe('Hello describe test cdk-cicd', () => {
  test('Hello test cdk-cicd', async () => {
    const result: APIGatewayProxyResult = await handler(
      {} as APIGatewayProxyEvent,
      {} as Context,
    );
    expect(result.statusCode).toBe(200);
  });
});
