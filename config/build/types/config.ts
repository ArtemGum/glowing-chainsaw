import webpack from 'webpack';

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: webpack.Configuration['mode']
    port: number
}

export interface BuildOptions {
    mode: webpack.Configuration['mode']
    paths: BuildPaths
    isDev: boolean
    port: number
}
