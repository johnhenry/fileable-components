import babel from 'rollup-plugin-babel';
import hashbang from 'rollup-plugin-hashbang';
const plugins = [
    babel({
        exclude: 'node_modules/**',
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    }),
    hashbang()
];

export default [{
    file: 'dist/bin/fileable.js',
    input: 'src/cli/index.js',
    plugins: [...plugins, hashbang()]
}, {
    file: 'dist/lib/index.js',
        input: 'src/index.js',
    format:'cjs'
}].map(({
            file,
            format = 'cjs',
            input,
            plugins: plugins
        }) => ({
        input,
        plugins,
        output: {file, format}
}));