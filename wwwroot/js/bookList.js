﻿var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#DT_load').DataTable({
        "ajax": {
            "url": "/api/book",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "name", "width": "25%" },
            { "data": "author", "width": "25%" },
            { "data": "isbn", "width": "25%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center">                   
                    <a href="/BookList/Edit?id=${data}" class="btn btn-success text-white" style="cursor:pointer; width: 100px;">
                        Edit
                    </a>
                    <a class="btn btn-danger text-white" style="cursor:pointer; width: 100px;">
                        Delete
                    </a>
                    </div>`;
                },
                "width":"30px"
            }
        ],
        "language": {
            "emptyTable": "no data found"
        },
        "width": "100%"
    })
}