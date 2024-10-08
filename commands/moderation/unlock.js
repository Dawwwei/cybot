const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function unlockChannel(interaction) {
    const localeFile = await translation(interaction.locale);
    const channel = interaction.options.getChannel('channel') || interaction.channel;
    const channelPermissions = channel.permissionOverwrites.cache.get(interaction.guild.id);
    const responses = localeFile.categories.moderation.commands.unlock.responses;
    const defaultError = responses.defaultError.replace('{{channel}}', `<#${channel.id}>`);

    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageChannels)) {
        const message = await permissions(interaction.locale, 'MANAGE_CHANNELS');
        return interaction.reply({ content: message, ephemeral: true });
    }
    
    if (channelPermissions && !channelPermissions.deny.has(PermissionFlagsBits.SendMessages)) {
        const channelUnlocked = responses.channelUnlocked.replace('{{channel}}', `<#${channel.id}>`);
        return interaction.reply({ content: channelUnlocked, ephemeral: true });
    }

    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.ManageChannels)) {
        const noPermissionsError = responses.noPermissionsError.replace('{{channel}}', `<#${channel.id}>`);
        return interaction.reply({ content: noPermissionsError, ephemeral: true });
    }

    try {
        await channel.permissionOverwrites.edit(interaction.guild.id, { SendMessages: null }).then(async () => {
            const content = responses.success.replace('{{channel}}', `<#${channel.id}>`);
            await interaction.reply({ content: content, ephemeral: true })
        })
    } catch (e) {
        console.error("\x1b[31m" + '[/UNLOCK] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}