import { it, expect, vi, describe } from "vitest"

import { getDogBreeds } from "./dog"

vi.mock("axios", () => ({
  default: {
    async get() {
      return {
        data: {
          message: {
            dachshund: [],
            labrador: [],
          },
        },
      }
    },
  },
}))

describe('dog', () => {
  it("should get all dog breeds", async () => {
    const breeds = await getDogBreeds()
  
    expect(breeds).toEqual(["dachshund", "labrador"])
  })
})
