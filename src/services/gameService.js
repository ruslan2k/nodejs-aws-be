const games = require('../models/games');

/**
 * Find game by id
 */
module.exports.findGameById = (id) => {
    // Added delay for remote db simulation
    return new Promise((resolve, reject) => {
        const game = games.find(game => game.id === id);
        if (!game) {
            reject(new Error(`Error: Can't find game by id: ${id}`));
        }
        setTimeout(() => resolve(game), 500);
    });
}

/**
 * Get all games
 */
module.exports.allGames = () => {
    // Added delay for remote db simulation
    return new Promise((resolve) => {
        setTimeout(() => resolve(games), 500);
    });
}
