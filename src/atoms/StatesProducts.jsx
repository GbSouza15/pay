import {atom} from 'jotai'

const localNames = JSON.parse(localStorage.getItem('names'))
const localPrice = JSON.parse(localStorage.getItem('price'))
const localImg = JSON.parse(localStorage.getItem('img'))

export const nameProduct = atom(localNames || [])
export const priceProduct = atom(localPrice || [])
export const imgProduct = atom(localImg || [])

export const userCardNumber = atom('')
export const userNameCard = atom('')
export const userDateCard = atom('')
export const userCardCvc = atom('')


