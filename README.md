# lowercase-test

This is a minimal example repository to demonstrate an issue with vitest mocking. It was created using the vanilla JS vite template and adding vitest.

## To reproduce lowercase drive issue:

**NOTE** Make sure to run these steps on a Windows machine in a command prompt. Command prompt recommended because depending on the version of Powershell, Powershell might normalize the directory name including the drive letter, which results in not being able to reproduce this issue.

1. Clone this repository anywhere on your local machine
2. Navigate to the directory this project was cloned on, making sure to use an absolute path that contains the **lowercase** `c:/` drive letter.
  For example:
    ```cmd
    cd c:/<repo path>
    ```

3. Run `npm install`
4. Run `npm run test`
5. Note the failing test (I have the test setup to expect a specific mocked value)
6. Navigate to this same directory, making sure to use an absolute path that contains the **uppercase** `c:/` drive letter.
  For example:
    ```cmd
    cd C:/<repo path>
    ```
7. Run `npm run test` again
8. Note the succeeding test (the mocked value is returned in this case, so the test passes)
