// The function to fetch user data asynchronously from the API
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL to fetch user data
    const dataContainer = document.getElementById('api-data'); // Element to display fetched data

    try {
        // Attempt to fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message before appending new data
        dataContainer.innerHTML = '';

        // Create a <ul> element to list user names
        const userList = document.createElement('ul');

        // Loop through users array and create a <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the user list to the dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors if data fetching fails
        dataContainer.innerHTML = 'Failed to load user data.'; // Display error message
    }
}

// Wait until the DOM is fully loaded before invoking fetchUserData
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData(); // Call the fetchUserData function to get the data
});
