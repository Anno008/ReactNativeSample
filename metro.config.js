import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

module.exports = {
    resolver: {
        extensions: [".ts", ".tsx"],
        plugins: [new TsconfigPathsPlugin({})]
    },
};