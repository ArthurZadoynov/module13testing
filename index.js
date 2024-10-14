export async function fetchUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  console.table(users, ['name']); // вывод массива ввиде таблицы с именами. Визуально лучше смотрится, чем просто список имен
  // 2-й вариант вывести все имена в консоль
  // users.forEach(user => { // перебираем все элементы массива
  //   console.log(user.name); //вывод всех имен
  // });   
  return users
}
fetchUsers()
