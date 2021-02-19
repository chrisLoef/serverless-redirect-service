import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class ServerlessRedirectServiceStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const redirectProxy = new lambda.Function(this, 'redirectproxy', {
      code: lambda.Code.fromAsset('src/lambda/redirectproxy'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
    });

    const restApi = new apigateway.LambdaRestApi(this, 'restApi', {
      handler: redirectProxy,
      restApiName: [this.node.id, 'api'].join('-'),
    });

  }
}
