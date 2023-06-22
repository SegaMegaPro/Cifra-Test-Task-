export class Tree {
  constructor(public data: DataItem[]) {}

  straighten(): TreeItem[] {
    const out: TreeItem[] = [];
    let filteredValues = function (dataItems: DataItem[]){
      for(let item of dataItems) {
        let values : TreeItem = {
          id: item.id,
          parentId: item.parentId,
          name: item.name
        }
        out.push(values);
        if(item.children.length > 0) {
          filteredValues(item.children);
        }
      }
    }
    filteredValues(this.data);
    return out;
  }
}

export interface DataItem {
  id: number;
  parentId: number | null;
  name: string;
  children: DataItem[];
}

interface TreeItem {
  id: number;
  parentId: number | null;
  name: string;
}
