db.people.insertOne( 
	{ "sex": "Male",
	  "first_name": "Konrad",
	  "last_name": "Maciborski",
	  "job": "Academic Assistant",
	  "email": "s16013@pjwstk.edu.pl",
	  "location": {"city": "Szczecin",
				  "address": {"streetname": "Lucznicza",
							  "streetnumber": "666"}},
	  "description": "Auuuu!",
	  "height": "188",
	  "weight": "111",
	  "birth_date": "1995-05-01",
	  "nationality": ": Poland",
	  "credit": [ {"type": "visa-electron",
				  "number": "213742066688",
				  "currency": "PLN",
				  "balance": "2137"} ]}
);

printjson(db.people.find({first_name:  "Konrad"}).toArray());