function calcLoan() {
  try {

    var value = 0;
    var n = parseInt(document.getElementById('repayment_slider').value) * 12;
    var r = (parseFloat(document.getElementById('interest_slider').value) / 100) / 12;
    var R = Math.pow(r + 1, n);
    var P = parseFloat(document.getElementById('car_price').value);
    var d = parseFloat(document.getElementById('deposit').value);
    value = (P - d) * ((r * R) / (R - 1));
    if (value) {
      document.querySelector('.installment-value').innerHTML = `<span>${value.toFixed(2)}</span><small class="m-3 " style="color:black;">/Month</small>`;
    }
    else {
      value = 0
      document.querySelector('.installment-value').innerHTML = `<span>${value.toFixed(2)}</span><small class="m-3 " style="color:black;">/Month</small>`;
    }

  } catch (error) {

  }
}


try {

  document.getElementById('repayment_value').textContent = document.getElementById('repayment_slider').value;
  document.getElementById('interest_value').textContent = document.getElementById('interest_slider').value;

  document.getElementById('car_price').addEventListener('change', function (event) {
    calcLoan();
  });

  document.getElementById('deposit').addEventListener('change', function (event) {
    calcLoan();
  });

  document.getElementById('repayment_slider').addEventListener('input', function (event) {
    document.getElementById('repayment_value').textContent = this.value;
    calcLoan();
  });

  document.getElementById('interest_slider').addEventListener('input', function (event) {
    document.getElementById('interest_value').textContent = this.value;
    calcLoan();
  });


} catch (error) {

}