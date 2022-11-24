class RequestModel {
	constructor(id,name,phone,time,address,itemList,notes,paid,status) {	
			this.id = null;
			this.name= null;
			this.phone= null;
			this.time=null;
			this.address= null;
			this.itemList= [ItemModel];
			this.notes= null;
			this.paid= false;
			this.status= null;

	}
}
class ItemModel {
	constructor(id,name,quantity) {
			this.id= null;
			this.name= null;			
			this.quantity= null;

	}
}
module.exports = RequestModel;