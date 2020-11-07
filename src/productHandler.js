'use strict';

const {
  findGameById,
  allGames
} = require('./services/gameService');

module.exports.findAll = async event => {
  try {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(await allGames(), null, 2),
    };
  } catch (e) {
    return {
      statusCode: 520,
      body: e.message || 'Unknown Error',
    };
  }
};

module.exports.findById = async event => {
  try {
    const id = Number(event.pathParameters.id);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(await findGameById(id), null, 2),
    }
  } catch (e) {
    return {
      statusCode: 520,
      body: e.message || 'Unknown Error',
    };
  }
};
