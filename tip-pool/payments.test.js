describe("Payment Tests", function () {
    beforeEach(function () {
        // Set up initial conditions
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });

    describe("submitPaymentInfo", function () {
        it("should add a payment to allPayments and update tables", function () {
            // Trigger the function
            submitPaymentInfo();

            // Check the expected outcomes
            expect(allPayments).toEqual({ payment1: { billAmt: '100', tipAmt: '10', tipPercent: 10 } });
            expect(paymentTbody.children.length).toBe(1);
            expect(summaryTds[0].textContent).toBe('$100');
            expect(summaryTds[1].textContent).toBe('$10');
            expect(summaryTds[2].textContent).toBe('10%');
            expect(billAmtInput.value).toBe('');
            expect(tipAmtInput.value).toBe('');
        });
    });

    describe("createCurPayment", function () {
        it("should return undefined when inputs are empty", function () {
            // Log initial input values
            billAmtInput.value = ''
            tipAmtInput.value = '';

            // Trigger the function and check the expected outcome
            const curPayment = createCurPayment();
            console.log("Cur Payment:", curPayment);
            expect(createCurPayment()).toBeUndefined();
        });
    });

    describe("appendPaymentTable", function () {
        it("should append a new row to paymentTable", function () {
            // Set up initial conditions
            const curPayment = { billAmt: '100', tipAmt: '10', tipPercent: 10 };

            // Trigger the function
            appendPaymentTable(curPayment);

            // Check the expected outcome
            const tr = paymentTbody.querySelector('tr');

            expect(tr.cells[0].textContent).toBe('$100');
            expect(tr.cells[1].textContent).toBe('$10');
            expect(tr.cells[2].textContent).toBe('10%');
        });
    });

    describe("updateSummary", function () {
        it("should update summary table with correctly added values", function () {
            // Set up initial conditions
            allPayments = {
                payment1: { billAmt: '50', tipAmt: '5', tipPercent: 10 },
                payment2: { billAmt: '30', tipAmt: '3', tipPercent: 10 }
            };

            // Trigger the function
            updateSummary();

            // Check the expected outcome
            expect(summaryTds[0].textContent).toBe('$80');
            expect(summaryTds[1].textContent).toBe('$8');
            expect(summaryTds[2].textContent).toBe('10%');
        });
    });

    afterEach(function () {
        // Clean up after each test
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds.forEach(td => td.textContent = '');
        allPayments = {};
    });
});
