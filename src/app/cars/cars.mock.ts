export const cars: Car[] = [{
    id: 1,
    brand: 'Ford',
    model: 'Grand Torino',
    year: 1972,
    hp: 560,
    price: 52000,
    img: '../../assets/grand_torino.jpg'

}, {
    id: 2,
    brand: 'Dodge',
    model: 'Charger',
    year: 1969,
    hp: 580,
    price: 60000,
    img: '../../assets/car5.jpg'


}, {
    id: 3,
    brand: 'Plymouth',
    model: 'GTX',
    year: 1971,
    hp: 525,
    price: 70000,
    img: '../../assets/plymouth_gtx.jpg'
}, {
    id: 4,
    brand: 'Pontiac',
    model: 'GTO Judge',
    year: 1969,
    hp: 510,
    price: 58000,
    img: '../../assets/pontiac_gto2.jpg'
}, {
    id: 5,
    brand: 'Pontiac',
    model: 'Firebird',
    year: 1964,
    hp: 460,
    price: 50000,
    img: '../../assets/pontiac_firebird.jpg'
}, {
    id: 6,
    brand: 'Chevrolett',
    model: 'Corvette',
    year: 1963,
    hp: 496,
    price: 68000,
    img: '../../assets/chevrolet_corvete.jpg'

}, {
    id: 7,
    brand: 'Chevrolet',
    model: 'Chevelle',
    year: 1970,
    hp: 525,
    price: 40000,
    img: '../../assets/chevrolet_chevelle.jpg'
}, {
    id: 8,
    brand: 'Ford',
    model: 'Thunderbird',
    year: 1967,
    hp: 500,
    price: 73000,
    img: '../../assets/ford_thunderbird.jpg'
}]

export interface Car {
    id: number
    brand: string
    model: string
    year: number
    hp: number
    price: number
    img: string
}