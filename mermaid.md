```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types in text, hits enter

    browser->>browser: Redraw notes list on page
    browser->>server: POST for new note
    activate server
    server-->>browser: POST response
    deactivate server
```