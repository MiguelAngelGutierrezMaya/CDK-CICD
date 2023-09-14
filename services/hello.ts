import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';

async function handler(
  _event: APIGatewayProxyEvent,
  _context: Context,
): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 400,
    body: JSON.stringify({
      message: 'Hello world!',
    }),
  };
}

export { handler };
