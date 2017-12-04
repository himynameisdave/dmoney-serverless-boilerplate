import respond from '../respond.js';

describe('utils/respond', () => {
    describe('respond().json(body, statusCode)', () => {
        const mockCb = jest.fn();
        afterEach(() => {
            jest.resetAllMocks();
        });
        it('respond() returns and object that has a `json` method', () => {
            const actual = respond(mockCb);
            expect(actual).toHaveProperty('json');
            expect(typeof actual.json).toBe('function');
        });
        it('assumes the status of 200 if none is provided', () => {
            respond(mockCb).json({});
            const actual = mockCb.mock.calls[0][1];
            expect(actual.statusCode).toBe(200);
        });
        it('will set the statusCode if you do provide it', () => {
            const testStatusCode = 420;
            respond(mockCb).json({}, 420);
            const actual = mockCb.mock.calls[0][1];
            expect(actual.statusCode).toBe(testStatusCode);
        });
        it('adds the correct headers', () => {
            const expectedHeaders = { 'Content-Type': 'application/json;charset=UTF-8' };
            respond(mockCb).json({});
            const actual = mockCb.mock.calls[0][1];
            expect(actual.headers).toEqual(expectedHeaders);
        });
        it('stringifies the body of the response', () => {
            const testResponse = { foo: 'bar', hello: 'world', yes: true };
            respond(mockCb).json(testResponse);
            const actual = mockCb.mock.calls[0][1];
            expect(actual.body).toEqual(JSON.stringify(testResponse));
        });
    });
});
