module.exports = {
    client: {
        token: 'put ur discord bot token here', // ← Your bot token (.env IS RECOMMENDED)
        id: 'put ur damn discord bot client id here' // ← Your bot ID
    },
    modmail: {
        guildId: 'your discord server id ', // ← Your server ID
        categoryId: 'put ur category ID here', // ← The modmail category ID
        staffRoles: ['Put the admin/staff role id here'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: 'put ur foking discord channel webhook link here' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};