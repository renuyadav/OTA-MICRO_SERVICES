const mockData = {
    "data": {
      "type": "flight-order",
      "id": "eJzTd9f3dXH18DQGAAsEAkA%3D",
      "associatedRecords": [
        {
          "reference": "MDEHI3",
          "creationDate": "2022-05-09T09:35:00.000",
          "originSystemCode": "GDS",
          "flightOfferId": "1"
        }
      ],
      "flightOffers": [
        {
          "type": "flight-offer",
          "id": "1",
          "source": "GDS",
          "nonHomogeneous": false,
          "lastTicketingDate": "2022-09-10",
          "itineraries": [
            {
              "segments": [
                {
                  "departure": {
                    "iataCode": "DEL",
                    "terminal": "3",
                    "at": "2022-10-10T06:10:00"
                  },
                  "arrival": {
                    "iataCode": "BLR",
                    "at": "2022-10-10T08:55:00"
                  },
                  "carrierCode": "AI",
                  "number": "803",
                  "aircraft": {
                    "code": "788"
                  },
                  "id": "1",
                  "numberOfStops": 0,
                  "co2Emissions": [
                    {
                      "weight": 146,
                      "weightUnit": "KG",
                      "cabin": "ECONOMY"
                    }
                  ]
                }
              ]
            }
          ],
          "price": {
            "currency": "INR",
            "total": "4381.00",
            "base": "3630.00",
            "fees": [
              {
                "amount": "0.00",
                "type": "TICKETING"
              },
              {
                "amount": "0.00",
                "type": "SUPPLIER"
              },
              {
                "amount": "0.00",
                "type": "FORM_OF_PAYMENT"
              }
            ],
            "grandTotal": "4381.00",
            "billingCurrency": "INR"
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
                "currency": "INR",
                "total": "4381.00",
                "base": "3630.00",
                "taxes": [
                  {
                    "amount": "63.00",
                    "code": "IN"
                  },
                  {
                    "amount": "191.00",
                    "code": "K3"
                  },
                  {
                    "amount": "236.00",
                    "code": "P2"
                  },
                  {
                    "amount": "91.00",
                    "code": "WO"
                  },
                  {
                    "amount": "170.00",
                    "code": "YR"
                  }
                ],
                "refundableTaxes": "751.00"
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
      "travelers": [
        {
          "id": "1",
          "dateOfBirth": "1985-10-08",
          "gender": "FEMALE",
          "name": {
            "firstName": "Renu",
            "lastName": "Yadav"
          },
          "contact": {
            "purpose": "STANDARD",
            "phones": [
              {
                "deviceType": "MOBILE",
                "countryCallingCode": "91",
                "number": "9008466353"
              }
            ],
            "emailAddress": "renu.yadav@publicissapient.com"
          }
        }
      ],
      "ticketingAgreement": {
        "option": "CONFIRM"
      }
    }
    
  }

module.exports = mockData;