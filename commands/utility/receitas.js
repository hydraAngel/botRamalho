const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('receitas')
		.setDescription('Receitas do Mamalho.')
    .addStringOption(option => option.setName('receita').setDescription('Qual receita?').setRequired(true).addChoices({ name: 'Receita 0', value: '0'}
      )),
	
  async execute(interaction) {
    const receita = interaction.options.getString('receita');
    try {
      var data = fs.readFileSync(`receita-${receita}.txt`, 'utf-8');
      await interaction.reply(data.toString())
    } catch (e) {
      await interaction.reply(`Erro ao pegar arquivo ${e}`)
    }
  }
};