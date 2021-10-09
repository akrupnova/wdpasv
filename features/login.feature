Feature: Auth

  Background:
    Given login page is open

  Scenario Outline: As a user, I can log into the secure area

    When I log in with <username> and <password>
    Then I should be redirected to my profile page

    Examples:
      | username                 | password |
      | anna.krupnovaa@gmail.com | 123zxc!! |

  Scenario Outline: As a user, I'm unable to login with invalid credentials

    When I log in with <username> and <password>
    Then I should see notification about failed auth

    Examples:
      | username        | password |
      | wrong@gmail.com | wrong    |

  Scenario Outline: As a user, I must see validation error if email has invalid format

    When I set email <username>
    Then email validation error appears

    Examples:
      | username |
      | wrong    |

  Scenario Outline: As a user, I must see an error if email was cleared

    When I set email <username>
    When I cleared email input field
    Then email required error appears

    Examples:
      | username        |
      | wrong@wrong.com |

  Scenario Outline: As a user, I must see an error if password was cleared

    When I set password <password>
    When I cleared password input field
    Then password required error appears

    Examples:
      | password |
      | wrong    |
