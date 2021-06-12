export const schema = {
    "models": {
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "displayName": {
                    "name": "displayName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "homes": {
                    "name": "homes",
                    "isArray": true,
                    "type": {
                        "model": "HomeOwner"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "homeOwner"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "mutations": {
                            "create": null
                        }
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "HomeOwner": {
            "name": "HomeOwner",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "home": {
                    "name": "home",
                    "isArray": false,
                    "type": {
                        "model": "Home"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "homeID"
                    }
                },
                "homeOwner": {
                    "name": "homeOwner",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "homeOwnerID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "HomeOwners",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byHome",
                        "fields": [
                            "homeID",
                            "homeOwnerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byHomeOwner",
                        "fields": [
                            "homeOwnerID",
                            "homeID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Home": {
            "name": "Home",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "homeOwners": {
                    "name": "homeOwners",
                    "isArray": true,
                    "type": {
                        "model": "HomeOwner"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "home"
                    }
                },
                "responses": {
                    "name": "responses",
                    "isArray": true,
                    "type": {
                        "model": "Response"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "home"
                    }
                },
                "addressLine1": {
                    "name": "addressLine1",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressLine2": {
                    "name": "addressLine2",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "addressState": {
                    "name": "addressState",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "zipcode": {
                    "name": "zipcode",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "yearBuilt": {
                    "name": "yearBuilt",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "outDoorArea": {
                    "name": "outDoorArea",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "livableArea": {
                    "name": "livableArea",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "bedroomCount": {
                    "name": "bedroomCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "bathroomCount": {
                    "name": "bathroomCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "heatingFuelType": {
                    "name": "heatingFuelType",
                    "isArray": false,
                    "type": {
                        "enum": "HeatingFuelType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "heaterAge": {
                    "name": "heaterAge",
                    "isArray": false,
                    "type": {
                        "enum": "AgeType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "waterHeaterFuelType": {
                    "name": "waterHeaterFuelType",
                    "isArray": false,
                    "type": {
                        "enum": "WaterHeaterFuelType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "waterHeaterAge": {
                    "name": "waterHeaterAge",
                    "isArray": false,
                    "type": {
                        "enum": "AgeType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "hasAirConditioner": {
                    "name": "hasAirConditioner",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "hasPool": {
                    "name": "hasPool",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "hasHotTub": {
                    "name": "hasHotTub",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "annualElectricalEnergyUsage": {
                    "name": "annualElectricalEnergyUsage",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "annualGasPropaneEnergyUsage": {
                    "name": "annualGasPropaneEnergyUsage",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "annualWaterUsage": {
                    "name": "annualWaterUsage",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Homes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "homeowners",
                                "allow": "owner",
                                "operations": [
                                    "update",
                                    "read"
                                ],
                                "identityClaim": "cognito:username"
                            }
                        ]
                    }
                }
            ]
        },
        "Response": {
            "name": "Response",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "questionID": {
                    "name": "questionID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "home": {
                    "name": "home",
                    "isArray": false,
                    "type": {
                        "model": "Home"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "homeID"
                    }
                },
                "question": {
                    "name": "question",
                    "isArray": false,
                    "type": {
                        "model": "Question"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": "id"
                    }
                },
                "answer": {
                    "name": "answer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Responses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byHome",
                        "fields": [
                            "homeID",
                            "questionID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCreatedAt",
                        "fields": [
                            "homeID",
                            "createdAt"
                        ],
                        "queryField": "getResponsesByCreatedAt"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Question": {
            "name": "Question",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "questionText": {
                    "name": "questionText",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "rewardText": {
                    "name": "rewardText",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "level": {
                    "name": "level",
                    "isArray": false,
                    "type": {
                        "enum": "Level"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "cost": {
                    "name": "cost",
                    "isArray": false,
                    "type": {
                        "enum": "Cost"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "categories": {
                    "name": "categories",
                    "isArray": true,
                    "type": {
                        "enum": "Category"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                }
            },
            "syncable": true,
            "pluralName": "Questions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "Admin"
                                ],
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Level": {
            "name": "Level",
            "values": [
                "STARTER",
                "INTERMEDIATE",
                "GURU"
            ]
        },
        "Cost": {
            "name": "Cost",
            "values": [
                "ONE",
                "TWO",
                "THREE"
            ]
        },
        "Category": {
            "name": "Category",
            "values": [
                "ENERGY",
                "RESILIENCY",
                "HEALTH",
                "WATER"
            ]
        },
        "HeatingFuelType": {
            "name": "HeatingFuelType",
            "values": [
                "GAS",
                "ELECTRIC",
                "PROPANE",
                "OTHER"
            ]
        },
        "AgeType": {
            "name": "AgeType",
            "values": [
                "LESS_THAN_5",
                "MORE_THAN_5",
                "MORE_THAN_10",
                "MORE_THAN_20"
            ]
        },
        "WaterHeaterFuelType": {
            "name": "WaterHeaterFuelType",
            "values": [
                "GAS",
                "ELECTRIC",
                "OTHER"
            ]
        }
    },
    "nonModels": {
        "S3Object": {
            "name": "S3Object",
            "fields": {
                "bucket": {
                    "name": "bucket",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "region": {
                    "name": "region",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            }
        }
    },
    "version": "5f619279978114f011e75ede198a4aa8"
};