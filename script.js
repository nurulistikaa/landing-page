function handleGetFormData(){
    let name = document.getElementById("name").value
    let city = document.getElementById("city").value
    let email = document.getElementById("email").value
    let zipCode = document.getElementById("zip-code").value
    let status = document.getElementById("status").checked
  
    return { name, city, email, zipCode,status}
  }
  
  // Zip Code
  function isNumber(str) {
  return !isNaN(str);
  }
  
  // Check Code
  function checkboxIsChecked() {
  const statusCheckbox = document.getElementById("status");
  return statusCheckbox.checked;
  }
  
  
  //  Validasi Semua Inputan
  function validateFormData(formData) {
  if ( formData &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked() ) {
      return true;
    }
       return false;
  }
  
  // Function Submit
  
  function submit(){
  
  const formData = handleGetFormData();
  const warningDiv = document.getElementById('warning');
  
  if (!validateFormData(formData)) {
      warningDiv.textContent = 'Periksa form anda sekali lagi';
  } else {
      warningDiv.textContent = '';
  }
  
  }
  
  const form = document.getElementById('myForm');
  form.addEventListener('submit',submit);