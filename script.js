function validEmail(str) {
  if (!str) return false;

  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,}$/;
  return regex.test(str);
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
