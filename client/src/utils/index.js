function getDayNow() {
    const now = new Date()

    return now.getMonth() + 1 + "/" + now.getDate() + "/" + now.getFullYear()
}

export {
    getDayNow
}