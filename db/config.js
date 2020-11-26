/**
 * Data base configuration
 */
const dbName = "one_to_many";
const dbTables = [{
    name: "students",
    describe: [{
        field: "id",
        type: "int",
        null: "",
        extra: "auto_increment"
    },
    {
        field: "lastName",
        type: "varchar(255)",
        null: "not null",
        extra: ""
    },
    {
        field: "firstName",
        type: "varchar(255)",
        null: "not null",
        extra: ""
    },
    {
        field: "middleName",
        type: "varchar(255)",
        null: "",
        extra: ""
    },
    {
        field: "country",
        type: "varchar(255)",
        null: "not null",
        extra: ""
    },
    {
        field: "photo",
        type: "test",
        null: "not null",
        extra: ""
    },
    {
        field: "school",
        type: "varchar(255)",
        null: "not null",
        extra: ""
    },
    {
        field: "age",
        type: "int",
        null: "not null",
        extra: ""
    },
    {
        field: "constraint",
        type: "pk_sponsors_id",
        null: "",
        extra: "primary key (id)"
    }
    ]

},
{
    name: "talents",
    describe: [
        {
            field: "id",
            type: "int",
            null: "",
            extra: "auto_increment"
        },
        {
            field: "lastName",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "firstName",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "middleName",
            type: "varchar(255)",
            null: "",
            extra: ""
        },
        {
            field: "country",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "photo",
            type: "text",
            null: "not null",
            extra: ""
        },
        {
            field: "age",
            type: "int",
            null: "not null",
            extra: ""
        },
        {
            field: "skill",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "constraint",
            type: "pk_talents_id",
            null: "",
            extra: "primary key (id)"
        },

    ]
},
{
    name: "sponsors",
    describe: [
        {
            field: "id",
            type: "int",
            null: "",
            extra: "auto_increment"
        },
        {
            field: "lastName",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "firstName",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "middleName",
            type: "varchar(255)",
            null: "",
            extra: ""
        },
        {
            field: "country",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "photo",
            type: "text",
            null: "not null",
            extra: ""
        },
        {
            field: "age",
            type: "int",
            null: "not null",
            extra: ""
        },
        {
            field: "constraint",
            type: "pk_sponsors_id",
            null: "",
            extra: "primary key (id)"
        }

    ]
},
{
    name: "sponsorships",
    describe: [
        {
            field: "studentId",
            type: "int",
            null: "not null",
            extra: ""
        },
        {
            field: "sponsorId",
            type: "int",
            null: "not null",
            extra: ""
        },
        {
            field: "date",
            type: "Date",
            null: "not null",
            extra: ""
        },
        {
            field: "constraint",
            type: "pk_sponsorships_studentId",
            null: "",
            extra: "primary key(studentId, sponsorId)"
        },
        {
            field: "constraint",
            type: "fk_sponsorships_studentId",
            null: "",
            extra: "foreign key(studentId) references students(id)"
        },
        {
            field: "constraint",
            type: "fk_sponsorships_sponsorId",
            null: "",
            extra: "foreign key(sponsorId) references sponsors(id)"
        }
    ]
},
{
    name: "donors",
    describe: [
        {
            field: "id",
            type: "int",
            null: "",
            extra: "auto_increment"
        },
        {
            field: "lastName",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "firstName",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "middleName",
            type: "varchar(255)",
            null: "",
            extra: ""
        },
        {
            field: "country",
            type: "varchar(255)",
            null: "not null",
            extra: ""
        },
        {
            field: "photo",
            type: "text",
            null: "not null",
            extra: ""
        },
        {
            field: "age",
            type: "int",
            null: "not null",
            extra: ""
        },
        {
            field: "constraint",
            type: "pk_donors_id",
            null: "",
            extra: "primary key (id)"
        }

    ]
},
{
    name: "donations",
    describe: [
        {
            field: "ongName",
            type: "varchar(255)",
            null: "",
            extra: "auto_increment"
        },
        {
            field: "donorId",
            type: "int",
            null: "",
            extra: ""
        },
        {
            field: "constraint",
            type: "pk_donor_id_ong_name",
            null: "",
            extra: "primary key(donorId, ongName)"
        },
        {
            field: "constraint",
            type: "fk_donation_ongName",
            null: "",
            extra: "foreign key(ongName) references ongs(name)"
        },
        {
            field: "constraint",
            type: "fk_donation_donor_id",
            null: "",
            extra: "foreign key(donorId) references donors(id)"
        }

    ]
},
{
    name: "transactions",
    describe: [
        {
            field: "id",
            type: "int",
            null: "",
            extra: "auto_increment"
        },
        {
            field: "date",
            type: "Date",
            null: "not null",
            extra: ""
        },
        {
            field: "studentId",
            type: "int",
            null: "",
            extra: ""
        },
        {
            field: "sponsorId",
            type: "int",
            null: "",
            extra: ""
        },
        {
            field: "donorId",
            type: "int",
            null: "",
            extra: ""
        },
        {
            field: "ongName",
            type: "varchar(255)",
            null: "",
            extra: ""
        },
        {
            field: "amount",
            type: "int",
            null: "not null",
            extra: ""
        }

    ]
}
];
const connectParams = {}
exports.dbName = dbName;
exports.dbTables = dbTables;
exports.connectParams = connectParams;