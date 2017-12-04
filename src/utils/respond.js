/**
 *    Meant to be a wrapper for generic kinds of responses
 *
 *    @param {function} cb - callback that is provided as the 3rd param when a lambda is invoked
 *    @return {object} - object with different types of generic responses
 */
const respond = (cb) => ({
    json: (body, statusCode = 200) => {
        cb(null, {
            statusCode,
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            body: JSON.stringify(body),
        });
    },
});

export default respond;
