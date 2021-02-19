import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const defaultTarget = 'https://loef.io';

const redirectRules = [
  {
    source: '/yourPath',
    target: 'https://google.com',
  },
];

const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const requestPath = event.path;
  const matchedRule = redirectRules.find(item => item.source === requestPath);
  const newLocation = matchedRule != null ? matchedRule.target : defaultTarget;
  return {
    statusCode: 301,
    body: '',
    headers: {
      Location: newLocation,
    }
  };
}

module.exports = { handler };
