// export class Product {
//     constructor(
//         public sku: string,
//         public name: string,
//         public description: string,
//         public unitPrice: number,
//         public images: any,
//         public active: boolean,
//         public unitsInStock: number,
//         public dateCreated: Date,
//         public lastUpdated: Date | null, // Adjusting for nullable lastUpdated field
//     ) {}
// }

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string,
    public images: string[],
    public creationAt: Date,
    public updatedAt: Date,
    public category: Category,
    public selectedIndex?: number 
  ) {}
}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

  
