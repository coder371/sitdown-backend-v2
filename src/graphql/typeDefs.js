const { gql } = require("apollo-server-express");
const adminSchemas = require("./resolvers/admin.resolvers/admin.schemas.js");
const appSchemas = require("./resolvers/app.resolvers/app.schemas.js");

module.exports = gql`
    scalar JSON
    scalar DateTime

    type Body {
        _id: ID
        title: String!
        icon: String
        type: String
        status: String
    }

    type Brand {
        _id: ID
        title: String!
        description: String
        logo: String
        logoUrl: String
        main: Int
        status: String
    }
    type Color {
        _id: ID
        title: String!
        code: String
    }

    type Category {
        _id: ID
        title: String!
        description: String
        logo: String
        status: String
    }

    type City {
        _id: ID
        title: String!
        status: String
        translations: JSON
    }

    type Country {
        _id: ID
        title: String!
        translations: JSON
        status: String
    }

    type Fuel {
        _id: ID
        title: String!
        description: String
        status: String
    }

    type Language {
        _id: ID
        title: String!
        code: String!
        rtl: Int!
        status: String
    }

    type User {
        _id: ID
        fullname: String
        phone: String
        email: String
        avatar: String
        avatarUrl: String
        level: Int
        status: String
        city: City
        country: Country
        lang: Language
        blocked: Boolean
        suspended: Boolean
        verfied: Boolean
        activated: Boolean
        deleted: Boolean
        token: String
        scm_token: String
    }

    type UserInfo {
        _id: ID
        fullname: String
        phone: String
        avatarUrl: String
    }


    type Image {
        image: String
        imageUrl: String
    }
    type Options {
        translations: JSON
        _id: ID,
        title: String
    }

    type Vehicle {
        _id: ID
        user: UserInfo
        status: String
        images: [Image]
        vehicle: VehicleInformation
        isNew: Boolean,
        price: Int
        priceFormated: String
        negotiable: Boolean
        priceVisibility: Boolean
        odometer: Int
        previousOwners: Int
        city: City
        options: [Options]
        optionsFormated: String
        color: Color,
        license: License
        isFavourite: Boolean
    }

    type VehicleType {
        _id: ID
        title: String
        iconUrl: String
    }
    type License {
        expiration: DateTime
    }

    type VehicleInformation {
        _id: ID
        model: String
        engineCapacity: String
        doorCount: Int
        horsePower: Int
        seatsCount: Int
        style: String
        safetyRate: Int
        carbonRate: Int
        sunroof: Boolean
        gearBox: Gearbox
        status: String
        brand: Brand
        category: Category
        wheelDrive: WheelDrive
        body: Body
        fuel: Fuel
    }

    type Gearbox {
        _id: ID
        title: String!
        translations: JSON
    }
    type WheelDrive {
        _id: ID
        title: String!
        status: String
    }

    ${ adminSchemas }
    ${ appSchemas }
`;


