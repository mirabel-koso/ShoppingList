/***********************************************************
************************************************************
****INITIALIZING AND DECLARING VARIABLES********************/
var Item = document.getElementById('item');
var addButton = document.getElementById('add');
var shoppingCart = document.getElementById('UnpurchasedItems');
var purchasedItems = document.getElementById('PurchasedItems');
var lists = document.getElementsByTagName('ul');
// var listItem;



//MY OBJECT
var myShoppingList = {
/***********************************************************
************************************************************
************CHECKING VALIDITY OF A USER'S ITEM**************/
	validChoice : function() {
		if(Item === "")
			{alert('Enter An Item You want to Purchase'); 
			 }
		else{ return Item;
		}
	},

	/***********************************************************
	************************************************************
	*******CREATING NEW ITEMS***********************************/
	createListItem : function() {
		var listItem = document.createElement('li');
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.className = 'check';
		var label = document.createElement('label');
		 
		var deleteButton = document.createElement('button');
		deleteButton.innerText ="Delete";
		deleteButton.className = 'delete';


	/***********************************************************
	************************************************************
	*****APPENDING TO LIST ITEMS********************************/

		var Item = document.getElementById('item').value;
		var shoppingCart = document.getElementById('UnpurchasedItems');
		var purchasedItems = document.getElementById('PurchasedItems');

		label.innerText = Item;
		listItem.appendChild(checkbox);
		listItem.appendChild(label);
		listItem.appendChild(deleteButton);
		shoppingCart.appendChild(listItem);


	},



	bindEvent : function(tasklistitem, checkboxeventhandler){
		var checkbox = tasklistitem.querySelector('input[type = checkbox]');
		var deleteButton = tasklistitem.querySelector('button.delete');

		deleteButton.onclick = deleteListItem;
		checkbox.onclick = checkboxeventhandler;
	},

	/************************************************************
	*************************************************************
	*****ADDING A NEW LIST ITEM INTO AN UNORDERED LIST***********/
	addItem : function() {
		console.log('item added');
		if(myShoppingList.validChoice())
			{var listItem = myShoppingList.createListItem(Item);
			
	        }
	},



	purchasedItemsHolder:function(){
		console.log('complete');
		var listItem = this.parentNode;
		purchasedItems.appendChild(listItem);
		bindEvent(listItem, shoppingCart);
	},


	unpurchasedItemsHolder:function(){
		console.log('complete')
		var listItem = this.parentNode;
		shoppingCart.appendChild(listItem);
		bindEvent(listItem, purchasedItems);
	},

	/*************************************************************
	**************************************************************
	**********************DELETING A LIST ITEM FROM A LIST********/
	deleteListItem : function () {
		var listItem = this.parentNode;
		var ul = listItem.parentNode;
	     ul.removeChild(listItem);
		console.log('item deleted');
	 },
	 /*************************************************************
	 **************************************************************
	 ***MOVING ITEMS FROM SHOPPING CART TO PURCHASED LIST**********/
	 moveItem : function() {
	 	var listItem = this.parentNode;
	 	if(this.checked) {
	 		purchasedItems.appendChild(listItem);
	 	}
	 	else {
	 		shoppingCart.appendChild(listItem);
	 	}
	 	console.log('item moved');
	 },


	 /**************************************************************
	 ***************************************************************
	 ********ON CLICKING OF BUTTONS*********************************/
	 clickButton : function() {
	 	addButton.onclick = myShoppingList.addItem;
 	
    $(lists).on("change", 'input[type=checkbox]', myShoppingList.moveItem);
    $(lists).on("click", '.delete', myShoppingList.deleteListItem);
 }
};

$(document).ready(myShoppingList.initialize);

window.onload = function(){
    myShoppingList.clickButton();
}