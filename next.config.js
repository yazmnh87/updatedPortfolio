const withImages = require('next-images')

module.exports = withImages({
webpack: (config, {dev}) => {
    return config;
}
});