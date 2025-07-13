function sendTelegramMessage(event) {
  event.preventDefault();

  const team = document.getElementById("team").value;
  const p1 = document.getElementById("p1").value;
  const uid1 = document.getElementById("uid1").value;
  const wa1 = document.getElementById("wa1").value;
  const p2 = document.getElementById("p2").value;
  const uid2 = document.getElementById("uid2").value;
  const wa2 = document.getElementById("wa2").value;
  const p3 = document.getElementById("p3").value;
  const uid3 = document.getElementById("uid3").value;
  const wa3 = document.getElementById("wa3").value;
  const p4 = document.getElementById("p4").value;
  const uid4 = document.getElementById("uid4").value;
  const wa4 = document.getElementById("wa4").value;
  const sub1 = document.getElementById("sub1").value;
  const uidSub1 = document.getElementById("uidsub1").value;
  const sub2 = document.getElementById("sub2").value;
  const uidSub2 = document.getElementById("uidsub2").value;

  const msg = `🔥 FRAGGIX TEAM REGISTRATION 🔥\\nTeam Name: ${team}\\n\\n👥 Main Players:\\n1. ${p1} (UID: ${uid1}, WhatsApp: ${wa1})\\n2. ${p2} (UID: ${uid2}, WhatsApp: ${wa2})\\n3. ${p3} (UID: ${uid3}, WhatsApp: ${wa3})\\n4. ${p4} (UID: ${uid4}, WhatsApp: ${wa4})\\n\\n🔄 Substitutes:\\n- ${sub1} (UID: ${uidSub1})\\n- ${sub2} (UID: ${uidSub2})`;

  fetch("https://api.telegram.org/bot7658527770:AAEyyAWLO2N2b7xW0O5Cc0AGIcoYPjtV9sY/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: "5983644996",
      text: msg
    })
  }).then(response => {
    if (response.ok) {
      alert("Team registered successfully!");
      document.querySelector("form").reset();
    } else {
      alert("Failed to send. Try again later.");
    }
  });
}