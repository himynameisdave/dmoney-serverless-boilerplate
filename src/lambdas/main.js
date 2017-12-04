import respond from '../utils/respond.js';


const main = (event, context, callback) => respond(callback).json({
    hello: '🌎',
}, 200);

export default main;
