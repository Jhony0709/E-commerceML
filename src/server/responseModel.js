const author = {
    "name": "Jhony",
    "lastname": "Quiñones"
};

const itemResponseModel = (data) => {
    const items = data.results.map(item => {
        return {
            "id": item.id,
            "title": item.title,
            "price": {
                "currency": item.currency_id,
                "amount": String(item.price).split(".")[0],
                "decimals": String(item.price).split(".").length > 1 ? "."+String(item.price).split(".")[1] : null
            },
            "picture": item.thumbnail,
            "condition": item.condition,
            "free_shipping": item.shipping.free_shipping
        }
    });

    let categories = [];

    if (data.filters.length) {
        data.filters.map(e => {categories.push(e.name)});
    }

    return {
        author: author,
        categories: categories,
        items: items
    }
}

const detailResponseModel = (detail, description) => {

    return {
        author: author,
        item: {
            "id": detail.id,
            "title": detail.title,
            "price": {
                "currency": detail.currency_id,
                "amount": String(detail.price).split(".")[0],
                "decimals": String(detail.price).split(".").length > 1 ? "."+String(detail.price).split(".")[1] : null
            },
            "picture": detail.pictures[0].url,
            "condition": detail.condition,
            "free_shipping": detail.shipping.free_shipping,
            "sold_quantity": detail.sold_quantity,
            "description": description.plain_text
        }
    }
}

export {itemResponseModel, detailResponseModel};