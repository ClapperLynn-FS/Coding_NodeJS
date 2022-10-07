

describe("simple math test",()=>{

    test("Subtract test",()=>{
        const result=15-3;
        expect(result).toBe(12)
    });

    test("Add test",()=>{
        const result= 1+1;
        expect(result).toBe(2)
    });

    test("multiply test",()=>{
        const result=15*10
        expect(result).toBe(150)
    });

    test("division test",()=>{
        const result=150/10;
        expect(result).toBe(15)
    });
});

describe("adv math test",()=>{

    test("max test",()=>{
        const result=Math.max(3,5,7,9,13);
        expect(result).toBe(13)
    });

    test(" sqRoot test",()=>{
        const result=Math.sqrt(9);
        expect(result).toBe(3)
    });

    
});