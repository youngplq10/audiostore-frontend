export interface genre{
    audiobooks: {
        added_at_date: Date,
        audioLink: string,
        author: string,
        coverLink: string,
        description: string,
        duration: number,
        id: {
            timestamp: number,
            date: Date
        },
        published_at_date: Date,
        title: string,
        reviews: {
            id: {
                timestamp: number,
                date: Date
            },
            reviewBody: string,
            stars: number
        }[]
    }[];
    name: string,
    id: {
        timestamp: number,
        date: Date
    }
}