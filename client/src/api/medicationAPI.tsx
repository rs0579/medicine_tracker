import { PatientData } from "../interfaces/patientdata";

// Function to retrieve medication data
const retrieveMedication = async () => {
  try {
    const response = await fetch('/api/medication', {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Invalid API response: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API Response:", data);

    if (!Array.isArray(data)) {
      console.error("Expected an array but received:", data);
      return [];
    }

    return data;

  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};


// Function to add medication data
const addMedication = async (body: PatientData) => {
  try {
    const response = await fetch('/api/medication', { // Removed trailing slash
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error || 'Invalid API response, check network tab!');
    }

    return data;

  } catch (err) {
    console.log('Error from Medication Creation:', err);
    return Promise.reject(err);
  }
};

export { retrieveMedication, addMedication };
