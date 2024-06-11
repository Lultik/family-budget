import type { AWS } from '@serverless/typescript';
import 'dotenv/config';

const region = process.env.AWS_REGION as AWS['provider']['region'] || 'eu-central-1';

const serverlessConfiguration: AWS = {
  service: 'budget-server',
  frameworkVersion: '3',
  plugins: ['serverless-offline'],
  useDotenv: true,
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    region,
    profile: 'aws-js',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      RECORDS_TABLE_NAME: process.env.RECORDS_TABLE_NAME,
      ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID,
      SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    },
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: [
              'dynamodb:DescribeTable',
              'dynamodb:Query',
              'dynamodb:Scan',
              'dynamodb:GetItem',
              'dynamodb:PutItem',
              'dynamodb:UpdateItem',
              'dynamodb:DeleteItem',
              'dynamodb:BatchWriteItem',
            ],
            Resource: 'arn:aws:dynamodb:${opt:region, self:provider.region}:*:table/*',
          },
          {
            Effect: 'Allow',
            Action: [
              'sns:*',
            ],
            Resource: '*',
          },
        ],
      },
    },
  },
  functions: {
    main: {
      handler: `dist/main.handler`,
      events: [
        {
          http: {
            method: 'ANY',
            path: '/{any+}',
            cors: true,
          },
        },
      ],
    },
  },
  resources: {
    Resources: {
      ProductsTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: process.env.RECORDS_TABLE_NAME,
          AttributeDefinitions: [
            {
              AttributeName: 'id',
              AttributeType: 'S',
            },
          ],
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH',
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
    },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
