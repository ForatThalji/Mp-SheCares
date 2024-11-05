import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const calculateStrength = (password) => {
  let strength = 0;
  if (password.length > 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  return strength;
};

const getStrengthLabel = (strength) => {
  switch (strength) {
    case 4: return 'Strong';
    case 3: return 'Moderate';
    case 2: return 'Weak';
    default: return 'Very Weak';
  }
};

const getStrengthColor = (strength) => {
  switch (strength) {
    case 4: return 'bg-green-500 text-green-700'; // Strong
    case 3: return 'bg-yellow-500 text-yellow-700'; // Moderate
    case 2: return 'bg-orange-500 text-orange-700'; // Weak
    default: return 'bg-red-500 text-red-700'; // Very Weak
  }
};
const PasswordStrengthBar = ({ password }) => {
  const strength = calculateStrength(password);
  const strengthLabel = getStrengthLabel(strength);
  const strengthColor = getStrengthColor(strength);

  return (
    <div className="mt-2">
      <div
        className={`h-2 rounded-full transition-all duration-300 ${strengthColor}`}
        style={{ width: `${strength * 25}%` }}
      ></div>
      <p className={`text-sm mt-1 font-semibold ${strengthColor}`}>
        {strengthLabel}
      </p>
      
    </div>
  );
};

export default PasswordStrengthBar;
