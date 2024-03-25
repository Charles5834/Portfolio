// Shopping list object
class shoppingList{
    constructor(name){
        this.name = name;
        this.items = [];
    }
    addItem(itemName) {
        if(itemName.trim() !== ''){
            this.items.push({
                name: itemName,
                purchased: false
            });
        }
    }

    togglePurchased(index){
        this.items[index].purchased = !this.items[index].purchased;
    }

    displayList(){
        const shoppingList = document.getElementById('shoppingList');
        shoppingList.innerHTML = '';
        this.items.forEach((item, index) => { //formats items
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            if (item.purchased) {
                listItem.style.textDecoration = 'line-through';
            }
            listItem.addEventListener('click', function() {
                shoppingListApp.togglePurchased(index);
                shoppingListApp.displayList();
            });
            shoppingList.appendChild(listItem);
        });
    }
    clearList(){
        this.items = [];
    }
}
    const shoppingListApp = new shoppingList("Groceries")
    document.getElementById("name").innerText =  document.getElementById("name").innerText + ": " + shoppingListApp.name
    
// Add button functions
document.getElementById('addItemButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput').value;
    shoppingListApp.addItem(itemInput);
    shoppingListApp.displayList();
    document.getElementById('itemInput').value = '';
});

// Clear list button functions
document.getElementById('clearListButton').addEventListener('click', function() {
    shoppingListApp.clearList();
    shoppingListApp.displayList();
});