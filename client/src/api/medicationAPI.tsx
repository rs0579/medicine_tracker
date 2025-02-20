import { PatientData } from "../interfaces/patientdata"

 // This function sends a GET request to the '/api/medication' endpoint to fetch
 // feedback data. It handles errors by logging them to the console and returns
 // an empty array if an error occurs.
const retrieveMedication = async () => {
  try {
    const response = await fetch('/api/medication', {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    console.log(data)

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return data;

  } catch (err) { 
    console.log('Error from data retrieval:', err);
    return [];
  }
}


 // This function sends a POST request to the '/api/medication/' endpoint with the
 // feedback data provided in the body. It handles errors by logging them to the
 // console and returns a rejected promise if an error occurs.

const addMedication = async (body: PatientData) => {
  try {
    const response = await fetch(
      '/api/medication/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
    )
    const data = await response.json();

    if (!response.ok) {
      throw new Error('Invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error from Feedback Creation: ', err);
    return Promise.reject('Could not create feedback');
  }
}

export { retrieveMedication, addMedication };
