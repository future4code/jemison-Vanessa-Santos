
type user = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}

export const users: user[] = [
    {
        id: "1",
        name: "Vanessa",
        phone: 15839524,
        email: "vane@labenu.com",
        website: "https://www.youtube.com"
    },
    {
        id: "2",
        name: "Ana",
        phone: 759826584,
        email: "ana@labenu.com",
        website: "https://www.youtube.com"
    },
    {
        id: "3",
        name: "Arthur",
        phone: 7896482108,
        email: "arthur@labenu.com",
        website: "https://www.youtube.com"
    },
    {
        id: "4",
        name: "Kewliton",
        phone: 847956281,
        email: "kewl@labenu.com",
        website: "https://www.youtube.com"
    },
]

type posts = {
    userId: string,
    id: string,
    title: string,
    body: string,

}

export const postagens: posts[] = [
    
    {
        userId: "1",
        id:" 1",
        title: "Tudo posso basta não desistir",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis"
    },
    {
        userId: "2",
        id:" 2",
        title: "A beleza de tudo esta na natureza",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    },
    {
        userId: "3",
        id: "3",
        title: "Vamos correr e brincar",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    },
    {
        userId: "4",
        id: "4",
        title: "É isso ai!",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    },
    {
        userId:" 4",
        id: "5",
        title: "É isso ai!",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    },
    {
        userId:" 4",
        id: "5",
        title: "É isso ai!",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto  quo et"
    }

]