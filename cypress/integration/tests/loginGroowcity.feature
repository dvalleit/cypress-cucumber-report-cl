Feature: Login 

    Incorrect Login

    Scenario Outline: The user logs in incorrectly
        Given The user navigates to the growcity website
        And The user clicks the register button
        And The user enters incorrect data "<email>" and "<password>"
        When The user clicks the enter button
        Then The user should see the message Username or password are incorrect

        Examples:
            | email             | password |
            | pitu@hotmail.com  | 1234     |