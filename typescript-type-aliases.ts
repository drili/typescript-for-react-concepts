let func = (user: { username: string, age: number, phone?: string }) => {
    console.log(user.username);
}

// TYPE ALIASES
type UserType = {
    username: string;
    age: number;
    phone?: string;
}

let funcWithAlias = (user: UserType) => {
    console.log(user.age);
}

type myFunc = (a: number, b: string) => void

let write : myFunc = (num, str) => {
    console.log(num + " times " + str);
}

type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light"
}

const userWithTheme: UserType2 = {
    username: "John",
    age: 44,
    theme: "dark"
}