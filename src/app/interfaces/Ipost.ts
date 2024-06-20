export interface IPost {
    id: Number,
    title: string,
    body: string,
    tags: string,
    views: number,
    userId: number,
    reactions?: reactions | string 
}

export interface reactions {
    likes: Number,
    dislikes: Number,
}
