const translation = require('../../locales/other/translation.js');
const axios = require('axios');

module.exports = async function cat(interaction) {
    const localeFile = await translation(interaction.locale);
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        await interaction.reply({ files: [response.data[0].url], ephemeral: true });
    } catch (e) {
        console.error("\x1b[31m" + '[/CAT] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: localeFile.categories.fun.commands.cat.responses.defaultError, ephemeral: true });
    }
}