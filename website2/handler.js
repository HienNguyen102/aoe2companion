'use strict';

module.exports.hello3 = async event => {
  console.log(12345);
  // throw new Error('lol');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v5.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
