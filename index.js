const TelegramBot = require('node-telegram-bot-api')

const token = '7873617722:AAG7yZ9iJt7cgITJTM0iHnvSxwvZOi_lCGU'

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