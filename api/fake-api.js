import axios from 'axios';

export default class FakeAPI {
    getTest() {
        return 'text';
    }


    getCodeWeb() {
        let vm;
        if (process.client) {
            const host = window.location.hostname;
            switch (host) {
                case 'nuxtdemo.epmt.com.vn':
                    vm = 'TH1024';
                    break;
                case 'nuxtdemo1.epmt.com.vn':
                    vm = 'TH1025';
                    break;
                default:
                    vm = 'TH1025';
                    break;
            }
        }
        return vm;
    }

    async getTodo() {
        return await axios.get(
            `https://jsonplaceholder.typicode.com/todos`
        )
            .then((res) => {
                return { data: res.data }
            })
    }

    async getUser() {
        return await axios.get(
            `https://jsonplaceholder.typicode.com/users`
        )
            .then((res) => {
                return { data: res.data }
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