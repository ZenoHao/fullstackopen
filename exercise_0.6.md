```mermaid
sequenceDiagram
    participant browser
    participant server

    Note left of browser: User enters text and clicks save
    browser->>browser: Page is redrawn with submitted text
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: 201 | Note created
    deactivate server
```
