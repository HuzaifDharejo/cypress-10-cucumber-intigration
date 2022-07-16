Feature: MultipleQuantity

Feature Description
        Background:
            Given User should be on product listing page
             
        Scenario: Placing Order of random Products with Quantity of 5
             When User places order of product with Quantity of 5
             Then User should see thankyou page
             
    