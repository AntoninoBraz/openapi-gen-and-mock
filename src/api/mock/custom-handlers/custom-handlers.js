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
  })
]