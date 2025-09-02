import CryptoJS from 'crypto-js';

// Encryption utilities for journal entries
export const encryptData = (data: any, password: string): string => {
  try {
    // Convert data to JSON string before encryption
    const jsonString = JSON.stringify(data);
    // Encrypt with AES using the password
    return CryptoJS.AES.encrypt(jsonString, password).toString();
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
};

// Decryption utilities for journal entries
export const decryptData = (encryptedData: string, password: string): any => {
  try {
    // Decrypt with AES using the password
    const bytes = CryptoJS.AES.decrypt(encryptedData, password);
    // Convert decrypted bytes to original JSON string
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!decryptedString) {
      throw new Error('Decryption resulted in empty string. Wrong password?');
    }
    
    // Parse JSON string to object
    return JSON.parse(decryptedString);
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data. Incorrect password.');
  }
};

// Create a hash of the password for verification
export const hashPassword = (password: string): string => {
  return CryptoJS.SHA256(password).toString();
};