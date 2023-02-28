describe("Counter", () => {
	it("renders the initial count value", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("Count: 0");
	});

	it("increments the count when the + button is clicked", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("+").click();
		cy.contains("Count: 1");
	});

	it("decrements the count when the - button is clicked", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("-").click();
		cy.contains("Count: -1");
	});

	it("resets the count when the Reset button is clicked", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("+").click();
		cy.contains("+").click();
		cy.contains("Reset").click();
		cy.contains("Count: 0");
	});

	it("updates the document title with the current count value", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("+").click();
		cy.title().should("eq", "Count: 1");
	});
});
