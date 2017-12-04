import main from '../main.js';


describe('main', () => {
    it('calls respond with the expected response', () => {
        const expected = { hello: '🌎' };
        const mockCallback = jest.fn();
        main(null, null, mockCallback);
        expect(mockCallback).toHaveBeenCalled();

        const actual = JSON.parse(mockCallback.mock.calls[0][1].body);
        expect(actual).toEqual(expected);
    });
});
