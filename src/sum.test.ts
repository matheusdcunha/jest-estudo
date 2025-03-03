import { sum } from "./sum";

describe("Sum", ()=>{

  let sumResults: number;

  beforeAll(()=>{
    sumResults = 10;
  })

  afterAll(()=>{
    sumResults = 0;
    console.log("EXECUTADO DEPOIS DOS TESTES", sumResults)
  })

  test("Sum of 3+7 must be 10", ()=>{
    const result = sum(3,7);
    
    expect(result).toBe(sumResults)
  })

  test("Sum of 2+6 must be 8", ()=>{
    const result = sum(2,6);
    
    expect(result).toBe(8)
  })

})
