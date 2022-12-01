export default class ErrorRepository {
    constructor() {
        this.error = new Map();
        this.error.set(101, 'Имя недоступно');
        this.error.set(202, 'Некорретное значение имени');
        this.error.set(303, 'Данные запроса не найдены');
        this.error.set(404, 'Потеряно соединение');
    }

    translate(code) {
        if (!this.error.has(code)) {
            return 'Unknown error';
        } return this.error.get(code);
    }
}   

