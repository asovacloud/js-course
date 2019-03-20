/**
 * TODOS
 * 1. Добавление задачи
 * 2. Удаление задачи
 * 3. Редактирование задачи
 */

/**
 * Одна задача это объект из следующих полей
 * id - произвольная уникальная строка
 * title - заголовок задачи
 * text - текст задачи
 */

let storage = {
    current_todos: [],
    deleted_todos: []
};

/**
 * generate_id - создает произвольную строку 
 * @returns {string} - новый id
 */
const generate_id = () => {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = "";

    for (let i = 0; i < 10; i++) {
        let index = Math.floor(Math.random() * words.length);
        id += words[index];
    }

    return id;
}

/**
 * add_new_todo - функция для добавления новой задачи
 * @param {String} title - заголовок задачи 
 * @param {String} text - текст задачи
 * @returns {void}
 */
const add_new_todo = (title, text) => {
    if (!title) return console.log("Введите заголовок задачи.");
    if (!text) return console.log("Введите текст задачи.");

    const new_todo = { title, text, id: generate_id() };

    storage.current_todos.push(new_todo);

    return storage.current_todos;
}

/**
 * delete_todo_item - удаление одной задачи
 * @param {sting} id 
 */
const delete_todo_item = id => {
    if (!id) return console.log("Передайте id удаляемой задачи.");

    storage.current_todos = storage.current_todos.filter(todo => todo.id !== id);

    return storage.current_todos;
}

/**
 * 
 * @param {*} id 
 * @param {*} title 
 * @param {*} text 
 */
const edit_todo_item = (id, title, text) => {
    
}