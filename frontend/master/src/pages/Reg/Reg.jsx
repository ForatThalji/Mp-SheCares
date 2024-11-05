import React, { useState, useEffect } from 'react';
import facial2 from '../../assets/facial2.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { storage } from '../firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import PasswordStrengthBar from '../../Components/PasswordStrengthBar';
import Swal from 'sweetalert2';
import { Eye, EyeOff } from 'lucide-react';

function Reg() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
    address: '',
    profile_picture: '',
    date_of_birth: ''
  });
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  // إضافة useEffect لمراقبة التمرير
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_picture") {
      setProfilePictureFile(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.first_name) errors.first_name = "First name is required";
    if (!formData.last_name) errors.last_name = "Last name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 6) errors.password = "Password must be at least 6 characters long";
    if (!formData.phone_number || !/^\d{10}$/.test(formData.phone_number)) errors.phone_number = "Valid phone number is required";
    if (!formData.date_of_birth) errors.date_of_birth = "Date of birth is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const uploadImageAndRegister = async (data) => {
      if (profilePictureFile) {
        const storageRef = ref(storage, `profile_pictures/${profilePictureFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, profilePictureFile);
  
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // Handle upload progress (optional)
          },
          (error) => {
            console.error('Upload error:', error);
            Swal.fire('Upload Error', 'Failed to upload profile picture', 'error');
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            const updatedFormData = { ...data, profile_picture: downloadURL };
            await registerUser(updatedFormData);
          }
        );
      } else {
        await registerUser(data);
      }
    };

    const registerUser = async (data) => {
      try {
        const response = await axios.post('http://localhost:3001/api/users/register', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const token = response.data.token;
        console.log("token is = "+token)
        if(token){
          if (rememberMe) {
            localStorage.setItem('authToken', token);
          } else {
            sessionStorage.setItem('authToken', token);
          }
        
          Swal.fire({
            title: "Registration Successful",
            width: 500,
            height: 200,
            padding: "3em",
            confirmButtonText: "OK",
            confirmButtonColor: "#4c9526",
          });

          navigate('/Login');
        }
      } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : error.message);
        Swal.fire('Registration Error', 'Registration failed', 'error');
      }
    };

    await uploadImageAndRegister(formData);
  };

  return (
    <>
      {/* شريط التقدم */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-pinkRoot transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* محتوى الصفحة */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-4 space-y-6 bg-white shadow-xl rounded-xl md:flex-row md:space-y-0">
          <div className="relative">
            <img src={facial2} alt="img" className="w-[500px] h-full hidden rounded-l-xl md:block object-cover" />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <span className="mb-2 text-2xl font-bold">Registration</span>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* حقول النموذج ... */}
              <div className="py-2">
                <span className="mb-1 text-sm">First Name</span>
                <input
                  type="text"
                  className={`w-full p-1.5 border rounded-md text-sm ${errors.first_name ? 'border-red-500' : 'border-gray-300'}`}
                  name="first_name"
                  placeholder="Firstname"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
              </div>
              <div className="py-2">
                <span className="mb-1 text-sm">Last Name</span>
                <input
                  type="text"
                  className={`w-full p-1.5 border rounded-md text-sm ${errors.last_name ? 'border-red-500' : 'border-gray-300'}`}
                  name="last_name"
                  placeholder="Lastname"
                  value={formData.last_name}
                  onChange={handleChange}
                />
                {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
              </div>
              <div className="py-2">
                <span className="mb-1 text-sm">Email</span>
                <input
                  type="email"
                  placeholder="Email"
                  className={`w-full p-1.5 border rounded-md text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
              <div className="relative py-2">
                <span className="mb-1 text-sm">Password</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className={`w-full p-1.5 border rounded-md text-sm ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                <PasswordStrengthBar password={formData.password} />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
              </div>
              <div className="py-2">
                <span className="mb-1 text-sm">Phone Number</span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={`w-full p-1.5 border rounded-md text-sm ${errors.phone_number ? 'border-red-500' : 'border-gray-300'}`}
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
                {errors.phone_number && <p className="text-red-500 text-xs">{errors.phone_number}</p>}
              </div>
              <div className="py-2">
                <span className="mb-1 text-sm">Date of Birth</span>
                <input
                  type="date"
                  className={`w-full p-1.5 border rounded-md text-sm ${errors.date_of_birth ? 'border-red-500' : 'border-gray-300'}`}
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                />
                {errors.date_of_birth && <p className="text-red-500 text-xs">{errors.date_of_birth}</p>}
              </div>
              <div className="py-2">
                <span className="mb-1 text-sm">Profile Picture</span>
                <input
                  type="file"
                  className="w-full p-1.5 border rounded-md text-sm border-gray-300"
                  name="profile_picture"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="text-sm">Remember Me</span>
              </div>
              <button type="submit" className="w-full px-4 py-2 bg-greenRoot text-grayRoot rounded-md hover:bg-blue-700">
                Register
              </button>
            </form>
            <div className="mt-4 text-sm">
              Already have an account? <Link to="/login" className="text-blue-600">Login here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reg;