# Assignment Zero
## Purpose
The purpose of this assignment is to work with Postman become familiar with HTTP, and REST through the testing framework provided by Postman.  Furthermore, to check in your first node program to github.

You will create a Postman collection and create a REST test within the project. You will need to automate each test and include the required asserts (tests) for each request in the validation.

## Requirements
- Sign-up for a free GitHub account: https://github.com/ – Homework assignments will be stored on GitHub
- Accept GitHub Classroom 
- Download IDE, you can use WebStorm or VSCode for all assignments
- Download Desktop version of Postman https://www.postman.com/downloads/
- Create a REST request to get started
    - Create an environment variable book_title for the query string for title  
    - Url: https://www.googleapis.com/books/v1/volumes?q={{book_title}} 
    - Use this request to get a JSON response of books with the name Turing in the title
    - Parse the result and store the id in a postman variable 
    - Asserts (Postman tests) must include:
        - validating books returned have the title turing (e.g. items[i].title)
        - Response status code (e.g. 200)
- Create a Chained request that requests 
    - Url: https://www.googleapis.com/books/v1/volumes/{{id}} 
    - Using the id you stored from the first request, make sure the second request uses the ID pulled from the first request 
    - Create Asserts that:
        - Validate response contains the ID from the request 
        - Validate response status code (e.g. 200)
- Modify /utils/googlebooks.js
    - Change the method to return an object
    ```
        {
            data: response.data, 
            status: response.status, 
            statusText: response.statusText, 
            headers: response.headers,
            requestHeader: response.config.headers
        }
    ```
- Review the HTTP Headers in the Request and Response – create text file headers.txt and describe each key value pair in the HTTP header in both request and response and check it in with the project to GitHub (e.g. what is the content-type and what does it mean)

## Submission
- Create a readme.md at the root of your github repository with the embedded (markdown) 
    - Within the collection click the (…), share collection -> Embed
        - Static Button
        - Click update link
        - Include your environment settings
        - Copy to clipboard 
    - Check-in googlebooks command API with your change to google books
    - Check-in text file headers.txt with header values

## Rubic
- -10 homework not uploaded
- -2 missing postman button in readme.md
- -2 missing check in request 1 for checking title in items
- -2 missing ID check in request 2
- -2 missing change in utils/googlebooks.js (adding new object)
- -2 missing text file with request headers

## Resources
- Postman: https://www.getpostman.com/
- Blog: http://blog.getpostman.com/2014/01/27/extracting-data-from-responses-and-chaining-requests/

```
var issues = JSON.parse(responseBody);  
var closedState = postman.getEnvironmentVariable("closed_state");  
var allIssuesAreClosed = issues.every(function(issue) {  
  return issue.state === closedState;
});
tests["All issues are closed"] = allIssuesAreClosed;  
```
# Assignment Zero
## Purpose
The purpose of this assignment is to work with Postman become familiar with HTTP, and REST through the testing framework provided by Postman.  Furthermore, to check in your first node program to github.

You will create a Postman collection and create a REST test within the project. You will need to automate each test and include the required asserts (tests) for each request in the validation.

## Requirements
- Sign-up for a free GitHub account: https://github.com/ – Homework assignments will be stored on GitHub
- Accept GitHub Classroom 
- Download IDE, you can use WebStorm or VSCode for all assignments
- Download Desktop version of Postman https://www.postman.com/downloads/
- Create a REST request to get started
    - Create an environment variable book_title for the query string for title  
    - Url: https://www.googleapis.com/books/v1/volumes?q={{book_title}} 
    - Use this request to get a JSON response of books with the name Turing in the title
    - Parse the result and store the id in a postman variable 
    - Asserts (Postman tests) must include:
        - validating books returned have the title turing (e.g. items[i].title)
        - Response status code (e.g. 200)
- Create a Chained request that requests 
    - Url: https://www.googleapis.com/books/v1/volumes/{{id}} 
    - Using the id you stored from the first request, make sure the second request uses the ID pulled from the first request 
    - Create Asserts that:
        - Validate response contains the ID from the request 
        - Validate response status code (e.g. 200)
- Modify /utils/googlebooks.js
    - Change the method to return an object
    ```
        {
            data: response.data, 
            status: response.status, 
            statusText: response.statusText, 
            headers: response.headers,
            requestHeader: response.config.headers
        }
    ```
- Review the HTTP Headers in the Request and Response – create text file headers.txt and describe each key value pair in the HTTP header in both request and response and check it in with the project to GitHub (e.g. what is the content-type and what does it mean)

## Submission
- Create a readme.md at the root of your github repository with the embedded (markdown) 
    - Within the collection click the (…), share collection -> Embed
        - Static Button
        - Click update link
        - Include your environment settings
        - Copy to clipboard 
    - Check-in googlebooks command API with your change to google books
    - Check-in text file headers.txt with header values

## Rubic
- -10 homework not uploaded
- -2 missing postman button in readme.md
- -2 missing check in request 1 for checking title in items
- -2 missing ID check in request 2
- -2 missing change in utils/googlebooks.js (adding new object)
- -2 missing text file with request headers

## Resources
- Postman: https://www.getpostman.com/
- Blog: http://blog.getpostman.com/2014/01/27/extracting-data-from-responses-and-chaining-requests/

```
var issues = JSON.parse(responseBody);  
var closedState = postman.getEnvironmentVariable("closed_state");  
var allIssuesAreClosed = issues.every(function(issue) {  
  return issue.state === closedState;
});
tests["All issues are closed"] = allIssuesAreClosed;  
```

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/25563786-b96e31fd-dc9b-4cb3-ba4b-bb8be646b9ee?action=collection%2Ffork&collection-url=entityId%3D25563786-b96e31fd-dc9b-4cb3-ba4b-bb8be646b9ee%26entityType%3Dcollection%26workspaceId%3Dbe19206e-1648-4cce-8b7e-e3623bdcf319#?env%5Bcsci3916_HW0%5D=W3sia2V5IjoiIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJib29rX3RpdGxlIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiYW55Iiwic2Vzc2lvblZhbHVlIjoiVHVyaW5nIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6ImlkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiYW55Iiwic2Vzc2lvblZhbHVlIjoiTEZRN0R3QUFRQkFKIiwic2Vzc2lvbkluZGV4IjoyfV0=)
