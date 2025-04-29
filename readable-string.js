// Sample input:
const inputData = [
  { day: 'Tuesday', from: '09:00', to: '17:00' },
  { day: 'Wednesday', from: '09:00', to: '17:00' },
  { day: 'Thursday', from: '09:00', to: '17:00' },
  { day: 'Friday', from: '09:00', to: '17:00' },
  { day: 'Saturday', from: '10:00', to: '14:00' }
];
// Expected output:
const outputData = [
  'Monday: Closed',
  'Tuesday - Friday: 09:00 - 17:00',
  'Saturday: 10:00 - 14:00',
  'Sunday: Closed'
];