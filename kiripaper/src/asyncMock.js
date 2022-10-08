

const products = [
    {
        id: "1",
        name: "Washitape Azul",
        price: 2000,
        category: "washitape",
        img: "src={imagenes.img1}",
        stock: 10,
        description: "Set de 10 washitape decorativas azules variadas",
    },
    {
        id: "2",
        name: "Washitape Perritos",
        price: 2500,
        category: "washitape",
        img: "",
        stock: 5,
        description: "Set de 10 washitape decorativas perritos",
    },
    {
        id: "3",
        name: "Sticker ABC 123",
        price: 3000,
        category: "sticker",
        img: "",
        stock: 20,
        description: "Set numeros y letras coloridos. 48 patrones diferentes",
    },
    {
        id: "4",
        name: "Sticker Gatitos",
        price: 3000,
        category: "sticker",
        img: "",
        stock: 10,
        description: "Set lindos sticker gatitos kawai. 45 patrones diferentes",
    },
    {
        id: "5",
        name: "Planificador Semanal",
        price: 5000,
        category: "planificadores",
        img: "",
        stock: 30,
        description: "Sencillo y fácil de usar. Estilo: Neon",
    },
    {
        id: "6",
        name: "Registro Hábitos",
        price: 5000,
        category: "planificadores",
        img: "",
        stock: 5,
        description: "Planifica tu mes y lleva el control de tus tareas",
    },
    {
        id: "7",
        name: "Clips Cactus",
        price: 1500,
        category: "accesorios",
        img: "",
        stock: 10,
        description: "Lindos clips con estilo de cactus. 5 colores",
    },
    {
        id: "8",
        name: "Cutter Kawaii",
        price: 1500,
        category: "accesorios",
        img: "",
        stock: 5,
        description: "Lindos cutter para paginas. 1 diseño 3 colores",
    },

    
]

export const getProducts = (categoryId) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products )
        }, 1000)

    })
}

export const getProduct = (id) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id == id))
        }, 1000)

    })
}

