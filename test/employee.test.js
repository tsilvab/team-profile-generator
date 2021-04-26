const Employee = require('../lib/Employee');

 describe('Employee', () =>{
     it('Employee instance', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });
 
    it('Create id with constructor', () => {
        const testValue = 100;
        const e = new Employee('testing', testValue);
        expect(e.id).toBe(testValue);
    });

    it('Create email with constructor', () => {
        const testValue = 'testing@gmail.com';
        const e = new Employee('testing', 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe('getName', () => {
    it('Get name using getName()', () => {
            const testValue = 'Name';
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
   describe('getId', () => {
    it('Get id using getId()', () => {
            const testValue = 100;
            const e = new Employee('testing', testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe('getEmail', () => {
    it('Get email using getEmail()', () => {
            const testValue = 'testing@gmail.com';
            const e = new Employee('testing', 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
        describe('getRole', () => {
        it('getRole() should return "Employee"', () => {
            const testValue = 'Employee';
            const e = new Employee('Name', 1, 'testing@gmail.com');
            expect(e.getRole()).toBe(testValue);
        });

    });
});
 
    
