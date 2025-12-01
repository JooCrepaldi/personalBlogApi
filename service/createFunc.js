export async function create(model, where) {
    try {
        return await module.findAll(where)
    } catch (error) {
        console.error(`Error on find all: `, error)
    }
}