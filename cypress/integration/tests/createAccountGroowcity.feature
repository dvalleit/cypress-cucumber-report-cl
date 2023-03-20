Feature: Create account

    Create account without data

    Scenario: Create account without data
        Given The user navigates to the growcity website
        And The user clicks the Get Started Now
        When The user does not enter data and clicks the create account button
        Then The user should see the validations in red