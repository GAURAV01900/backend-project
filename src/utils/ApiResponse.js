class ApiResponse {
    constructor(statusCode , message="Success" ,data) {
        this.statusCode = statusCode;
        super(message);
        this.message = message;
        this.data = data
        this.success = statusCode < 400
    }
}

export {ApiResponse}

// status code 
// information responses (100-199)
// Successful responses (200-299)
//redirection messages (300-399)
// client error response (400-499)
//server error response (500-599)