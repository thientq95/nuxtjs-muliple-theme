import axios from 'axios';
export default class FakeAPI {
    getTest() {
        return 'text';
    }

    async getTodo() {
        return  await axios.get(
            `https://jsonplaceholder.typicode.com/todos`
        )
        .then((res) => {
            return { data: res.data}
        })
    }

    async getUser() {
        return await axios.get(
            `https://jsonplaceholder.typicode.com/users`
        )
        .then((res) => {
            return { data: res.data}
        })
    }

    async getUserDirect() {
        const { users } = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
        )
        .then(res => res);
        return users;
    }
}