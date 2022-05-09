const mockData = {
    "meta": {
        "count": 1,
        "links": {
            "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?departureDate=2022-11-01&originLocationCode=DEL&destinationLocationCode=BLR&adults=1&max=1"
        }
    },
    "data": [
        {
            "type": "flight-offer",
            "id": "test",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-10-02",
            "numberOfBookableSeats": 5,
            "itineraries": [
                {
                    "duration": "PT2H35M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-11-01T09:30:00"
                            },
                            "arrival": {
                                "iataCode": "BLR",
                                "at": "2022-11-01T12:05:00"
                            },
                            "carrierCode": "AI",
                            "number": "506",
                            "aircraft": {
                                "code": "32B"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT2H35M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "56.44",
                "base": "46.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "56.44"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "56.44",
                        "base": "46.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "SAP30",
                            "class": "S",
                            "includedCheckedBags": {
                                "weight": 25,
                                "weightUnit": "KG"
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "dictionaries": {
        "locations": {
            "BLR": {
                "cityCode": "BLR",
                "countryCode": "IN"
            },
            "DEL": {
                "cityCode": "DEL",
                "countryCode": "IN"
            }
        },
        "aircraft": {
            "32B": "AIRBUS A321 (SHARKLETS)"
        },
        "currencies": {
            "EUR": "EURO"
        },
        "carriers": {
            "AI": "AIR INDIA"
        }
    }
}
module.exports = mockData;