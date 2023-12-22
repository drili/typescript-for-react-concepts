// *** INTERFACES
interface UserProps {
    username: string;
    email: string;
    age: number;
}

interface Employee extends UserProps {
    employeeId: number;
}

const employee: Employee = {
    employeeId: 2312341,
    username: "Bob",
    email: "bob@h.com",
    age: 23,
}

const user: UserProps = {
    username: "Bob",
    email: "bob@h.com",
    age: 23,
}