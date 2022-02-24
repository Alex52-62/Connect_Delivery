//export const PUBLIC_URL = "https://fakestoreapi.com/products";

export const REQUEST_STATUS = {
    IDLE: 0,
    PENDING: 1,
    SUCCESS: 2,
    FAILURE: 3,
};

export const couriers = [
    {
        name: 'Ivan',
        id: Date.now(),
        status: 'online'
    },
    {
        name: 'Mikhail',
        id: Date.now(),
        status: 'offline'
    },
    {
        name: 'Sergey',
        id: Date.now(),
        status: 'в процессе доставки'
    },
    {
        name: 'Leonid',
        id: Date.now(),
        status: 'offline'
    },
    {
        name: 'Miron',
        id: Date.now(),
        status: 'в процессе доставки'
    },
    {
        name: 'Alex',
        id: Date.now(),
        status: 'online'
    },
];

export const couriersOnline = couriers.filter((courier) => {
    return courier.status === 'online'

})
export const couriersWork = couriers.filter((courier) => {
    return courier.status === 'в процессе доставки'

})
export const couriersOffline = couriers.filter((courier) => {
    return courier.status === 'offline'

})
