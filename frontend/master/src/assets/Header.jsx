function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ profile_picture: "" });
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('userI');
    if (token) {
      setIsLoggedIn(true);
      fetchUserProfile();
      fetchCartItemCount();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/users/getusers/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const fetchCartItemCount = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/cart/${userId}/items`);
      setCartItemCount(response.data.itemCount || 0);
    } catch (error) {
      console.error('Error fetching cart item count:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3001/api/users/logout');
      localStorage.removeItem('userI');
      setIsLoggedIn(false);
      setUser({ profile_picture: "" });
      setCartItemCount(0);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <div className='headerImg'></div>
      <nav className="bg-white dark:bg-gray-900 w-full start-0 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <img className='h-24' src={logo} width={100} alt="Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            {isLoggedIn ? (
              <>
                <Link to="/UserProfile" className="text-gray-800 hover:text-blue-600 mr-4 flex items-center">
                  <img
                    src={user.profile_picture || "/api/placeholder/100/100"}
                    alt="Profile"
                    className="w-9 h-9 rounded-full border-2 border-white mr-2 shadow-lg"
                  />
                </Link>
                <Link to="/cart" className="text-gray-800 hover:text-blue-600 mr-4 flex items-center relative group">
                  <ShoppingCart className="w-6 h-6 transition-transform group-hover:scale-110" />
                </Link>
                <button onClick={handleLogout} className="px-4 py-2 text-white hover:text-[red] bg-blue-600 rounded hover:bg-blue-700">
                  Logout
                </button>
              </>
            ) : (
              <button type="button" className="text-grayRoot bg-greenRoot hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                <Link to="/Login">Login</Link>
              </button>
            )}
          </div>

          {/* التابس */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Home</Link>
              </li>
              <li>
                <Link to="/About" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">About</Link>
              </li>

              {isLoggedIn && (
                <>
                  <li>
                    <Link to="/Flipbook" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Magazine</Link>
                  </li>
                  <li>
                    <Link to="/TestSkin" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Test Skin</Link>
                  </li>
                  <li>
                    <Link to="/Bazar" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Bazar</Link>
                  </li>
                  <li>
                    <Link to="/Contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white">Contact</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
