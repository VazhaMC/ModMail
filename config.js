module.exports = {
    client: {
        token: '', // ← Your bot token (.env IS RECOMMENDED)
        id: '1223350694006751272' // ← Your bot ID
    },
    modmail: {
        guildId: '1198664775064883341 ', // ← Your server ID
        categoryId: '1223352842916597930', // ← The modmail category ID
        staffRoles: ['1223353104708276294'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: 'https://discord.com/api/webhooks/1223351173512171592/_lqEJh_a3_XINDca9ZCt6q3Manfy5fcIRD7Rsoh5gbBaRjYAkFmKqPKq3xxHhpn4LCRh' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};
