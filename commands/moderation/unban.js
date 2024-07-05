const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function unban(interaction) {
    const localeFile = await translation(interaction.locale);
    const id = interaction.options.getString('id');
    const invalidIDError = localeFile.categories.moderation.commands.unban.responses.invalidIDError;
    const fetched = await interaction.guild.bans.fetch(id).catch(async (e) => {
        console.error("\x1b[31m" + '[/UNBAN] ' + e + "\x1b[0m");
        return interaction.reply({ content: invalidIDError, ephemeral: true });
    });
    const defaultError = localeFile.categories.moderation.commands.unban.responses.defaultError.replace('{{member}}', `<@${fetched.user.id}>`).replace('{{guild}}', interaction.guild.name);

    if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) {
        const message = await permissions(interaction.locale, 'BAN_MEMBERS');
        return interaction.reply({ content: message, ephemeral: true });
    }

    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.BanMembers)) {
        const noPermissionsError = localeFile.categories.moderation.commands.unban.responses.noPermissionsError.replace('{{member}}', `<@${fetched.user.id}>`).replace('{{guild}}', interaction.guild.name);
        return interaction.reply({ content: noPermissionsError, ephemeral: true });
    }

    const reason = interaction.options.getString('reason') ?? localeFile.categories.common.noReason;
    const reasonEnUS = interaction.options.getString('reason') || "No reason provided";

    try {
        await interaction.guild.members.unban(id, reasonEnUS).then(async () => {
            console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY UNBANNED <<@${fetched.user.username}>> FROM <<${interaction.guild.name}>> FOR ${reasonEnUS}.` + "\x1b[0m");
            const content = localeFile.categories.moderation.commands.unban.responses.success.replace('{{member}}', `@${fetched.user.username}`).replace('{{guild}}', interaction.guild.name).replace('{{reason}}', reason);
            await interaction.reply({ content: content, ephemeral: true });
        });
    } catch (e) {
        if (e.name === "DiscordAPIError[10026]") {
            return interaction.reply({ content: invalidIDError, ephemeral: true });
        }
        console.error("\x1b[31m" + '[/UNBAN] ' + e + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}