// *** GENERICS

interface AuthorProps {
    id: number,
    username: string,
}

interface CategoryProps {
    id: number,
    categoryTitle: string,
}

interface PostProps {
    id: number,
    title: string,
    desc: string,
    extra: AuthorProps[] | CategoryProps[]
}

interface NewPostProps<T> {
    id: number,
    title: string,
    desc: string,
    extra: T[]
}

const testMe: NewPostProps<String> = {
    id: 1,
    title: "Post Title",
    desc: "Post description akjdjawd a",
    extra: ["String 1", "String 3"],
}

interface BetterPostProps <T extends object> {
    id: number,
    title: string,
    desc: string,
    extra: T[]
}

const testMe2: BetterPostProps<{id: number, username: string}> = {
    id: 1,
    title: "Post Title",
    desc: "Post description akjdjawd a",
    extra: [{ id: 1, username: "Bob" }],
}

const testMe3: BetterPostProps<AuthorProps> = {
    id: 1,
    title: "Post Title",
    desc: "Post description akjdjawd a",
    extra: [{ id: 1, username: "Bob" }],
}