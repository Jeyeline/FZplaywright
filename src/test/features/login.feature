Feature: User Authentication tests

Background:
Given User navigates to the application 
And User click on the login link

Scenario: Login should be success 
And User enter the username as "prakash"
And User enter the password as "pra"
When User click on the login button 
Then Login should be success

Scenario: Login should not be success 
Given User enter the username as "dani"
Given User enter the password as "david"
When User click on the login button 
But Login should fail
