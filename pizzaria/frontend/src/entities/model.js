class RequestModel {
	constructor(id,name,phone,time,address,items,notes,paid,paidMethod, status) {	
			this.id = id;
			this.name= name;
			this.phone= phone;
			this.time=time;
			this.address= address;
			this.items= items;
			this.notes= notes;
			this.paid= paid;
			this.paidMethod = paidMethod
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