const { faker } = require('@faker-js/faker');

function generateData() {
    const horses = [];
    for (let id = 0; id < 100; id++) {
        let horseName = faker.name.fullName();
        let sire1 = faker.name.fullName();
        let dam1 = faker.name.fullName();
        let sire2 = faker.name.fullName();
        let dam2 = faker.name.fullName();
        let maneuver = faker.datatype.number({min: -2, max: 2})
        horses.push({
            "id": id,
            "Name": horseName,
            "Sire": sire1,
            "Dam": dam1,
            "Sire2": sire2,
            "Dam2": dam2,
            "Maneuver": maneuver,
        });
    }

    return {horses};
}

module.exports = generateData;