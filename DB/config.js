/**
 * 
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

}];
const connectParams = {}
exports.dbName = dbName;
exports.dbTables = dbTables;
exports.connectParams = connectParams;