export interface Sponsor {
	uuid:string;
	entity_id:string;
	sponsor_type_id:string;
	sponsor_name:string;
	contact:string;
	email:string;
	website?:string;
	country_id?:string;
	province?:string;
	city:string;
	address:string;
	postal_code:string;
	pobox:string;
}