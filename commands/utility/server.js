const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Manda info sobre o server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`Esse server se chama ${interaction.guild.name} e tem ${interaction.guild.memberCount} membros.`);
	},
};
