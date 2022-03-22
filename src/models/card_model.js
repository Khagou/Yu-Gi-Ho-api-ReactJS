class Ygo{

}

class Card {
    id = 0;
    name = '';
    type = '';
    description = '';
    race = '';
    imageMedium = '';
    imageSmall = '';
    cardmarketPrice = '';
}


function toModel (json){
    const ygo = new Ygo ();
    ygo.tableRows = json['meta']['total_rows'];
    const listCards = json['data'];
    ygo.cards = listCards.map(obj => {
        const card = new Card();
        card.id = obj['id'] ?? '';
        card.name = obj['name'] ?? '';
        card.type = obj['type'] ?? '';
        card.description = obj['desc'] ?? '';
        card.race = obj['race'] ?? '';
        const cardImages = obj['card_images'] ?? [];
        const cardPrices = obj['card_prices'] ?? [];
        if (cardImages.length > 0) {
            card.imageMedium = cardImages[0]['image_url'] ?? '';
            card.imageSmall = cardImages[0]['image_url_small'] ?? '';
        }
        if (cardPrices.length > 0){
            card.cardmarketPrice = cardPrices[0]['cardmarket_price'] ?? '';
        }
        
        return card;
    });
    return ygo;
}

export {toModel, Card, Ygo};
