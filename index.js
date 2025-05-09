const TelegramBot = require('node-telegram-bot-api')
const Binance = require('node-binance-api')

const binance = new Binance().options({
    APIKEY: 'ixprfcTkudGYjwGDVtuYDiQqFv79H0DQXyV09iMKqf2SDy5jaRAUY7hAc6qdMO4Q',
    APISECRET: 'o3rAu3O3jn4icCXGSYVRDGynhYX5Q1ow1zt3KbbOZaaATb0vFfYRgqtYSZ8hxcGq'
})

binance.prices('BTCUSDT', (error, ticker) => {
    if(error){
        console.error('Erro ao consultar preço: ', error.body)
    } else{
        console.log('Preço atual: ', ticker.BTCUSDT)
    }
})

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