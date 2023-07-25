const createStudent = async (values) => {
    try {
        const apiUrl = 'http://localhost:3000/createStudent'; 
    
        // Destructuring the 'values' parameter - object containing student information
        const {
          name,
          joining_date,
          address,
          phone_number,
          classes_taken,
          mode_of_class,
          last_step,
        } = values;
    
        // Create the student data object to be sent in the POST request
        const studentData = {
          name,
          joining_date,
          address,
          phone_number,
          classes_taken,
          mode_of_class,
          last_step,
        };
    
        // Make the POST request to the API endpoint using fetch
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(studentData),
        });
    
        if (!response.ok) {
          throw new Error('Failed to create student');
        }
    
        const responseData = await response.json();
        return responseData; // This can be an object with a success message or the new student ID
      } catch (error) {
        console.error('Error creating student:', error.message);
        return errorInfo.msg = error.message;
        throw error;
      }
}