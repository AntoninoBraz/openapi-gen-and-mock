/**
 * This file is AUTO GENERATED by [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
 * Feel free to commit/edit it as you need.
 */
/* eslint-disable */
/* tslint:disable */
import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";

faker.seed(1);

const baseURL = "";
const MAX_ARRAY_LENGTH = 20;

let i = 0;
const next = () => {
  if (i === Number.MAX_SAFE_INTEGER - 1) {
    i = 0;
  }
  return i++;
};

export const handlers = [
  http.get(`${baseURL}/pets`, async () => {
    const resultArray = [
      [await getListPets200Response(), { status: 200 }],
      [await getListPetsdefaultResponse(), { status: NaN }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.post(`${baseURL}/pets`, async () => {
    const resultArray = [
      [undefined, { status: 201 }],
      [await getCreatePetsdefaultResponse(), { status: NaN }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
  http.get(`${baseURL}/pets/:petId`, async () => {
    const resultArray = [
      [await getShowPetById200Response(), { status: 200 }],
      [await getShowPetByIddefaultResponse(), { status: NaN }],
    ];

    return HttpResponse.json(...resultArray[next() % resultArray.length]);
  }),
];

export function getListPets200Response() {
  return [
    ...new Array(faker.number.int({ min: 1, max: MAX_ARRAY_LENGTH })).keys(),
  ].map((_) => ({
    id: faker.number.int(),
    name: faker.person.fullName(),
    tag: faker.lorem.words(),
  }));
}

export function getListPetsdefaultResponse() {
  return {
    code: faker.number.int(),
    message: faker.lorem.words(),
  };
}

export function getCreatePetsdefaultResponse() {
  return {
    code: faker.number.int(),
    message: faker.lorem.words(),
  };
}

export function getShowPetById200Response() {
  return {
    id: faker.number.int(),
    name: faker.person.fullName(),
    tag: faker.lorem.words(),
  };
}

export function getShowPetByIddefaultResponse() {
  return {
    code: faker.number.int(),
    message: faker.lorem.words(),
  };
}