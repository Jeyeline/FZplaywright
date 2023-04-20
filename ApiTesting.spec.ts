import {test,expect} from "@playwright/test"

test.only("Post Api", async ({request, baseURL}) => {
    const response =await request.post('${baseURL}', {
         headers:{
            "BusinessUnit":"MMFSL-Quiklyz"
          
        },
         data:
         {
            "DataSets": [
                {
                    "Name": "CreateCustomer",
                    "Entity": "Party",
                    "Data": [
                        {
                            "IsCorporate": false,
                            "IsSoleProprietor": false,
                            "PartyNumber": "102941",
                            "IncorporationDate": "2023-01-25",
                            "FirstName": "Niraj",
                            "MiddleName": "",
                            "LastName": "Patel",
                            "Suffix": "",
                            "DateOfBirth": "2023-01-25",
                            "PAN": "BQGPM7034M",
                            "CreationDate": "2023-01-28",
                            "PartyAddresses": [
                                {
                                    "IsMain": true,
                                    "IsHeadquarter": true,
                                    "IsGSTCertifiedAddress": "No",
                                    "IsActive": true,
                                    "Description": "API customer data",
                                    "BorrowerOfficeLocationType": "Others",
                                    "AttentionTo": "JRP",
                                    "AddressLine1": "No8 Bharathi Nagar",
                                    "AddressLine2": "G.n Mills",
                                    "AddressLine3": "coimbatore",
                                    "City": "coimbatore",
                                    "Neighborhood": "coimbatore",
                                    "SubdivisionOrMunicipality": "coimbatore",
                                    "State": {
                                        "Country": {
                                            "LongName": "India"
                                        },
                                        "ShortName": "MH"
                                    },
                                    "PostalCode": "641012",
                                    "HomeAddressLine1": "No8 Bharathi Nagar",
                                    "HomeAddressLine2": "G.n Mills",
                                    "HomeAddressLine3": "coimbatore",
                                    "HomeCity": "coimbatore",
                                    "HomeNeighborhood": "coimbatore",
                                    "HomeSubdivisionOrMunicipality": "coimbatore",
                                    "HomeState": {
                                        "Country": {
                                            "LongName": "India"
                                        },
                                        "ShortName": "TN"
                                    },
                                    "HomePostalCode": "641012"
                                }
                            ],
                            "PartyContacts": [
                                {
                                    "Prefix": "mrs",
                                    "FirstName": "Niraj",
                                    "MiddleName": "tree",
                                    "LastName": "Patel",
                                    "LastName2": "sk",
                                    "PhoneNumber1": "9642334434",
                                    "Description": "Test",
                                    "IsActive": "Yes"
                                }
                            ],
                            "PartyBankAccounts": [
                                {
                                    "UMRN": "54566785",
                                    "BankAccount": {
                                        "AccountName": "HDFC",
                                        "AccountNumber": "45353553",
                                        "BankBranch": {
                                            "BankName": "CITI",
                                            "Name": "CITI DEF"
                                        },
                                        "Currency": {
                                            "Name": "INR"
                                        },
                                        "AutomatedPaymentMethod": "ACHOrPAP",
                                        "IsPrimaryACH": true,
                                        "BankAccountCategory": {
                                            "AccountCategory": "Savings"
                                        },
                                        "OnHold": false,
                                        "IsActive": true
                                    }
                                }
                            ],
                            "Customer": {
                                "Status": "Active",
                                "ClusterID": "60013801734",
                                "BookingDate": "2023-01-25",
                                "RegistrationDate": "2023-01-25",
                                "Discounts": "huge",
                                "Scheme": "Test",
                                "EnachDate": "2023-01-25",
                                "FirstCollectionDate": "2023-01-25",
                                "LastCollectionDate": "2023-01-25",
                                "OrganizationID": "568575",
                                "BusinessType": {
                                    "Name": "Manufacturing",
                                    "Portfolio": {
                                        "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                                    }
                                },
                                "ReceiptHierarchyTemplate": {
                                    "Name": "RHT_testing",
                                    "Portfolio": {
                                        "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                                    }
                                },
                                "IsLienFilingRequired": false,
                                "ActivationDate": "2023-01-28",
                                "TINNumber": "111",
                                "TANNumber": "222",
                                "CustomerIdentificationNumber": "333",
                                "CRMLeadID": "444",
                                "CKYCNumber": "555",
                                "Division": "Farm",
                                "Branch": {
                                    "BranchName": "AHMEDABAD RO"
                                },
                                "LEI": "123435",
                                "CompanyRegistrationNumber": "124245",
                                "RelatedType": "Resident_Indian_Individual",
                                "SICCode": "1122",
                                "IsRelatedToLessor": false,
                                "IsNonAccrualExempt": false,
                                "IsAutoReaccrualExempt": false,
                                "OwnershipType": "Private",
                                "PartyType": "Individual",
                                "PercentageOfGovernmentOwnership": "1.00",
                                "PercentageOfControl": "99",
                                "EmployeeType": "Salaried",
                                "DeliveryType": "DoorDelivery",
                                "DeliveryAddress": "Door Delivery",
                                "Frequency": "Annual",
                                "Amount": "2500",
                                "LegalFormationTypeConfig": {
                                    "LegalFormationTypeCode": "Individual"
                                },
                                "CreditScore": "1.5",
                                "CreditReviewFrequency": "Annually",
                                "IsManualReviewRequired": false,
                                "IsFinancialDocumentRequired": false,
                                "CreditBureauType": "APIData",
                                "RiskBand": "APIData",
                                "HunterScore": "APIData",
                                "HunterDecision": "APIData",
                                "InvoiceTransitDays": "0",
                                "InvoiceLeadDays": "25",
                                "InvoiceComment": "invoice comments",
                                "InvoiceGraceDays": "5"
                            }
                        }
                    ]
                },
                {
                    "Name": "LineOfCreditDataGathering",
                    "Entity": "CreditProfile",
                    "Data": [
                        {
                            "ImportCustomers": {
                                "SelectedCustomerParam": {
                                    "Party": {
                                        "PartyNumber": "102941"
                                    }
                                }
                            },
                            "LineofBusiness": {
                                "Name": "B2B2E",
                                "Code": "B2B2E",
                                "Portfolio": {
                                    "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                                }
                            },
                            "LegalEntity": {
                                "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                            },
                            "CostCenter": {
                                "CostCenter": "C1"
                            },
                            "Branch": {
                                "BranchName": "Maharastra"
                            },
                            "OriginationSourceType": {
                                "Name": "Direct"
                            },
                            "HoldingStatus": "HFI",
                            "AcquisitionID": "LW00",
                            "RequestedAmount": {
                                "Currency": "INR",
                                "Amount": "900000.00"
                            },
                            "IsHostedsolution": false,
                            "Customer": {
                                "Party": {
                                    "PartyNumber": "102941"
                                }
                            },
                            "Currency": {
                                "Name": "INR",
                                "CurrencyCode": {
                                    "ISO": "INR"
                                }
                            },
                            "IsSyndicated": false,
                            "IsPreApproval": true,
                            "IsPreApproved": true,
                            "IsCostConfigUsed": false,
                            "IsRevolving": false,
                            "IsCommitted": false,
                            "IsConfidential": false,
                            "IsFederalIncomeTaxExempt": false,
                            "ReplacementSchedule": false,
                            "PeakExposure": {
                                "Currency": "INR",
                                "Amount": "0.00"
                            },
                            "IsCustomerCreationRequired": false
                        }
                    ]
                },
                {
                    "Name": "LineOfCreditCreditAnalysis",
                    "Entity": "CreditProfile",
                    "Data": [
                        {
                            "CreditDecisions": [
                                {
                                    "DecisionName": "CDN1",
                                    "DecisionDate": "2023-01-18",
                                    "Intention": "Approve",
                                    "ExpiryDate": "2030-03-31",
                                    "IsApprovedOnBehalf": false,
                                    "IsCarveOutUsed": false,
                                    "IsConditionalApproval": false,
                                    "IsRevolving": false,
                                    "ApprovedAmount": {
                                        "Currency": "INR",
                                        "Amount": "9000000.00"
                                    },
                                    "ToleranceFactor": "1.00",
                                    "ToleranceAmount": {
                                        "Currency": "INR",
                                        "Amount": "10.00"
                                    },
                                    "DecisionComments": "testcomments",
                                    "IsActive": true,
                                    "ApprovedTransactionAmount": {
                                        "Currency": "INR",
                                        "Amount": "10.00"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "Name": "LineOfCreditFinalApproval",
                    "Entity": "CreditProfile",
                    "Data": [
                        {}
                    ]
                },
                {
                    "Name": "MasterAgreement",
                    "Entity": "MasterAgreement",
                    "Data": [
                        {
                            "Number": "7044",
                            "AgreementAlias": "Testing",
                            "LineofBusiness": {
                                "Name": "B2B2E",
                                "Code": "B2B2E",
                                "Portfolio": {
                                    "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                                }
                            },
                            "LegalEntity": {
                                "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                            },
                            "AgreementType": {
                                "Portfolio": {
                                    "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                                },
                                "AgreementTypeConfig": {
                                    "Name": "BiPartite"
                                }
                            },
                            "TransactionType": "OperatingLease",
                            "ImportCustomerForMasterAgreement": {
                                "SelectedIds": {
                                    "Party": {
                                        "PartyNumber": "102941"
                                    }
                                }
                            },
                            "NumberOfInceptionPayments": "2",
                            "BargainPurchase": "No",
                            "TransferOwnership": "Yes",
                            "InsuranceProduct": "FirstYearFundedAndFinanced",
                            "RegistrationCharges": "True",
                            "ServiceAndMaintenanceProduct": "True",
                            "AccidentalManagement": "True",
                            "DifferencePayableBy": "Customer",
                            "MLATyre": "True",
                            "NoOfTyreContracted": "2",
                            "MLABattery": "Yes",
                            "EarlyTerminationClause": "Test",
                            "PrematureTerminationFee": "7.00",
                            "BreakFee": "9.00",
                            "LateFeeTemplate": {
                                "Name": "Late Fee-MFS"
                            },
                            "ResidualValueProduct": "FRV",
                            "ChannelPartnerDSACommission": {
                                "Currency": "INR",
                                "Amount": "500.00"
                            },
                            "OtherServiceFee": {
                                "Currency": "INR",
                                "Amount": "600.00"
                            },
                            "ChannelPartner": "Test",
                            "PaymentDueIn": "Advance",
                            "IRRforinterestonGST": "500.00",
                            "ExtendedWarranty": "1 year",
                            "AMC": "AMC",
                            "MaintenanceRiskTaken": true,
                            "NoOfDaysInYearsReplacementCarAvailed": "5",
                            "ImportCitiesForMasterAgreement": {
                                "SelectedCityParam": {
                                    "Name": "Bengaluru"
                                }
                            },
                            "ImportMakesForMasterAgreement": {
                                "SelectedMakeParam": {
                                    "Name": "ABB India Limited"
                                }
                            },
                            "ImportModelsForMasterAgreement": {
                                "SelectedModelParam": {
                                    "Name": "ABC"
                                }
                            },
                            "ImportTenuresForMasterAgreement": {
                                "SelectedTenureParam": {
                                    "Months": "{12,24}"
                                }
                            },
                            "ImportAnnualKmsForMasterAgreement": {
                                "SelectedAnnualKmParam": {
                                    "Distance": "10000"
                                }
                            },
                            "ImportAddOnServicesForMasterAgreement": {
                                "SelectedServiceParam": {
                                    "ServiceName": "ReplacementCarServices",
                                    "IsActive": true
                                }
                            },
                            "MasterAgreementAddOnServices": [
                                {
                                    "LookupKey": {
                                        "ServiceName": "ReplacementCarServices",
                                        "IsActive": true
                                    },
                                    "AllowedInQuotation": "Mandatory"
                                }
                            ],
                            "FloatRateIndex": {
                                "Name": "A-1"
                            },
                            "PricingIRRDetails": [
                                {
                                    "LookupKey": {
                                        "EffectiveDate": "2023-01-18",
                                        "IRR": "1.50",
                                        "IsActive": true,
                                        "Benchmark": "1.50"
                                    },
                                    "EffectiveDate": "2023-01-18",
                                    "IsActive": true,
                                    "IRR": "1.50"
                                }
                            ],
                            "SalesPersonName": "Test",
                            "Remarks": "Testing"
                        }
                    ]
                },
                {
                    "Name": "TokenReceipt",
                    "Entity": "Receipt",
                    "Data": [
                        {
                            "ReceiptClassification": "Cash",
                            "ReceivedDate": "2023-02-23",
                            "ReceiptAmount": {
                                "Currency": "INR",
                                "Amount": "5000"
                            },
                            "LegalEntity": {
                                "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                            },
                            "EntityType": "Customer",
                            "Customer": {
                                "Party": {
                                    "PartyNumber": "102941"
                                }
                            },
                            "Type": {
                                "ReceiptTypeName": "Cash"
                            },
                            "CheckNumber": "12342",
                            "CheckDate": "23-02-2023",
                            "NameOnCheck": "Pavai",
                            "BankName": "HDFC",
                            "ReceiptGLTemplate": {
                                "Name": "ReceiptCash"
                            },
                            "LineofBusiness": {
                                "Name": "B2C",
                                "Code": "B2C",
                                "Portfolio": {
                                    "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                                }
                            },
                            "CostCenter": {
                                "CostCenter": "C1"
                            },
                            "InstrumentType": {
                                "Code": "L02"
                            },
                            "PostDate": "23-02-2023",
                            "ValueDate": "23-02-2023",
                            "Comment": "API Receipt unallocated cash Token amount creation",
                            "BankAccount": {
                                "Id": "18",
                                "AccountNumber": "00010110000188",
                                "AccountName": "EG BANK1"
                            }
                        }
                    ]
                },
                {
                    "Name": "SDReceipt",
                    "Entity": "Receipt",
                    "Data": [
                        {
                            "ReceiptClassification": "Cash",
                            "ReceivedDate": "2023-02-23",
                            "ReceiptAmount": {
                                "Currency": "INR",
                                "Amount": "25000"
                            },
                            "LegalEntity": {
                                "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                            },
                            "EntityType": "Customer",
                            "Customer": {
                                "Party": {
                                    "PartyNumber": "102941"
                                }
                            },
                            "Type": {
                                "ReceiptTypeName": "Cash"
                            },
                            "CheckNumber": "12342",
                            "CheckDate": "23-02-2023",
                            "NameOnCheck": "Pavai",
                            "BankName": "HDFC",
                            "BankAccount": {
                                "Id": "18",
                                "AccountName": "EG BANK1"
                            },
                            "ReceiptGLTemplate": {
                                "Name": "Receipt Cash Token"
                            },
                            "LineofBusiness": {
                                "Name": "B2C",
                                "Code": "B2C",
                                "Portfolio": {
                                    "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                                }
                            },
                            "CostCenter": {
                                "CostCenter": "C1"
                            },
                            "InstrumentType": {
                                "Code": "L02"
                            },
                            "PostDate": "23-02-2023",
                            "ValueDate": "23-02-2023",
                            "Comment": "API Receipt unallocated cash security deposit creation"
                        }
                    ]
                },
                {
                    "Name": "BillTo",
                    "Entity": "BillTo",
                    "Data": [
                        {
                            "Customer": {
                                "Party": {
                                    "PartyNumber": "102941"
                                }
                            },
                            "BillToName": "Niraj Patel",
                            "CustomerBillToName": "Niraj Patel",
                            "BillingAddress": {
                                "AddressLine1": "No8 Bharathi Nagar"
                            },
                            "IsPrimary": true,
                            "ScriptCommandConfig": {
                                "EnabledActions": "Submit"
                            }
                        }
                    ]
                },
                {
                    "Name": "SecurityDeposit",
                    "Entity": "SecurityDeposit",
                    "Data": [
                        {
                            "EntityType": "CU",
                            "Customer": {
                                "Party": {
                                    "PartyNumber": "102941"
                                }
                            },
                            "Amount": {
                                "Currency": "INR",
                                "Amount": "10000"
                            },
                            "LineofBusiness": {
                                "Name": "B2B",
                                "Code": "B2B",
                                "Portfolio": {
                                    "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                                }
                            },
                            "LegalEntity": {
                                "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                            },
                            "Country": {
                                "LongName": "India"
                            },
                            "DueDate": "2023-01-10",
                            "ReceivableCode": {
                                "Name": "Tax Exempt"
                            },
                            "CostCenter": {
                                "CostCenter": "C1"
                            },
                            "InstrumentType": {
                                "Code": "L02"
                            },
                            "ExcludeFromBillToUpdate": "true",
                            "BillTo": {
                                "Name": "Niraj Patel"
                            },
                            "RemitTo": {
                                "Name": "123654"
                            },
                            "PostDate": "2023-02-16",
                            "InvoiceDate": "2023-02-16",
                            "InvoiceComment": "API Test",
                            "DepositMaturityDate": "2024-02-01"
                        }
                    ]
                },
                {
                    "Name": "Quotation",
                    "Entity": "Quotation",
                    "Data": [
                        {
                            "LineofBusiness": {
                                "Name": "B2C",
                                "Portfolio": {
                                    "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                                }
                            },
                            "LegalEntity": {
                                "Name": "Mahindra & Mahindra Financial Services Limited - MMFSL"
                            },
                            "City": {
                                "Code": "BAN"
                            },
                            "QuotationDate": "2023-03-02",
                            "QuotationGoodThroughDate": "2023-03-02",
                            "PreQuotation": {
                                "PrequotationNumber": "0223-90"
                            },
                            "Status": "Pending",
                            "Customer": {
                                "Party": {
                                    "PartyNumber": "102941"
                                }
                            },
                            "Comments": "API single quotation creation",
                            "UserName": "JRP",
                            "EmailId": "JRp@gmail.com",
                            "Employee_ID": "10908",
                            "MobileNumber": "+91-8989889797",
                            "Address": "Test",
                            "Designation": "Test",
                            "OfficeAddress": "Office test",
                            "ScriptCommandConfig": {
                                "EnabledActions": "SubmitQuotation"
                            }
                        }
                    ]
                }
            ],
            "Name": "CustomerPortalAPI"
        }
      
        
    })
    expect(response.status()).toBe(200);
    //expect(response.status()).toBeTruthy();
   console.log(await response.json());
 })

 
/*test("Get Api", async ({request, baseURL}) => {
    const response1 =await request.get('${{baseURL}')
//console.log(await response1.json)\
expect(response1.status()).toBe(200);

    console.log(await response1.json());
})
test("Post2", async ({request, baseURL}) =>{
    const response1 =await request.get('${{baseURL}', {

        headers:{
            "user-id":"ucp@mahindra.com",
            "Accept":"application/json",
            "Content-Type":"application/x-www-form-urlencoded"
        },
data:{
    
  "docsetId": 1,
  "metadata": {
    "1": "100000",
    "2": "RE",
    "3": "KYC",
    "4": "PAN",
    "5": "CUSTID0001",
    "6": "Avijitkumar Bhowmik",
    "7": "SEC",
    "8": "LAP",
    "9": "type",
    "10": "subtype",
    "11": "01/01/2022",
    "12": "Avijitkumar Bhowmik",
    "13": "27021792",
    "14": "CRemarks",
    "15": "01/01/2022",
    "16": "Avijitkumar Bhowmik",
    "17": "27021792",
    "18": "RRemarks",
    "19": "true",
    "20": "inProgress",
    "21": "LN123456789",
    "22": "2022-2023",
    "24": "systemRef",
    "27": "ALVPB6509R",
    "28": "DL123456789",
    "29": "PP1234567890",
    "30": "VID1234567890",
    "31": "01/01/2022",
    "32": "01/01/2022",
    "33": "UCP",
    "34": "ucp@mahindra.com",
    "35": "test.pdf"
     }
}, 

    })
    expect(response1.status()).toBe(200);

})
test("Post3", async ({request, baseURL,page}) =>{
    const response1 =await request.post('${baseURL}', {
        headers:{
            "user-id":"ucp@mahindra.com",
            "Accept":"application/json",
            "Content-Type":"application/x-www-form-urlencoded"
        },
    })
    await page.setExtraHTTPHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    
      const data = {
        'grant_type' :'client_credentials'
      };
    //expect(response1.status()).toBe(200);
    console.log(await response1);

})

test.only("Post4", async ({page,request}) => {

    await page.setExtraHTTPHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      const data = 
      {  
            'grant_type':'client_credentials'
      };

      const response4 =await request.post('https://api-uat.mmfsl.com/oauth/cc/v1/token', {
        headers:{
            "user-id":"ucp@mahindra.com",
            "Accept":"application/json",
            "Content-Type":"application/x-www-form-urlencoded"
        },
    })
    console.log( await response4.json())
})*/
    
