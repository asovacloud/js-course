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
    return storage.current_todos.length;
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

const delete_todo_item = (id) => {
    if (!id && id !== 0) return console.log("Передайте id удаляемой задачи.");

    storage.current_todos.splice(id, 1);

    let fix_id = arr => {
        arr.forEach( (item, i) => storage.current_todos[i].id = i );
        return null;
    }

    console.log( fix_id( storage.current_todos ) );

    return storage.current_todos;

}

/**
 *
 * @param {*} id
 * @param {*} title
 * @param {*} text
 */
const edit_todo_item = (id, title, text) => {
    if (!id && id !== 0) return console.log("Введите ID.");
    if (!title) return console.log("Введите заголовок задачи.");
    if (!text) return console.log("Введите текст задачи.");

    storage.current_todos[id].title = title;
    storage.current_todos[id].text = text;

    return storage.current_todos;
}