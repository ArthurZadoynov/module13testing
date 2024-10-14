import { expect } from "chai"; //импорт функции "стиля" expect из библиотеки chai для сравнения значений
import { fetchUsers } from '../index.js'; //подключаем функцию которую проверяем

//объявляю тест
describe('Тестирование типа данных', function() { 
      //тест на массив 
    it('Проверка что получили массив', async function () { 
      const users = await fetchUsers();
        expect(users).to.be.an('array');    
      });

      //тест для каждого объекта в массиве 
    it('Проверка что в элементах массива указан username и является строкой', async function () { 
      const users = await fetchUsers();
      users.forEach(userName => {
        expect(userName).to.have.property('username').that.is.a('string');
      });
    });

    //тест для каждого объекта в массиве 
    it('Проверка что в элементах массива указан email и соответстует регулярному выражению', async function () {
      const users = await fetchUsers();
      users.forEach(userEmail => {
        expect(userEmail).to.have.property('email').to.match(/^(.+)@(.+)\.(.+)$/);
      });
    });

    //тест для каждого объекта в массиве 
    it('Проверка что в элементах массива указан адрес и является объектом', async function () {
      const users = await fetchUsers();
      users.forEach(userAddress => {
        expect(userAddress).to.have.property('address').that.is.a('object');
      });
    });

    //тест для каждого объекта в массиве 
    it('Проверка что в элементах массива есть id и является числом', async function () {
      const users = await fetchUsers();
      users.forEach(userId => {
        expect(userId).to.have.property('id').that.is.a('number');
      });
    });
})