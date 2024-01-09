
const PRODUCTS = ["ahmet","mehmet","mahmut123","cabbbbarrr"]

const USERS = [
    {
        userName : "ahmet",
        isActive : true
    },
    {
        userName : "hamza",
        isActive : false
    },
    {
        userName : "salih",
        isActive : false
    },
    {
        userName : "huseyin",
        isActive : true
    }
]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length >5 )
console.log(NEW_PRODUCTS)

const NEW_USERS = USERS.filter(item => item.isActive)
console.log(NEW_USERS)
