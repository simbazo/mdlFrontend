export interface User {
	uuid:string;
	first_name:string;
	last_name:string;
	gender?:string;
	dob?:string;
	phone:number;
	username:string;
	email:string;
	password:string;
	avatar?:string;
	country_id?:string;
	province?:string;
	city?:string;
	address?:string;
	postal_code?:string;
	pobox?:string;
	active?:string;
}