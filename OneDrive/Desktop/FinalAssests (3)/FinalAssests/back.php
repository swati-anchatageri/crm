<?php

// Database connection configuration
$host = 'localhost';
$user = 'globalp3_assets_user';
$password = 'assets_pass';
$database = 'globalp3_assets_global';

// Create a connection
$conn = new mysqli($host, $user, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to select all data from the 'properties' table
$query = 'SELECT * FROM properties';

// Execute the query
$result = $conn->query($query);

// Check for errors
if (!$result) {
    $response = [
        'error' => true,
        'message' => "Error fetching data: " . $conn->error,
    ];
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit;
}

// Fetch the data as an associative array
$data = $result->fetch_all(MYSQLI_ASSOC);

// Close the database connection
$conn->close();

// Check if there are records
if (empty($data)) {
    // If no records found, return an empty JSON array
    $response = [
        'error' => false,
        'message' => 'No records found',
        'data' => [],
    ];
} else {
    // Convert the data to JSON
    $response = [
        'error' => false,
        'message' => 'Data fetched successfully',
        'data' => $data,
    ];
}

// Print the JSON response
echo json_encode($response, JSON_PRETTY_PRINT);
