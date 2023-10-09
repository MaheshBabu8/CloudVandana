function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
   
    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
      alert('Please fill in all fields.');
      return false;
    }
  
    const popupContent = `
      <strong>First Name:</strong> ${firstName}<br>
      <strong>Last Name:</strong> ${lastName}<br>
      <strong>Date of Birth:</strong> ${dob}<br>
      <strong>Country:</strong> ${country}<br>
      <strong>Gender:</strong> ${gender.value}<br>
      <strong>Profession:</strong> ${profession}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Mobile Number:</strong> ${mobile}
    `;
  
    const popup = document.getElementById('popupContent');
    popup.innerHTML = popupContent;
    const popupDiv = document.getElementById('popup');
    popupDiv.style.display = 'block';
  
    popupDiv.addEventListener('click', function(event) {
      if (event.target == popupDiv) {
        popupDiv.style.display = 'none';
        document.getElementById('surveyForm').reset();
      }
    });
  
    return false;
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  
    document.getElementById('surveyForm').reset();
  }
  
  