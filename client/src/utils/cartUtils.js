function computeCartQuantity(cart) {
    return cart.reduce((totalQuantity, currentItem) => totalQuantity + currentItem.quantity, 0)
}

function computeTotalPay(cart) {
    return cart.reduce((totalQuantity, currentItem) => totalQuantity + currentItem.quantity * currentItem.unitPrice, 0)
}

function getLunchesBrief(cart) {
    let brief = cart.reduce((brief, currentItem) => brief + currentItem.productName + " " + "(" + currentItem.quantity + "), ", "")
    brief = brief.substring(0, brief.length - 2)

    return brief
}



export { computeCartQuantity, computeTotalPay, getLunchesBrief }


