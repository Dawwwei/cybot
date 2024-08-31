const { SlashCommandBuilder } = require('discord.js');

const work = require('./work.js');
const balance = require('./balance.js');
const addMoney = require('./add-money.js');

const locales = {
    de: require('../../locales/de.json'),
    fr: require('../../locales/fr.json'),
    pt: require('../../locales/pt-BR.json'),
    es: require('../../locales/es-ES.json'),
    tr: require('../../locales/tr.json'),
    ru: require('../../locales/ru.json')
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('economy')
        .setNameLocalizations({
            de: locales.de.categories.economy.name,
            fr: locales.fr.categories.economy.name,
            "pt-BR": locales.pt.categories.economy.name,
            "es-ES": locales.es.categories.economy.name,
            tr: locales.tr.categories.economy.name,
            ru: locales.ru.categories.economy.name
        })
        .setDescription('Economy category commands')
        .setDescriptionLocalizations({
            de: locales.de.categories.economy.description,
            fr: locales.fr.categories.economy.description,
            "pt-BR": locales.pt.categories.economy.description,
            "es-ES": locales.es.categories.economy.description,
            tr: locales.tr.categories.economy.description,
            ru: locales.ru.categories.economy.description
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('work')
                .setNameLocalizations({
                    de: locales.de.categories.economy.commands.work.name,
                    fr: locales.fr.categories.economy.commands.work.name,
                    "pt-BR": locales.pt.categories.economy.commands.work.name,
                    "es-ES": locales.es.categories.economy.commands.work.name,
                    tr: locales.tr.categories.economy.commands.work.name,
                    ru: locales.ru.categories.economy.commands.work.name
                })
                .setDescription("Work to earn money")
                .setDescriptionLocalizations({
                    de: locales.de.categories.economy.commands.work.description,
                    fr: locales.fr.categories.economy.commands.work.description,
                    "pt-BR": locales.pt.categories.economy.commands.work.description,
                    "es-ES": locales.es.categories.economy.commands.work.description,
                    tr: locales.tr.categories.economy.commands.work.description,
                    ru: locales.ru.categories.economy.commands.work.description
                })
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('balance')
                .setNameLocalizations({
                    de: locales.de.categories.economy.commands.balance.name,
                    fr: locales.fr.categories.economy.commands.balance.name,
                    "pt-BR": locales.pt.categories.economy.commands.balance.name,
                    "es-ES": locales.es.categories.economy.commands.balance.name,
                    tr: locales.tr.categories.economy.commands.balance.name,
                    ru: locales.ru.categories.economy.commands.balance.name
                })
                .setDescription("balance the amount of money of a specific member")
                .setDescriptionLocalizations({
                    de: locales.de.categories.economy.commands.balance.description,
                    fr: locales.fr.categories.economy.commands.balance.description,
                    "pt-BR": locales.pt.categories.economy.commands.balance.description,
                    "es-ES": locales.es.categories.economy.commands.balance.description,
                    tr: locales.tr.categories.economy.commands.balance.description,
                    ru: locales.ru.categories.economy.commands.balance.description
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: locales.de.categories.economy.commands.balance.options.member.name,
                            fr: locales.fr.categories.economy.commands.balance.options.member.name,
                            "pt-BR": locales.pt.categories.economy.commands.balance.options.member.name,
                            "es-ES": locales.es.categories.economy.commands.balance.options.member.name,
                            tr: locales.tr.categories.economy.commands.balance.options.member.name,
                            ru: locales.ru.categories.economy.commands.balance.options.member.name
                        })
                        .setDescription('The member you want to balance the amount of money')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.economy.commands.balance.options.member.description,
                            fr: locales.fr.categories.economy.commands.balance.options.member.description,
                            "pt-BR": locales.pt.categories.economy.commands.balance.options.member.description,
                            "es-ES": locales.es.categories.economy.commands.balance.options.member.description,
                            tr: locales.tr.categories.economy.commands.balance.options.member.description,
                            ru: locales.ru.categories.economy.commands.balance.options.member.description
                        })
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('add-money')
                .setNameLocalizations({
                    de: locales.de.categories.economy.commands.addmoney.name,
                    fr: locales.fr.categories.economy.commands.addmoney.name,
                    "pt-BR": locales.pt.categories.economy.commands.addmoney.name,
                    "es-ES": locales.es.categories.economy.commands.addmoney.name,
                    tr: locales.tr.categories.economy.commands.addmoney.name,
                    ru: locales.ru.categories.economy.commands.addmoney.name
                })
                .setDescription("Add money to a specific member")
                .setDescriptionLocalizations({
                    de: locales.de.categories.economy.commands.addmoney.description,
                    fr: locales.fr.categories.economy.commands.addmoney.description,
                    "pt-BR": locales.pt.categories.economy.commands.addmoney.description,
                    "es-ES": locales.es.categories.economy.commands.addmoney.description,
                    tr: locales.tr.categories.economy.commands.addmoney.description,
                    ru: locales.ru.categories.economy.commands.addmoney.description
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: locales.de.categories.economy.commands.addmoney.options.member.name,
                            fr: locales.fr.categories.economy.commands.addmoney.options.member.name,
                            "pt-BR": locales.pt.categories.economy.commands.addmoney.options.member.name,
                            "es-ES": locales.es.categories.economy.commands.addmoney.options.member.name,
                            tr: locales.tr.categories.economy.commands.addmoney.options.member.name,
                            ru: locales.ru.categories.economy.commands.addmoney.options.member.name
                        })
                        .setDescription('The member you want to add money')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.economy.commands.addmoney.options.member.description,
                            fr: locales.fr.categories.economy.commands.addmoney.options.member.description,
                            "pt-BR": locales.pt.categories.economy.commands.addmoney.options.member.description,
                            "es-ES": locales.es.categories.economy.commands.addmoney.options.member.description,
                            tr: locales.tr.categories.economy.commands.addmoney.options.member.description,
                            ru: locales.ru.categories.economy.commands.addmoney.options.member.description
                        })
                        .setRequired(true)
                )
                .addIntegerOption(option =>
                    option
                        .setName('amount')
                        .setNameLocalizations({
                            de: locales.de.categories.economy.commands.addmoney.options.amount.name,
                            fr: locales.fr.categories.economy.commands.addmoney.options.amount.name,
                            "pt-BR": locales.pt.categories.economy.commands.addmoney.options.amount.name,
                            "es-ES": locales.es.categories.economy.commands.addmoney.options.amount.name,
                            tr: locales.tr.categories.economy.commands.addmoney.options.amount.name,
                            ru: locales.ru.categories.economy.commands.addmoney.options.amount.name
                        })
                        .setDescription('The amount of money you want to add')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.economy.commands.addmoney.options.amount.description,
                            fr: locales.fr.categories.economy.commands.addmoney.options.amount.description,
                            "pt-BR": locales.pt.categories.economy.commands.addmoney.options.amount.description,
                            "es-ES": locales.es.categories.economy.commands.addmoney.options.amount.description,
                            tr: locales.tr.categories.economy.commands.addmoney.options.amount.description,
                            ru: locales.ru.categories.economy.commands.addmoney.options.amount.description
                        })
                        .setRequired(true)
                )
        )
        .setDMPermission(false),

    async execute(interaction) {
        if (interaction.commandName === 'economy') {
            const subcommand = interaction.options.getSubcommand();
            switch (subcommand) {
                case 'work':
                    await work(interaction);
                    break;
                case 'balance':
                    await balance(interaction);
                    break;
                case 'add-money':
                    await addMoney(interaction);
                    break;
            }
        }
    }
}