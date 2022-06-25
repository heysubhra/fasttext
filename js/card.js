function createCard(card, data) {
    var template = new ACData.Template(card);
    var cardPayload = template.expand({
        $root: data
    });
    var adaptiveCard = new AdaptiveCards.AdaptiveCard();
    adaptiveCard.parse(cardPayload);
    return adaptiveCard;
}