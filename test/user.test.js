import { expect } from "chai";
import { fetchUsers } from "../index.js";
import fetch from 'node-fetch';
import sinon from 'sinon';

global.fetch = fetch; // Устанавливаем функцию fetch в глобальную область видимости, чтобы она была доступна для тестируемой функции fetchUsers. 

describe("получение пользователей с сервера", function qwe() {
  // Вызываем sinon.restore(), чтобы восстановить оригинальные функции, 
  // которые были подменены в текущем тесте. Это предотвращает влияние одного теста на другой.
  afterEach(() => {
    sinon.restore();
    
  });

  let fetchStub;

  it("сравнение с моковыми пользователями", async function () {
    const mockUser = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }
    ]  //   Это массив моковых пользователей

    // Создаем подмену (stub) для функции fetch, используя sinon.stub(). 
    fetchStub = sinon.stub(global, 'fetch').resolves({
    
      ok: true,
      json: async () => mockUser
      
    })
  
   
    const users = await fetchUsers();

    expect(fetchStub.calledOnce).to.be.true; // Используем утверждение expect для проверки того, что подмена fetch была вызвана ровно один раз.  
    
    expect(users).to.deep.equal(mockUser); // проверяем чтобы пользователи совпадали с нашим фиктивным ответом
  })

  it('при неудачном ответе от API должен выбрасывать ошибку', async () => {
    try {
      await fetchUsers();
    } catch (error) {   
      expect(error.message).to.equal('Ошибка'); 
    }
  });

})