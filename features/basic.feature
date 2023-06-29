Feature: Login
  I as user
  I would like to login in App
  To access the system

  Scenario: Login with success
    Given I fill email
    And I fill password
    When I tap in Entrar
    Then I see the Save buttton
 