const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
      error(`Nenhum comando conhecido como ${interaction.commandName}.`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "Houve um erro rodando esse comando",
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "Teve um erro rodando esse comando",
          ephemeral: true,
        });
      }
    }
  },
};
