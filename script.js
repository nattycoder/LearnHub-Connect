function showContent(contentType) {
    var mainContent = document.getElementById("main-content");

    switch (contentType) {
        case 'courses':
            mainContent.innerHTML = `
                <h2>Courses</h2>
                <p>Explore our available courses and check for details.</p>
                <ul class="course-list">
                    <li>
                        <img src="assets/courseA.jpg" alt="Course A Image">
                        <div class="course-details">
                            <p class="course-title">Understanding Einstein: the real theory of relativity</p>
                            <p class="course-description">Behind the mind of the german genius. What gave birth to the theory of everything.</p>
                            <a href="#" onclick="viewCourseDetails('Understanding Einstein: the real theory of relativity', 'Ranim Hassine', 10, '$100', 'Learn the basics!', 'No prior experience required.', '2023-04-01')">View Details</a>
                        </div>
                    </li>
                    <li>
                        <img src="assets/courseB.jpg" alt="Course B Image">
                        <div class="course-details">
                            <p class="course-title">Time and space exploration</p>
                            <p class="course-description">This course is designed for every mind reaching to eliminate their borders with the space/time complex.</p>
                            <a href="#" onclick="viewCourseDetails('Time and space exploration', 'Ousama Boubaker', 12, '$150', 'Advance your skills!', 'Basic understanding of time and space.', '2023-04-15')">View Details</a>
                        </div>
                    </li>
                    <li>
                        <img src="assets/courseC.jpg" alt="Course C Image">
                        <div class="course-details">
                            <p class="course-title">Astronomy : from the big bang to the dark energy</p>
                            <p class="course-description">Your tool kit for the space exploration, an adventure to start now and finnish it with the end of times.</p>
                            <a href="#" onclick="viewCourseDetails('Astronomy : from the big bang to the dark energy', 'Mortadha Manaii', 15, '$200', 'Take your knowledge to the next level!', 'Solid foundation in astronomy.', '2023-05-01')">View Details</a>
                        </div>
                    </li>
                </ul>
            `;
            break;

        case 'profile':
            mainContent.innerHTML = `
                <h2>Profile</h2>
                <p class="profile-info"><b>Name:  </b>Alaa Eddine Ayedi</p>
                <p class="profile-info"><b>Email: </b>alaa.ayedi@learnhubconnect.com</p>
                <p class="profile-info"><b>Phone: </b>+216 20 468 880</p>
            `;
            break;

        case 'contact':
            mainContent.innerHTML = `
                <h2>Contact Us</h2>
                <p class="contact-info">Feel free to reach out to us with any questions or concerns.</p>
                <p class="contact-info"><b>Email: </b><a href="mailto:info@learnhubconnect.com">info@learnhubconnect.com</a></p>
                <p class="contact-info"><b>Phone: </b>+216 20 468 880</p>
            `;
            break;
    }
}

// LOGOUT FUNCTION (ending a session)
function logout() {
    alert("Logged out. Redirecting to the welcome page.");
    window.location.href = "welcome.html";
}

// SIGN IN FORM
function submitSignInForm() {
    // set a default budget of 100 DINARS during sign-in (by default just for testing)
    var money = 100;

    // Get the value of username and password from sign-in form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate username
    if (!validateUsername(username)) {
        alert("Username must be at least 8 characters long, unique, and have both upper and lower case.");
        return false;
    }

    // Validate password
    /* if (!validatePasswordSignIn(password)) {
        alert("Password must be at least 12 characters long and include characters, special characters, and numbers!");
        return false;
    }*/

    // Check if username is not empty
    if (username.trim() !== "" && password.trim() !== "") {
        // Set a session variable for username, login date, and money
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("loginDate", new Date().toLocaleString());
        sessionStorage.setItem("money", money);

        // Redirect to index.html after successful sign-in
        window.location.href = "index.html";
    } else {
        alert("Please enter a valid username.");
    }
}

// SIGN UP FORM
function submitSignUpForm() {
    var defaultBudget = 100;
    var money = defaultBudget;
    // Get the value of the money field
    var moneyElement = document.getElementById("money");
    var money = moneyElement ? moneyElement.value : defaultBudget;

    // Get the value of username and password from sign-up form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password-verify").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Validate email format
    if (!validateEmail(email)) {
        alert("Email must be valid!");
        return false;
    }

    // Redirect to index.html after successful sign-up
    if (validateUserDetails(username, password, confirmPassword) && username.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && password.trim() !== "" && confirmPassword.trim() !== "") {
        // Set a session variable for username, login date, and money
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("loginDate", new Date().toLocaleString());
        sessionStorage.setItem("money", money);

        // Redirect to index.html after successful sign-in
        window.location.href = "index.html";
    } else {
        alert("Please enter valid fields.");
    }
}
// Validate username, password, and phone number
function validateUserDetails(username, password, confirmPassword) {
    // Validate username
    if (!validateUsername(username)) {
        alert("Username must be at least 8 characters long, unique, and have both upper and lower case.");
        return false;
    }

    // Validate password
    if (!validatePasswordSignUp(password, confirmPassword)) {
        alert("Make sure the passwords match.");
        return false;
    }

    return true;
}

// COURSE DETAILS FUNCTION (I used fields of my choice in here)
function viewCourseDetails(name, instructor, hours, price, description, prerequisites, startDate) {
    sessionStorage.setItem("courseName", name);
    sessionStorage.setItem("courseInstructor", instructor);
    sessionStorage.setItem("courseHours", hours);
    sessionStorage.setItem("coursePrice", price);
    sessionStorage.setItem("courseDescription", description);
    sessionStorage.setItem("coursePrerequisites", prerequisites);
    sessionStorage.setItem("courseStartDate", startDate);
    window.location.href = "course-details.html";
}

// GET THE PURCHASE FORM FROM THE HTML FILE TO BE DISPLAYED
function showPurchaseForm() {
    var purchaseForm = document.getElementById("purchaseForm");
    purchaseForm.style.display = "block"; // MORE USER FRIENDLY 
}

// SUCCESSFUL PURCHASE
function submitPurchaseForm(event) {
    event.preventDefault();

    // Get form fields
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var courseType = document.getElementById("courseType").value;
    var instructor = document.getElementById("instructor").value;

    // Store form data in sessionStorage
    sessionStorage.setItem("purchaseRecapUsername", username);
    sessionStorage.setItem("purchaseRecapEmail", email);
    sessionStorage.setItem("purchaseRecapPhone", phone);
    sessionStorage.setItem("purchaseRecapAddress", address);
    sessionStorage.setItem("purchaseRecapCourseType", courseType);
    sessionStorage.setItem("purchaseRecapInstructor", instructor);

    // Redirect to recap.html
    window.location.href = "recap.html";
}


// CANCEL A PURCHASE FUNCTION
function cancelPurchase() {
    var purchaseForm = document.getElementById("purchaseForm");
    var cancelPurchaseButton = document.getElementById("cancelPurchaseButton");

    // Hide the purchase form
    purchaseForm.style.display = "none";
}

// VALIDATE PURCHASE FORM
function validatePurchaseForm() {
    // Validate form fields
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var optionalEmail = document.getElementById("optionalEmail").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var courseType = document.getElementById("courseType").value;
    var instructor = document.getElementById("instructor").value;
    var ribNumber = document.getElementById("ribNumber").value;

    // Validate email format using a simple regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username.trim() === "" || !emailRegex.test(email) || !validateOptionalEmail(optionalEmail) || phone.trim() === "" || address.trim() === "" || ribNumber.trim() === "") {
        // Display a warning popup
        alert("Please fill out all required fields correctly.");
        return false;
    }

    // Validate username
    if (!validateUsername(username)) {
        alert("Username must be at least 8 characters long, unique, and have both upper and lower case.");
        return false;
    }

    // Validate password
    if (!validatePassword(password, confirmPassword)) {
        alert("Password must be at least 12 characters long and include characters, special characters, and numbers. Make sure the passwords match.");
        return false;
    }

    // Validate phone number
    if (!validatePhoneNumber(phone)) {
        alert("Phone number must be 8 digits long and start with either 9, 2, or 5.");
        return false;
    }

    // Retrieve user's budget from sessionStorage
    var userBudget = parseInt(sessionStorage.getItem("money"));

    // Retrieve course price from sessionStorage
    var coursePrice = parseInt(sessionStorage.getItem("coursePrice").replace(/\D/g, ''));

    // Check if the user has enough budget to purchase the course
    if (userBudget >= coursePrice) {
        // Simulate successful purchase for demonstration purposes
        alert("Purchase successful!");
        return true;
    } else {
        // Display an alert or notification that the user doesn't have enough budget
        alert("You don't have enough budget to purchase this course.");
        return false;
    }
}

function validateUsername(username) {
    // Check if the username meets the specified criteria
    // For a real application, you would need to check uniqueness in your backend
    return /^(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/.test(username);
}

function validatePasswordSignUp(password, confirmPassword) {
    // Check if the password meets the specified criteria
    if (
        // /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/.test(password) &&
        password === confirmPassword
    ) {
        return true;
    } else {
        alert("Make sure the passwords match.");
        return false;
    }
}
/*
function validatePasswordSignIn(password) {
    // Check if the password meets the specified criteria
    if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/.test(password)) {
        return true;
    } else {
        alert("Password must be at least 12 characters long and include characters, special characters, and numbers.");
        return false;
    }
}*/


function validatePhoneNumber(phone) {
    // Check if the phone number meets the specified criteria
    return /^[925]\d{8}$/.test(phone);
}

function validateEmail(email) {
    // Validate optional email if provided
    if (email.trim() !== "") {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

function validateOptionalEmail(optionalEmail) {
    // Validate optional email if provided
    if (optionalEmail.trim() !== "") {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(optionalEmail);
    }

    // If optional email is not provided, consider it valid
    return true;
}
