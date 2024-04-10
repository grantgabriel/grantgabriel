// Fungsi untuk mengecek substring duplikat
hasDuplicate = (str) => {
  let regex = /(\w+)\s+\1/;
  return regex.test(str);
}

// Fungsi untuk mengecheck kekuatan password
checkPasswordStrength = (str) => {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(str);
}

// Fungsi untuk memvalidasi input saat pengguna mengetikkan atau mengubah nilai
document.getElementById("duplicate-input").addEventListener("input", function () {
  let duplicate_input = this.value;
  let duplicateDiv = document.getElementById("duplicate-message");

  if (duplicate_input.trim() === '') {
    duplicateDiv.textContent = '';
  } else if (hasDuplicate(duplicate_input)) {
    duplicateDiv.textContent = "Input salah. Ada kata yang duplikat dalam teks. 👿";
    duplicateDiv.classList.remove("text-green-600");
    duplicateDiv.classList.add("text-red-600");
  } else {
    duplicateDiv.textContent = "Input benar! Typingan orang ganteng. 🤩👍";
    duplicateDiv.classList.remove("text-red-600");
    duplicateDiv.classList.add("text-green-600");
  }
});

// Fungsi untuk memvalidasi input saat pengguna membuat password
document.getElementById("password-input").addEventListener("input", function () {
  let password_input = this.value;
  let passwordDiv = document.getElementById("password-message");

  if (password_input.trim() === '') {
    passwordDiv.textContent = '';
  } else if (checkPasswordStrength(password_input) === false) {
    passwordDiv.textContent = "Password tidak kuat! Sesuaikan dengan requirement. ❗";
    passwordDiv.classList.remove("text-green-600");
    passwordDiv.classList.add("text-red-600");
  } else {
    passwordDiv.textContent = "Password kuat! Warbyasah 💯";
    passwordDiv.classList.remove("text-red-600");
    passwordDiv.classList.add("text-green-600");
  }
});

// JAVASCRIPT SUCK, C++ SUPREMACY