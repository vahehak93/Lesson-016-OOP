class CoffeeShop {
    constructor(name, menu) {
      this.name = name
      this.menu = menu
      this.order = []
    }
  
    addOrder = function(orderName = '') {
      const item = this.menu.find((el) => el.name === orderName)
      if (item) {
        this.order.push(item)
      } else {
        return 'This item is currently unavailable!'
      }
    }
  
    fulfillOrder = function() {
      if (this.order.length > 0) {
        const item = this.order.shift()
  
        return `${item.name} is ready!`
      }
  
      return 'All orders are fulfilled!!!'
    }
  
    listOrders = function() {
      return this.order
    }
  
    dueAmount = function() {
      return this.order.reduce((acc, el) => {
        acc += el.price
        return acc
      }, 0)
    }
  
    cheapestItem = function() {
      const cheapest = this.menu.reduce((acc, el) => {
        if (acc.price >= el.price) {
          acc = el
        }
  
        return acc
      })
  
      return cheapest.name
    }
  
    drinksOnly = function() {
      return this.menu.filter((el) => el.type === 'drink')
    }
  
    foodsOnly = function() {
      return this.menu.filter((el) => el.type === 'food')
    }
  }
  
  console.log(typeof CoffeeShop)
  
  const hotHakobMenu = [
    { name: 'Capuccino', type: 'drink', price: 700 },
    { name: 'Americano', type: 'drink', price: 500 },
    { name: 'Bananza', type: 'food', price: 650 },
    { name: 'Fresh', type: 'drink', price: 900 },
    { name: 'Hot Dog', type: 'food', price: 250 },
    { name: 'Ice cream', type: 'food', price: 250 },
  ]
  
  const hotHakob = new CoffeeShop('Hot Hakob', hotHakobMenu)
  
  hotHakob.addOrder('Bananza')
  hotHakob.addOrder('Capuccino')
  
  console.log(hotHakob.cheapestItem())
  
  console.log(hotHakob.drinksOnly())
  
  console.log(hotHakob.foodsOnly())