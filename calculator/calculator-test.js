
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 12000,
    years: 6,
    rate: 2.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('179.65');
  const values1 = {
    amount: 8000,
    years: 5,
    rate: 2.5
  };
  expect(calculateMonthlyPayment(values1)).toEqual('141.98');

});

it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 5, rate: 2.8 })).toEqual('178.80');
});

/// etc
