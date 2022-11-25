class RequestModel {
	constructor(id,name,phone,time,address,itemList,notes,paid,status) {	
			this.id = id;
			this.name= name;
			this.phone= phone;
			this.time=time;
			this.address= address;
			this.itemList= itemList;
			this.notes= notes;
			this.paid= paid;
			this.status= status;

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