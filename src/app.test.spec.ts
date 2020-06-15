export default (t) => {
    t.test('some grouped assertions', (t) => {
        t.ok(true, 'true is truthy');

        t.test('a group inside another one', (t) => {
            t.equal('bar', 'bar', 'that both string are equivalent');
            t.isNot({}, {}, 'those are not the same reference');
        });
    });
};
