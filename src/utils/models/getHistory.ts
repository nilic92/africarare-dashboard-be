export const getHistory = (entity: any, property: string) => {
    const historyArray: {
        [key: string]: any;
        updatedAt: Date;
    }[] = [];

    historyArray.push({
        [property]: entity[property],
        updatedAt: entity.updatedAt
    })

    entity.history.forEach((historyEntity: any) => {
        if (historyArray[historyArray.length - 1][property] !== historyEntity[property]) {
            historyArray.push({
                [property]: historyEntity[property],
                updatedAt: historyEntity.updatedAt
            })
        }
    })


    return historyArray;
}