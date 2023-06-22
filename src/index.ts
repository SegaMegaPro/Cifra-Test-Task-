import { DataItem, Tree } from "./tree";
/**
 * Вам предлагается задача по реализации метода straighten() класса Tree (./tree.ts).
 * Метод должен преобразовать иерархическую структуру дерева, представленную
 * в виде массива объектов типа DataItem, в одномерный массив объектов типа TreeItem.
 * Ваша задача - написать код внутри метода straighten(), который выполнит
 * это преобразование.
 */
class Task {
  constructor() {
    const inputData: DataItem[] = [
      {
        id: 1,
        parentId: null,
        name: "main",
        children: [
          {
            id: 2,
            parentId: 1,
            name: "child 1",
            children: [
              { id: 3, parentId: 2, name: "sub-child 1", children: [] }
            ]
          },
          {
            id: 4,
            parentId: 1,
            name: "child 2",
            children: [
              { id: 5, parentId: 4, name: "sub-child 1", children: [] }
            ]
          }
        ]
      }
    ];
    const tree = new Tree(inputData);
    let result = tree.straighten();
    console.log(result); //Вывод в консоль

    //Вывод на index.html
    /*const divForShowingResult = document.getElementById('app');
    if(divForShowingResult) {
      divForShowingResult.innerHTML = '';
      result.forEach(item => {
        const itemElem = document.createElement('div');
        itemElem.textContent = `id: ${item.id}, parentId: ${item.parentId}, name: ${item.name}`;
        divForShowingResult.appendChild(itemElem)
      })
    }*/
    //Хотел сделать вывод результатов на страницу, но по итогу не разобрался как это сделать...
    /**
     * Необходимо получить следующий массив
     *
     * [
     * { id: 1, parentId: null, name: "main" },
     * { id: 2, parentId: 1, name: "child 1" },
     * { id: 3, parentId: 2, name: "sub-child 1" },
     * { id: 4, parentId: 1, name: "child 2" },
     * { id: 5, parentId: 4, name: "sub-child 1" },
     * ]
     */
  }
}

new Task();
