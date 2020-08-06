import vue from "rollup-plugin-vue"
import includePaths from "rollup-plugin-includepaths"
import scss from 'rollup-plugin-scss'
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"

const externals = [
    'vue'
]
const pluginConfig = [
    includePaths( { paths: ['./','src']}),
    resolve(),
    commonjs(),
    scss({output:false}),
    vue({css:false})
]
export default [ 
    {
        input:'src/main.js',
        external:externals,
        output:{
            format:'esm',
            file:'./dist/components-d3.js'
        },
        plugins:pluginConfig
    },
    {
        input:'src/main.js',
        external:externals,
        output:{
            format:'umd',
            file:'./dist/components-d3.umd.js',
            name:"ImpVis/D3"
        },
        plugins:pluginConfig
    }
]