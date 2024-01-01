const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Manda pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
