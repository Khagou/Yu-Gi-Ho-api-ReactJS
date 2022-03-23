
async function getAllCards(num = 5, sort= 'new', offset = 0, language = 'fr'){
    const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${num}&offset=${offset}&language=${language}&sort=${sort}`)
    return await response.json();
};

async function searchInCards(fname = '', language = 'fr'){
    const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${fname}&language=${language}`)
    return await response.json();
};

async function findByID(id, language = 'fr'){
    const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}&language=${language}`)
    return await response.json();
}
export {getAllCards, searchInCards, findByID};