  /* ─────────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────────── */
  function showError(fieldId, errId, msg) {
    const field = document.getElementById(fieldId);
    const err   = document.getElementById(errId);
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    if (msg) {
      const span = err.querySelector('span') || err;
      span.textContent = msg;
    }
    err.classList.add('visible');
  }

  function clearError(fieldId, errId) {
    const field = document.getElementById(fieldId);
    const err   = document.getElementById(errId);
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
    err.classList.remove('visible');
  }

  /* ─────────────────────────────────────────────
     VALIDATION RULES
  ───────────────────────────────────────────── */
  function validateFullName() {
    const val = document.getElementById('fullName').value.trim();
    if (!val) { showError('fullName', 'err-fullName'); return false; }
    clearError('fullName', 'err-fullName'); return true;
  }

  function validateEmail() {
    const val = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
      showError('email', 'err-email', 'Email address is required.');
      document.getElementById('err-email-msg').textContent = 'Email address is required.';
      return false;
    }
    if (!emailRegex.test(val)) {
      document.getElementById('err-email-msg').textContent = 'Please enter a valid email address (e.g. you@example.com).';
      showError('email', 'err-email');
      return false;
    }
    clearError('email', 'err-email'); return true;
  }

  function validateContact() {
    const val = document.getElementById('contactNumber').value.trim();
    // Allow digits, spaces, hyphens, plus sign — but must contain at least 7 digits
    const numbersOnly = /^[+\d\s\-()]+$/;
    const hasEnoughDigits = (val.replace(/\D/g, '').length >= 7);
    if (!val) {
      document.getElementById('err-contact-msg').textContent = 'Contact number is required.';
      showError('contactNumber', 'err-contactNumber');
      return false;
    }
    if (!numbersOnly.test(val)) {
      document.getElementById('err-contact-msg').textContent = 'Contact number must contain numbers only (digits, spaces, +, -, parentheses).';
      showError('contactNumber', 'err-contactNumber');
      return false;
    }
    if (!hasEnoughDigits) {
      document.getElementById('err-contact-msg').textContent = 'Please enter a valid contact number with at least 7 digits.';
      showError('contactNumber', 'err-contactNumber');
      return false;
    }
    clearError('contactNumber', 'err-contactNumber'); return true;
  }

  function validateDestination() {
    const val = document.getElementById('destination').value;
    if (!val) { showError('destination', 'err-destination'); return false; }
    clearError('destination', 'err-destination'); return true;
  }

  function validateTravelDate() {
    const val = document.getElementById('travelDate').value;
    if (!val) { showError('travelDate', 'err-travelDate'); return false; }
    clearError('travelDate', 'err-travelDate'); return true;
  }

  function validateVisitors() {
    const val = document.getElementById('numVisitors').value;
    if (!val) { showError('numVisitors', 'err-numVisitors'); return false; }
    clearError('numVisitors', 'err-numVisitors'); return true;
  }

  function validateMessage() {
    const val = document.getElementById('message').value.trim();
    if (!val) { showError('message', 'err-message'); return false; }
    clearError('message', 'err-message'); return true;
  }

  /* ─────────────────────────────────────────────
     SET MIN DATE
  ───────────────────────────────────────────── */
  const travelDateInput = document.getElementById('travelDate');
  const today = new Date().toISOString().split('T')[0];
  travelDateInput.setAttribute('min', today);

  /* ─────────────────────────────────────────────
     LIVE VALIDATION (on change/input per field)
  ───────────────────────────────────────────── */
  document.getElementById('fullName').addEventListener('input', validateFullName);
  document.getElementById('email').addEventListener('input', validateEmail);
  document.getElementById('contactNumber').addEventListener('input', validateContact);
  document.getElementById('destination').addEventListener('change', validateDestination);
  document.getElementById('travelDate').addEventListener('change', validateTravelDate);
  document.getElementById('numVisitors').addEventListener('change', validateVisitors);
  document.getElementById('message').addEventListener('input', validateMessage);

  // Block non-numeric characters in contact field (allow +, digits, spaces, hyphens, parens)
  document.getElementById('contactNumber').addEventListener('keypress', function(e) {
    if (!/[\d+\s\-()]/.test(e.key)) e.preventDefault();
  });

  /* ─────────────────────────────────────────────
     FORM SUBMIT
  ───────────────────────────────────────────── */
  document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Run all validators
    const results = [
      validateFullName(),
      validateEmail(),
      validateContact(),
      validateDestination(),
      validateTravelDate(),
      validateVisitors(),
      validateMessage()
    ];

    const allValid = results.every(r => r === true);

    if (!allValid) {
      // Scroll to first invalid field
      const firstInvalid = this.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // All valid — show success
    const successMsg = document.getElementById('successMsg');
    successMsg.style.display = 'block';
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Reset form and clear valid states
    this.reset();
    travelDateInput.setAttribute('min', today);
    this.querySelectorAll('.form-control, .form-select').forEach(f => {
      f.classList.remove('is-valid', 'is-invalid');
    });
    this.querySelectorAll('.field-error').forEach(e => e.classList.remove('visible'));

    setTimeout(() => { successMsg.style.display = 'none'; }, 8000);
  });