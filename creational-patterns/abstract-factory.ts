module AbstractFactoryModule {
  export abstract class AbstractFactory {
    public abstract createProduct();
  }

  export class ConcreteFactory1 extends AbstractFactory {
    public createProduct() {
      return new Product1();
    }
  }

  export class ConcreteFactory2 extends AbstractFactory {
    public createProduct() {
      return new Product2();
    }
  }

  export abstract class AbstractProduct {
    public abstract test();
  }

  export class Product1 extends AbstractProduct {
    public test() {
      console.log("Product1");
    }
  }

  export class Product2 extends AbstractProduct {
    public test() {
      console.log("Product2");
    }
  }
}

//*********************************************
(function run() {
  let factory1: AbstractFactoryModule.AbstractFactory = new AbstractFactoryModule.ConcreteFactory1();
  let product1: AbstractFactoryModule.AbstractProduct = factory1.createProduct();
  product1.test();

  let factory2: AbstractFactoryModule.AbstractFactory = new AbstractFactoryModule.ConcreteFactory2();
  let product2: AbstractFactoryModule.AbstractProduct = factory2.createProduct();
  product2.test();
}());