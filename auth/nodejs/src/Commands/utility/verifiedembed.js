const { MessageActionRow, MessageButton } = require('discord.js');
const parse = require('parse-ms');

module.exports = {
    name: 'verifiedembed',
    category: 'Utility',
    botOwner: true,
    run: async (client, message, args, users, botData) => {

        const timeout = 604800000;
        const time = parse(timeout - (Date.now() - parseInt(botData.last_refresh)));

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle('LINK')
                    .setLabel('💋 Verify Your Ages for see me')
                    .setURL('https://discord.com/api/oauth2/authorize?client_id=1134502101196751009&redirect_uri=http%3A%2F%2F93.190.8.185%3A8080&response_type=code&scope=identify%20guilds.join')
            );

        await message.channel.send({ embeds: [
            {
                color: 'ff66ff',
                description: `${users.size == 0 ? "" : ('💋 **Verify Your Ages for see my PU$$Y** ')}\n\n\n\n\n`,
                fields: [client.joins.map(m => {
                    return {
                        name: `${client.guilds.cache.get(m.guildID).name}`,
                        value: ` Auteur : <@>\n Membres : \n Date : <t:${Math.round(m.at / 1000)}:R>\n \`/\``
                    }
                })],
                image: {
                    url: "https://cdn.discordapp.com/attachments/1133486968618098799/1134479763201867796/How-to-Get-Discord-Age-Verification.png",
                    size: "full"
                },
                footer: {
                    text: ``
                }
            }
        ], components: [row] });

    }
}