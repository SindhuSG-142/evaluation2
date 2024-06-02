
import './App.css';
function App() {
  const[authState, setAuthState]=useState({
    isAuthenticated: false,
    token:null,
    email:null,
  });
  return (
   <AuthContext.Provider value={{authState, setAuthState}}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Home" element={authState.isAuthenticated ? <HomePage/>: <NavBar/>}/>
        <Route path="/Product" element={authState.isAuthenticated ? <ProductDetails/>: <NavBar/> }/>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
   </AuthContext.Provider>
  );
}:

export default App;
