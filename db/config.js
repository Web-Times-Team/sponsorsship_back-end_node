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
                type: "enum('USA', 'Canada', 'France', 'Benin')",
                null: "not null",
                extra: ""
            },
            {
                field: "dateOfBirth",
                type: "date",
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
                field: "school",
                type: "varchar(255)",
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
                type: "enum('USA', 'Canada', 'France', 'Benin')",
                null: "not null",
                extra: ""
            },
            {
                field: "dateOfBirth",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "photo",
                type: "text",
                null: "",
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
        name: "donors",
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
                type: "enum('USA', 'Canada', 'France', 'Benin')",
                null: "not null",
                extra: ""
            },
            {
                field: "dateOfBirth",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "photo",
                type: "text",
                null: "",
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
        name: "sponsorsships",
        describe: [{
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
                field: "constraint",
                type: "pk_sponsorships_studentId_sponsorId",
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
                extra: "foreign key(sponsorId) references donors(id)"
            }
        ]
    },
    {
        name: "ongs",
        describe: [{
                field: "name",
                type: "varchar(255)",
                null: "",
                extra: ""
            },
            {
                field: "adresse",
                type: "varchar(255)",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_ongs_name",
                null: "",
                extra: "primary key(name)"
            }
        ]
    },
    {
        name: "articles",
        describe: [{
                field: "articleNu",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "title",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "summary",
                type: "text",
                null: "not null",
                extra: ""
            },
            {
                field: "content",
                type: "text",
                null: "not null",
                extra: ""
            },
            {
                field: "ong",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_articles_id",
                null: "",
                extra: "primary key(articleNu)"
            },
            {
                field: "constraint",
                type: "fk_articles_ong",
                null: "",
                extra: "foreign key(ong) references ongs(name)"
            }
        ]
    },
    {
        name: "workingCountrys",
        describe: [{
                field: "name",
                type: "varchar(255)",
                null: "",
                extra: ""
            },
            {
                field: "ong",
                type: "varchar(255)",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_workingCountry_name",
                null: "",
                extra: "primary key(name)"
            },
            {
                field: "constraint",
                type: "fk_workingCountrys_ong",
                null: "",
                extra: "foreign key(ong) references ongs(name)"
            }
        ]
    },
    {
        name: "donations",
        describe: [{
                field: "ongName",
                type: "varchar(255)",
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
                field: "constraint",
                type: "pk_donor_id_ong_name",
                null: "",
                extra: "primary key(ongName, donorId)"
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
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "date",
                type: "date",
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
            },
            {
                field: "constraint",
                type: "pk_transactions_id",
                null: "",
                extra: "primary key(id)"
            },
            {
                field: "constraint",
                type: "fk_transactions_studentId",
                null: "",
                extra: "foreign key(studentId) references sponsorsships(studentId)"
            },
            {
                field: "constraint",
                type: "fk_transactions_sponsorId",
                null: "",
                extra: "foreign key(sponsorId) references sponsorsships(sponsorId)"
            },
            {
                field: "constraint",
                type: "fk_transactions_donorId",
                null: "",
                extra: "foreign key(donorId) references donors(id)"
            },
            {
                field: "constraint",
                type: "fk_transactions_ongName",
                null: "",
                extra: "foreign key(ongName) references ongs(name)"
            }


        ]
    },
    {
        name: "newsLetters",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "title",
                type: "varchar(255)",
                null: "not null",
                extra: ""

            },
            {
                field: "content",
                type: "varchar(255)",
                null: "not null",
                extra: ""

            },
            {
                field: "constraint",
                type: "pk_newsLetters_id",
                null: "",
                extra: "primary key(id)"
            }
        ]
    },
    {
        name: "subscribers",
        describe: [{
                field: "email",
                type: "varchar(255)",
                null: "",
                extra: ""
            },
            {
                field: "name",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_subscribers_email",
                null: "",
                extra: "primary key(email)"
            }
        ]
    },
    {
        name: "newsReceptions",
        describe: [{
                field: "email",
                type: "varchar(255)",
                null: "",
                extra: ""
            },
            {
                field: "id",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "date",
                type: "date",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_newsReception_email_id",
                null: "",
                extra: "primary key(email, id)"
            },
            {
                field: "constraint",
                type: "fk_newsReception_email",
                null: "",
                extra: "foreign key(email) references subscribers(email)"

            },
            {
                field: "constraint",
                type: "fk_newsReception_id",
                null: "",
                extra: "foreign key(id) references newsLetters(id)"

            }
        ]
    }
];
const connectParams = {}
exports.dbName = dbName;
exports.dbTables = dbTables;
exports.connectParams = connectParams;