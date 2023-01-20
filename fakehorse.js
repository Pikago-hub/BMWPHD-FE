import { faker } from "@faker-js/faker";
import fs from "fs";

function generateUsers() {
  let users = [];

  for (let id = 1; id <= 100; id++) {
    let name = faker.name.fullName();
    let sire1 = faker.name.fullName();
    let dam1 = faker.name.fullName();
    let sire2 = faker.name.fullName();
    let dam2 = faker.name.fullName();
    let maneuver_score = faker.datatype.number({
      min: 50,
      max: 100,
      precision: 0.01,
    });
    let lte = faker.datatype.number({
      min: 30000,
      max: 100000,
      precision: 1,
    });
    let pe = faker.datatype.boolean();
    let show = faker.address.city();
    let ckass = faker.datatype.number({
      min: 1,
      max: 4,
      precision: 1,
    });
    let level = faker.datatype.number({
      min: 1,
      max: 3,
      precision: 1,
    });
    let openvsnpro = faker.datatype.boolean();
    let age = faker.datatype.number({
      min: 2,
      max: 10,
      precision: 1,
    });
    let place = faker.address.city();
    let money = faker.datatype.number({
      min: 22500,
      max: 102000,
      precision: 1,
    });
    let breeder = faker.name.fullName();
    let owner = faker.name.fullName();
    let rider = faker.name.fullName();
    let draw = faker.datatype.number({
      min: 1,
      max: 4,
      precision: 1,
    });
    let back_number = faker.datatype.number({
      min: 1,
      max: 20,
      precision: 1,
    });
    let on_dirt = faker.datatype.boolean();
    let finalist = faker.datatype.boolean();
    let notes = faker.lorem.sentence(3);
    let nrha = faker.datatype.number();
    let date_of_show_class = faker.date.future();
    let schooling = faker.address.nearbyGPSCoordinate();
    users.push({
      id: id,
      name: name,
      sire1: sire1,
      dam1: dam1,
      sire2: sire2,
      dam2: dam2,
      maneuver_score: maneuver_score,
      lte: lte,
      pe: pe,
      show: show,
      class: ckass,
      level: level,
      openvsnpro: openvsnpro,
      age: age,
      place,
      money,
      breeder,
      owner,
      rider,
      draw,
      back_number,
      on_dirt,
      finalist,
      notes,
      nrha,
      date_of_show_class,
      schooling,
    });
  }

  return { data: users };
}

let dataObj = generateUsers();

fs.writeFileSync("horse.json", JSON.stringify(dataObj, null, "\t"));
