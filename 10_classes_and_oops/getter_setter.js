class User {
    constructor(email, password) {
        this .email = email
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}tejasw`
    }

    set password(value) {
        this._password = value
    }
}

const tejasw = new User("t@tejasw.ai", "abc")
console.log(tejasw.email);