const cryptoRender = ({ markets }) => {
    return markets.map((crypto) => {
      const {
        exchange_id,
        symbol,
        price,
        spread,
        change_24h,
        volume_24h,
        updated_at,
      } = crypto;
  
      return {
        exchangeId: exchange_id,
        symbol,
        price,
        spread,
        "24hChange": change_24h,
        "24hVolume": volume_24h,
        updated_at,
      };
    });
  };
  
  module.exports = {
    cryptoRender,
  };