const bonusInput = document.getElementById("bonus");
const wageringInput = document.getElementById("wagering");
const maxBetInput = document.getElementById("maxBet");
const cashoutInput = document.getElementById("cashout");

const calculateBtn = document.getElementById("calculate");

const totalWageringOutput = document.getElementById("totalWagering");
const betsRequiredOutput = document.getElementById("betsRequired");
const maxCashoutOutput = document.getElementById("maxCashout");

function formatNZD(value) {
  return `NZ$${value.toFixed(2)}`;
}

function calculateBonusTerms() {
  const bonus = Number(bonusInput.value);
  const wagering = Number(wageringInput.value);
  const maxBet = Number(maxBetInput.value);
  const cashout = Number(cashoutInput.value);

  if (
    bonus <= 0 ||
    wagering <= 0 ||
    maxBet <= 0 ||
    cashout < 0
  ) {
    totalWageringOutput.textContent = "Enter valid values";
    betsRequiredOutput.textContent = "-";
    maxCashoutOutput.textContent = "-";
    return;
  }

  const totalWagering = bonus * wagering;
  const betsRequired = Math.ceil(totalWagering / maxBet);

  totalWageringOutput.textContent = formatNZD(totalWagering);
  betsRequiredOutput.textContent = betsRequired.toLocaleString();
  maxCashoutOutput.textContent = formatNZD(cashout);
}

calculateBtn.addEventListener("click", calculateBonusTerms);
