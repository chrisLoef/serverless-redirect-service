#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { ServerlessRedirectServiceStack } from '../lib/serverless-redirect-service-stack';

const app = new cdk.App();
new ServerlessRedirectServiceStack(app, 'ServerlessRedirectServiceStack');
