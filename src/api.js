import { data as contacts } from './contacts.json'
import { data as recentContacts } from './recent-contact.json'

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const contactsCats = contacts.sort((a, b) => {
    if (a.firstName && b.firstName) {
        if (a.firstName.toUpperCase() < b.firstName.toUpperCase()) {
            return -1;
        }
        if (a["firstName"].toUpperCase() > b["firstName"].toUpperCase()) {
            return 1;
        }
    }
    return 0;
})

const categories = letters.reduce((res, item) => {
    const category = contactsCats.filter(
        cntct => cntct.firstName && cntct.firstName
            .split("")[0]
            .toUpperCase() === item)
    res = {...res, [item]: category}
    return res;
}, {})
// const categories = letters.reduce((res, item) => {
//     const category = contactsCats.filter(
//         cntct => cntct.firstName && cntct.firstName
//             .split("")[0]
//             .toUpperCase() === item)
//     let ctg = {}
//     ctg[item] = category;
//     res.push(ctg)
//     return res;
// }, [])

export { categories, recentContacts };