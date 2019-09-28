const data = [
    {
        type: "green",
        name: "Lun Jzi",
        price: 17,
        weight: 50,
        voteto: [{
            name: "asdsadsadsada"
        }]
    },
    {
        price: 50,
        type: "white",
        name: "Bai Hao In Zhen",
        weight: 50
    }
];

const dataNext = [
    {
        user: "misha",
        age: 23
    },
    {
       user: "vlad",
        age: 25
    }
];

class Table {
    constructor(name, data) {
        this.name = name;
        this.root = null;
        this.data = data;
        this.raw = null;
        this.cells = null;
    }

    init() {
        // create root element div
        try {
        this.root = document.getElementById(this.name);
        this.root.classList.add("tbl-content");
        const table = document.createElement('table');
        const trHEAD = document.createElement('tr');

        // initialize data
        this.raw = Object.keys(this.data[0]);

        this.root.appendChild(table);
        table.appendChild(trHEAD);

        this.raw.map((item, index) => {
            const th = document.createElement('th');
            th.innerHTML = item;
            trHEAD.appendChild(th)
        });

        for(var i = 0; i < this.data.length; i++) {
            const trBODY = document.createElement('tr');
            table.appendChild(trBODY)

            for (var y = 0; y < this.raw.length; y++) {
                const td = document.createElement('td');
                td.innerHTML = this.data[i][this.raw[y]];
                trBODY.appendChild(td);
            }
        }

        } catch (e) {
            console.warn(`[Wrong Table id]-[${this.name}]`)
        }

    }
}

const AmazonTable = new Table("amazon-table", data)
const UserTable = new Table("user-table", dataNext)

AmazonTable.init()
UserTable.init()

console.log(AmazonTable)
console.log(UserTable)


// Sortable
// Editable
// Pagination
// Infinite scroll
// Aggregation
