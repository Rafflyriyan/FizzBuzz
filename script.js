const add = (event) => {
  event.preventDefault();
  let angka1 = document.getElementById("angka1").value;
  let angka2 = document.getElementById("angka2").value;
  angka1 = parseInt(angka1);
  angka2 = parseInt(angka2);
  if (isNaN(angka1) || isNaN(angka2)) {
    alert("input abc is not number.");
    return;
  }
  fizzBuzz(angka1, angka2);
};

const fizzBuzz = (angka1, angka2) => {
  let hasil = angka1 + angka2;
  let outputPenjumlahan = document.getElementById("hasil_penjumlahan");
  outputPenjumlahan.innerHTML = `${angka1} + ${angka2} = ${hasil}`;
  let output = document.getElementById("hasil");
  alert(`Hasil penjumlahannya dari ${angka1} dan ${angka2} adalah ${hasil}`);
  if (hasil % 3 === 0 && hasil % 5 === 0) {
    output.innerHTML = "FizzBuzz!";
  } else if (hasil % 3 === 0) {
    output.innerHTML = "Fizz!";
  } else if (hasil % 5 === 0) {
    output.innerHTML = "Buzz!";
  } else {
    output.innerHTML = "";
  }
};
