const Employee = require("../lib/employee");

 test("Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    test("Create name with constructor", () => {
        const testName = "Grace";
        const e = new Employee(testName);
        expect(e.testName).toBe(testName);
    });

    test("Create id with constructor", () => {
        const testValue = 100;
        const e = new Employee("testing", testValue);
        expect(e.id).toBe(testValue);
    });

    test("Create email with constructor", () => {
        const testValue = "testing@gmail.com";
        const e = new Employee("testing", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    test("Get name using getName()", () => {
            const testValue = "Grace";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
        
   test("Get id using getId()", () => {
            const testValue = 100;
            const e = new Employee("testing", testValue);
            expect(e.getId()).toBe(testValue);
        });
        
    test("Get email using getEmail()", () => {
            const testValue = "testing@gmail.com";
            const e = new Employee("testing", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
        
        test('getRole() should return "Employee"', () => {
            const testValue = "Employee";
            const e = new Employee("Grace", 1, "testing@gmail.com");
            expect(e.getRole()).toBe(testValue);
        });
 
    
