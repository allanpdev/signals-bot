const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Testandoooo')
})

bot.onText(/\/sinal/, (msg) => {
    const sinal = `
        Sinal de compra
        Alvo: 75
    `;
    bot.sendMessage(msg.chat.id, sinal, {parse_mode: 'Markdown'})
})