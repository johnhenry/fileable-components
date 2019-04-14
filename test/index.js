const tape = require('tape');
const {createComponent, FILEABLE_COMPONENT} = require('..');
tape('test createComponent', async ({ok, end }) => {
    const func = async function*(){};
    createComponent(func);
    ok(func[FILEABLE_COMPONENT] === true, 'createComponent should set \'FILEABLE COMPONENT\' to true' )
    end();
});
