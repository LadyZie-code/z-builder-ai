function generateCode() {
  const input = document.getElementById("userInput").value.trim();
  const outputBox = document.getElementById("outputBox");
  const output = document.getElementById("output");

  if (!input) {
    alert("Please describe your idea first!");
    return;
  }

  // Simple pretend AI output (for demo)
  const code = `// 🔧 Z-Builder AI Draft
// Idea: ${input}

function startApp() {
  console.log("Launching: ${input}");
  alert("App '${input}' generated successfully!");
}

startApp();`;

  output.textContent = code;
  outputBox.classList.remove("hidden");
}

function copyCode() {
  const code = document.getElementById("output").textContent;
  navigator.clipboard.writeText(code);
  alert("Code copied!");
}

function downloadCode() {
  const code = document.getElementById("output").textContent;
  const blob = new Blob([code], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "zbuilder_ai_code.js";
  a.click();
    }
