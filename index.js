const Binance = require('node-binance-api');

const binance = new Binance();

(async () => {
  try {
    const prices = await binance.futuresPrices();

    // Filtrar apenas os tokens desejados
    const tokensDesejados = ['BTCUSDT', 'ETHUSDT', '1000PEPEUSDT', 'PEPE_USDT', 'SOLUSDT', 'BNBUSDT', 'GALAUSDT'];

    console.log('Preços selecionados:');
    tokensDesejados.forEach((symbol) => {
      if (prices[symbol]) {
        console.log(`${symbol}: ${prices[symbol]}`);
      } else {
        console.log(`${symbol}: não encontrado`);
      }
    });
  } catch (err) {
    console.error('Erro ao buscar preços:', err);
  }
})();
