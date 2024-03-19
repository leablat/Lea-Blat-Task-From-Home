import { customersModel } from '../../database/models/customerModel';

async function getCustomers() {
  try {
    const customers = await customersModel.find({});

    if (!customers || customers.length === 0) {
      throw new Error('No customers found in the database.');
    }

    return customers;
  } catch (error) {
    console.error('Error fetching customers from the database:', error);
    throw error; 
  }
}


export { getCustomers };
